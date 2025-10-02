import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_OF_API = 'https://springboot-backend-taskmanager-c9cuefhhbpg0g0fp.canadacentral-01.azurewebsites.net';
  
  requestHeader = new HttpHeaders({ "No-Auth": "True"})

  constructor(private httpClient: HttpClient, private userAuthService: UserAuthService) { }

  public login(loginData: NgForm) {
    return this.httpClient.post(this.PATH_OF_API+"/api/authenticate", loginData, {headers: this.requestHeader});
  }

  public forUser() {
    return this.httpClient.get(this.PATH_OF_API+"/api/getAllProjects", {responseType: "json"});
  }

  public forAdmin() {
    return this.httpClient.get(this.PATH_OF_API+"/api/forAdmin", { responseType: 'text'});
  }

  public getImage(id: number) {
    return this.httpClient.get(this.PATH_OF_API+"/api/image/"+id, {responseType: 'blob'});
  }
  
}
``