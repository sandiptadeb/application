import { Component, OnInit } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail-page',
  templateUrl: './mail-page.component.html',
  styleUrls: ['./mail-page.component.css']
})
export class MailPageComponent implements OnInit {

  allBoxes=[];
  dataobj;
  showEmailList;
  showComposeBox = false;
  recipents=[];
  constructor(private mailService: MailService) {
    this.allBoxes = mailService.allBoxes;
    this.dataobj = mailService.dataObj.inbox;
    this.showEmailList = mailService.showEmailList
   }

  ngOnInit() {
    //this.allBoxes = [];
  }
  showData(type){
    this.dataobj = this.mailService.showData(type);
    this.showEmailList = true;
  }

  openEmail(email){
    email.isRead = true;
    this.mailService.showEmail(email);
    this.showEmailList =  false;
  }

  // composeMail(){
  //   this.showComposeBox = true;
  // }
  getStyle(item){
    if(!item.isRead){
      return {"background": "#e57373"}
    }
  }
}
