import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string): boolean {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }

    return false;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
  }
}

// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   private users = JSON.parse(localStorage.getItem('users') || '[]');

//   login(email: string, password: string): Observable<boolean> {
//     const user = this.users.find((user: { email: string; password: string }) => user.email === email && user.password === password);
//     return of(!!user);
//   }

//   register(email: string, password: string): void {
//     const newUser = { email, password };
//     this.users.push(newUser);
//     localStorage.setItem('users', JSON.stringify(this.users));
//   }
// }

