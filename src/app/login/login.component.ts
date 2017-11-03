import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ){}

  confirm(){
    if(this.inputForm.nickname == this.name && this.inputForm.password == this.pass){
      this.router.navigate(['management']);
    } else {
      this.isMessageOpen = true
    }
  }
}
