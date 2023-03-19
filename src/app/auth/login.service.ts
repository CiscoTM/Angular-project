import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class LoginService {
  
  constructor(private router:Router,private cookie:CookieService) { }

  token:string;

  login(email:string,pass:string){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential)=>{
      const user = userCredential.user;
      auth.currentUser?.getIdToken().then(
        token=> {
          this.token=token;
          this.cookie.set('token',this.token); 
          this.router.navigate(['/']);
        }
      )
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  }

  getIdToken(){
    return this.cookie.get('token');
  }

  getloggedIn(){
    return this.cookie.get('token');
  }

  getloggedOut(){
    getAuth().signOut() .then(()=>{
        this.token='';
        this.cookie.set('token',this.token);
        this.router.navigate(['/']);
        window.location.reload();
      });
  }
}
