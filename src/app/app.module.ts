import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FirstPageComponent } from './first-page/first-page.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SecondPageComponent } from './second-page/second-page.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    NgbModule, 
    FormsModule],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    FirstPageComponent, 
    SecondPageComponent 
  ],
  bootstrap:    [ 
    AppComponent 
  ]
})
export class AppModule { }
