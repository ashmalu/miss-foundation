import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../_services/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userAUthService: UserAuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.userAUthService.getToken() !== null) {
        const role = route.data["role"] as string;
        if(role) {
          if(role[0] === this.userAUthService.getRole()) {
            return true;
          } else {
            this.router.navigateByUrl("/forbidden");
            return false;
          }
        } else {
          this.router.navigateByUrl("/forbidden");
          return false;
        }
      }
      this.router.navigateByUrl("/login");
      return false;
  }
  
}
