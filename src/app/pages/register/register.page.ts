import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerPage: any[] = [];
  registerObj:any = {
    Name: '',
    Email: '',
    Password: '',
    ConformPassword: ''
  };

  constructor() { }

  ngOnInit(): void {
    const localDate = localStorage.getItem('registerPage');
    if(localDate != null){
      this.registerPage = JSON.parse(localDate);
    }
  }

  onRegister() {
    this.registerPage.push(this.registerObj);
    localStorage.setItem('registerPage', JSON.stringify(this.registerPage));
    this.registerObj = {
      Name: '',
      Email: '',
      Password: '',
      ConformPassword: ''
    };
  }
}
