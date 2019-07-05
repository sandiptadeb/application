import { Component, OnInit } from '@angular/core';
import { MailService } from '../mail.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-mailtemplate',
  templateUrl: './mailtemplate.component.html',
  styleUrls: ['./mailtemplate.component.css']
})
export class MailtemplateComponent implements OnInit {
  email;
  userName;
  heading;
  whichBox;
  constructor(private mailService : MailService, private loginService: LoginService) {
    this.email = mailService.email;
    this.userName = loginService.userName;
    this.heading = " "+this.userName+" and "+ (this.email.from || this.email[0].from);
    this.whichBox = this.mailService.whichBox;
   }

  ngOnInit() {
    
  }

  checkWhichBox(){

  }

}
