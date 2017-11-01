import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  declarations: [
    WrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [WrapperComponent]
})
export class AppModule { }
