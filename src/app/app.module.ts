import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { Ng2BootstrapModule } from 'ngx-bootstrap';

import { WrapperComponent } from './wrapper/wrapper.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    WrapperComponent,
    HeaderComponent,
    LoginComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [WrapperComponent]
})
export class AppModule { }
