import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class AuthGuardGuard implements CanActivate {

  constructor(private service: LoginService,private router:Router ){}
  
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):
   Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
   {
    if(this.service.getloggedIn()){
      
      return true;

    }else {
      
      this.router.navigate(['/login']);
      return false;

    }
  }
  
}
