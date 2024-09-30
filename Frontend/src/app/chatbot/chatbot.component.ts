import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { lastValueFrom } from 'rxjs';



interface ApiKeyResponse {
  apiKey: string;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {

  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  messages: ChatMessage[] = [];
  userInput: string = '';
  apiUrl = 'https://api.openai.com/v1/chat/completions';

  loading: boolean = false;
  error: string | null = null;

  userImagePath = '../../assets/Images/user-286-256.png';
  botImagePath = '../../assets/Images/botImage.png';


  formattedResponse: SafeHtml = '';
  customErrorMessage: string | null = null;

  isLoading: boolean = false;
  errorOccurred: boolean = false;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.messages.push({ text: "Hi, I'm Fred! How can I help you today?", user: false });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      const element = this.messagesContainer.nativeElement;
      element.scrollTop = element.scrollHeight;
    } catch (err) { }
  }

  autoGrow(event: any): void {
    const textArea = event.target;
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';
  }

  // async getApiKey(): Promise<string> {
  //   try {
  //     const headers = new HttpHeaders({
  //       Authorization: `Bearer ${environment.authToken}`
  //     });

  //     const response = this.http.get<{ apiKey: string }>('/api/getApiKey', { headers });
  //     const data = await lastValueFrom(response);
  //     return data.apiKey || '';
  //   } catch (error) {
  //     console.error('Error fetching API key:', error);
  //     return '';
  //   }
  // }

  async sendMessage() {
    if (this.userInput.trim() === '') return;

    this.messages.push({ text: this.userInput, user: true });

    const userMessage = this.userInput;
    const apiKey = ""; 

    if (!apiKey) {
      this.handleError('Failed to retrieve API key.');
      return;
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    });

    const conversation = [
      { role: 'system', content: 'You are personable chatbot.' },
      { role: 'user', content: userMessage },
    ];

    this.isLoading = true;
    this.errorOccurred = false;
    this.customErrorMessage = '';

    try {
      const response = await this.http.post(this.apiUrl, { model: 'gpt-3.5-turbo', messages: conversation }, { headers }).toPromise();

      if (response && 'choices' in response) {
        const apiResponse: ApiResponse = response as ApiResponse;
        const botResponse = apiResponse.choices[0].message.content.trim();

        // Push the bot's response to the messages array
        this.messages.push({ text: botResponse, user: false });

        // Format and set the response
        this.formattedResponse = this.formatCodeBlock(botResponse);
      } else {
        this.handleError("Invalid or empty response from the API.");
      }
    } catch (error) {
      this.handleError("I'm experiencing technical difficulties at the moment. Please try again later.");
      console.error(error);
    } finally {
      this.isLoading = false;
    }
    this.userInput = ''; 
  }

  handleError(errorMessage: string): void {
    this.customErrorMessage = errorMessage;
    this.errorOccurred = true; 
  }

  formatCodeBlock(code: string): SafeHtml {
    const formattedCode = this.sanitizer.bypassSecurityTrustHtml(`<pre><code>${code}</code></pre>`);
    return formattedCode;
  }
}

interface ApiResponse {
  choices: { message: { content: string } }[];
}

interface ChatMessage {
  text: string;
  user: boolean;
}
