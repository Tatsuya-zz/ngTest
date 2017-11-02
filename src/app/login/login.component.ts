import { Component } from '@angular/core';

export class Person{
  nickname: string;
  passwd: string;
}

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  person: Person = {
    nickname: "",
    passwd: ""
  }
}