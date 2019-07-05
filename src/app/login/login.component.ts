import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showEmailPage;
  userName;
  password;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  doLogin(){
    if(!this.userName || !this.password){
      alert("Please enter some username and passwowrd");
      return;
    }
   this.showEmailPage = this.loginService.showEmailPage;
   this.loginService.showLoginPage = false;
   this.loginService.showEmailPage = true;
   this.loginService.userName = this.userName;
  }
}
