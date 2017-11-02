import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { Ng2BootstrapModule } from 'ngx-bootstrap';

import { WrapperComponent } from './wrapper/wrapper.component';
import { FrontComponent } from './front/front.component';
import { FrontHeaderComponent } from './front_header/frontHeader.component';
import { FrontContentComponent } from './front_content/frontContent.component';
import { LoginComponent } from './login/login.component';


export const AppRoutes = [
  { path: "", component: FrontComponent },
  { path: "login", component: LoginComponent }
]

@NgModule({
  declarations: [
    WrapperComponent,
    LoginComponent,
    FrontComponent,
    FrontHeaderComponent,
    FrontContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule.forRoot(),
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [WrapperComponent]
})

export class AppModule { }