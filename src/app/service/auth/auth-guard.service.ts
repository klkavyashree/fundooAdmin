import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthserviceService} from '../../service/authService/authservice.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthserviceService, public router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
   
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    
    return true;
}
}
