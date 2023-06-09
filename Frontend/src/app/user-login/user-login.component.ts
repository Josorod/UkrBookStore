import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthentificationService } from '../services/authentification.service';
import { AlertyfyService } from '../services/alertyfy.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthentificationService, private alerify: AlertyfyService,
    private router: Router) { }

  ngOnInit() {


  }

  onLogin(loginForm: NgForm){
    console.log(loginForm.value);
    const token = this.authService.authUser(loginForm.value);
    if(token){
      localStorage.setItem('token',token.userName);
      this.alerify.success('Login successful');
      this.router.navigate(['/']);
    }else{
      this.alerify.error('Login failed');
    }
  }
}
