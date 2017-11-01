import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';

import { Ng2BootstrapModule } from 'ngx-bootstrap';

import { WrapperComponent } from './wrapper/wrapper.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    WrapperComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    Ng2BootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [WrapperComponent]
})
export class AppModule { }
