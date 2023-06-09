import * as $ from 'jquery'
import { Component, OnInit } from '@angular/core';
import { AlertyfyService } from '../services/alertyfy.service';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-navigation_bar',
  templateUrl: './navigation_bar.component.html',
  styleUrls: ['./navigation_bar.component.css']
})

export class Navigation_barComponent implements OnInit {
  loggedInUser: string;
  itemQuantity = 0;
  constructor(private alertify: AlertyfyService, private router: Router) { }

  ngOnInit() {
    $(document).ready(function(){
      $("#ThemeSelector").change(function(){
        $("body").toggleClass("bg-secondary");
        $("nav").toggleClass("navbar-dark bg-dark");
        $(".form-check-label").toggleClass("text-white");
        $("footer").toggleClass("text-white bg-dark");
        $("footer a").toggleClass(" text-white");
        $("nav a").toggleClass(" text-white");


      });
    });

  }

  userLogged(){
    this.loggedInUser = localStorage.getItem('token')!;
    return this.loggedInUser;

  }

  onLogout(){
    localStorage.removeItem('token');
    this.alertify.success('You are Logged out');
    this.router.navigate(['/']);
  }

  userLoggedAdmin(){
    this.loggedInUser = localStorage.getItem('token')!;
    if(localStorage.getItem('token') == 'admin'){
      return this.loggedInUser;
    }else return false;


  }
}

