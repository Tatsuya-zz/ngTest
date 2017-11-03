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
import { ManagementComponent } from './management/management.component';
import { ManagementHeaderComponent } from './management_header/managementHeader.component';
import { ManagementContentComponent } from './management_content/managementContent.component';
import { ManagementSidebarComponent } from './management_sidebar/managementSidebar.component';

export const AppRoutes = [
  { path: "", component: FrontComponent },
  { path: "login", component: LoginComponent },
  { path: "management", component: ManagementComponent }
]

@NgModule({
  declarations: [
    WrapperComponent,
    LoginComponent,
    FrontComponent,
    FrontHeaderComponent,
    FrontContentComponent,
    ManagementComponent,
    ManagementHeaderComponent,
    ManagementContentComponent,
    ManagementSidebarComponent
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