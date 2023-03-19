import { Component,OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { LoginService } from './auth/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private authService:LoginService){}

  

  
  ngOnInit(): void {

    const firebaseConfig = {
      apiKey: "AIzaSyAMbZyXaB856fEXikDG4x3o_a8v9znyOj0",
      authDomain: "employees-tk3.firebaseapp.com",
    };
    const app = initializeApp(firebaseConfig);

  }

  login(){
    return this.authService.getloggedIn();
  }
  logout(){
    return this.authService.getloggedOut();
  }

  

}
