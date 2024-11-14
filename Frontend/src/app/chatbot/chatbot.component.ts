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

export class ChatbotComponent {
  isVisible = false;
  userMessage = '';
  messageCounter = 0;
  messages: { sender: string; content: string; time: string }[] = [];

  // Toggle the visibility of the chat
  toggleChat() {
    this.isVisible = !this.isVisible;
  }

  // Send a message and add it to the chat
  sendMessage() {
    if (this.userMessage.trim()) {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      // Add user's message
      this.messages.push({
        sender: 'User',
        content: this.userMessage,
        time: currentTime
      });
      this.messageCounter++;

      // Reset the user message input
      this.userMessage = '';

      // Add a bot response
      setTimeout(() => {
        this.messages.push({
          sender: 'Bot',
          content: 'How can I assist you further?',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
        this.messageCounter++;
      }, 1000); // Delay the bot response by 1 second
    }
  }

  clearMessages() {
    this.messages = [];
    this.messageCounter = 0;
  }
}
