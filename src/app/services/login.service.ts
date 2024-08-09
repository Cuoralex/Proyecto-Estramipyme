import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  getUsers: any;

  constructor() { }

login(credentials:any){
    console.log(credentials);
  }
}