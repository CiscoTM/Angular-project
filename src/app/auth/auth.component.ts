import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private servicioAuth:LoginService){}

  ngOnInit():void{

  }

  login(form:NgForm){
    const email=form.value.email
    const password=form.value.password
    this.servicioAuth.login(email,password);
  }

}
