import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { MailPageComponent } from './mail-page/mail-page.component';
import { MailService } from './mail.service';
import { MailtemplateComponent } from './mailtemplate/mailtemplate.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule}  from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    MailPageComponent, MailtemplateComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    NgbModule
  ],
  providers: [LoginService, MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
