import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Assignment';
  showLoginPage;
  showEmailPage;
  constructor(private loginSrvice: LoginService){}
  ngOnInit(){
    this.showLoginPage = true;
    this.showEmailPage = false;
  }

  checkToShowLoginPage(){
    return this.loginSrvice.showLoginPage;
  }
  checkToShowMailPage(){
    return this.loginSrvice.showEmailPage;
  }

  
}
