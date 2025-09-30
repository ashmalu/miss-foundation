import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  admin: boolean = false;
  user: boolean = false;

  constructor(private userAuthService: UserAuthService, private router: Router, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(){
   //your code to update the model
   this.cdr.detectChanges();
}

  public isLoggedIn() {
    this.role();
    return this.userAuthService.isLoggedIn();
  }

  public logout() {
    this.admin = false;
    this.user = false;
    this.userAuthService.clear();
    this.router.navigateByUrl('/');
  }

  public role() {
    const role = this.userAuthService.getRole();
    if(role === 'ROLE_ADMIN'){
      this.admin = true;
      this.user = false;
    } else if(role === 'ROLE_USER'){
      this.user = true;
      this.admin = false;
    }
  }

  public isAdmin() {
    return this.userAuthService.isAdmin();
  }

  public isUser() {
    return this.userAuthService.isUser();
  }

}
