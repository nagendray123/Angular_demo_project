import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginObj: any = {
    Eamil: '',
    Password: ''
  };

  constructor() { }

  ngOnInit() {
  }
  // onLogin () { 
  //   const isUserExist = this.loginObj.find(m => m.Email == this.loginObj.Email && m.Password == this.loginObj);
  //   if(isUserExist != undefined){
  //    alert('User login Successfully');      
  //   }else {
  //     alert('Wrong Credentials');
  //   }
  // }



}
