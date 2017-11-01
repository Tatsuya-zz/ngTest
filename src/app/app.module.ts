import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WrapperComponent } from './wrapper/wrapper.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    WrapperComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [WrapperComponent]
})
export class AppModule { }
