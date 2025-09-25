import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  projectId: string = '';
  projectName: string = '';
  teamSize: number = 0;
  dateOfStart: string = '';
  imageUrl: SafeUrl = '';

  constructor(private userService: UserService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.forUser();
  }

  forUser() {
    this.userService.forUser().subscribe(
      (blob: any) => {
        const objectURL = URL.createObjectURL(blob);
        this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      }, (error)=>{
        console.log(error);
      }
    )
  }
}
