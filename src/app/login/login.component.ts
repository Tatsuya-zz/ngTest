import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  name = "hoge"
  pass = "fuga"
  isMessageOpen = false
  message = "ログインに失敗しました"
  inputForm = {nickname: "", password: ""}

  confirm(){
    if(this.inputForm.nickname == this.name && this.inputForm.password == this.pass){
    } else {
      this.isMessageOpen = true
    }
  }
}
