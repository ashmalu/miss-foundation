import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  strError: string = '';
  err: boolean = false;
  constructor(private userService: UserService, private userAuthService: UserAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe(
      (response:any) => {
        this.userAuthService.setToken(response.jwtToken);
        this.userAuthService.setRole(response.role);
        if(response.role === "ROLE_ADMIN") {
          this.router.navigateByUrl("/admin");
        } else {
          this.router.navigateByUrl("/user");
        }
      }, (error) => {
        this.err = true;
        this.strError = 'Invalid username, password or emailId!';
      }
    )
  }

}
