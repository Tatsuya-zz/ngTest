import { Component } from '@angular/core';

export class Person{
  nickname: string;
  passwd: string;
}

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isLoginOpen: boolean = false;

  person: Person = {
    nickname: "",
    passwd: ""
  }
  
}
