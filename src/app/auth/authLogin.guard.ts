import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardLogin implements CanActivate {
  constructor(private auth: AuthService, private myRoute: Router){ }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        
      localStorage.clear();
      // localStorage.removeItem('nome');
      // localStorage.removeItem('email');
      // localStorage.removeItem('sessao');
      // localStorage.removeItem('image');
      // localStorage.removeItem('active');
      // localStorage.removeItem('politica');
      return true;
      
  }
  
}