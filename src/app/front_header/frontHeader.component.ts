import { Component } from '@angular/core';

import { ViewChild, ElementRef} from '@angular/core';

declare var jQuery:any;

export class Login{
  nickname: string;
  passwd: string;
}

export class UserInfo{
  nickname: string;
}

@Component({
  selector: 'front-header',
  templateUrl: './frontHeader.component.html',
  styleUrls: ['./frontHeader.component.css']
})
export class FrontHeaderComponent {

  @ViewChild('myModal') myModal: ElementRef;

  isLoginOpen: boolean = false
  public person: Login
  public user: UserInfo
  message: string = null

  testNickname: string = "hoge"
  testPasswd: string = "fuga"
  
  constructor(){
    this.person = new Login
    this.user = new UserInfo
    this.person.nickname = ""
    this.person.passwd = ""
  }

  login() {
    if(this.person.nickname == this.testNickname && this.person.passwd == this.testPasswd){
      this.user.nickname = "ほげ"
      this.isLoginOpen = false
      this.myModal.nativeElement.click();
    } else {
      this.message = "nicknameまたはpasswordが違います"
    }
  }
  
}
