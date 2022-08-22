import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FirstPageComponent } from './first-page/first-page.component'
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SecondPageComponent } from './second-page/second-page.component';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    NgbModule, 
    FormsModule,
    CommonModule,
    NgbNavModule,
    RouterModule.forRoot([
      // {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component: FirstPageComponent},
      {path: 'events', component: SecondPageComponent},
      {path: 'registration', component: RegistrationComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'login', component: LoginComponent}
    ]),
  ],
  declarations: [ 
    AppComponent, 
    NavbarComponent,
    HelloComponent, 
    FirstPageComponent, 
    SecondPageComponent,
    RegistrationComponent,
    ContactComponent,
    LoginComponent
  ],
  bootstrap:    [ 
    AppComponent 
  ]
})
export class AppModule { }
