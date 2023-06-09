import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../model/user';

import { AlertyfyService } from '../services/alertyfy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registrationForm: FormGroup;
  user: User;
  userSubmit:boolean;
  constructor(private fb: FormBuilder, private userService: UserService, private alertyfy: AlertyfyService, private router: Router) {}

  ngOnInit() {
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(13)])
    });

  }

  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }

  onSubmit(){
    console.log(this.registrationForm);
    this.userSubmit = true;
    if(this.registrationForm.valid){
      // this.user = Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.userDataMap());
      this.registrationForm.reset();
      this.userSubmit = false;
     this.alertyfy.success("You are successfully registered");
     this.router.navigate(['/']);

    }else{
      this.alertyfy.error("Enter needed information");
    }
  }

  userDataMap(): User{
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }

}

