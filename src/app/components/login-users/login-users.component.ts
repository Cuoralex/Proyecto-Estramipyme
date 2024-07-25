import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/login-users/auth.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-users',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-users.component.html',
  styleUrls: ['./login-users.component.scss']
})
export class LoginUsersComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const storedData = JSON.parse(localStorage.getItem('formValue') || '[]');

      console.log('Stored Data:', storedData);

      // Buscar el usuario en los datos almacenados
      const user = storedData.find((user: any) =>
        (user.naturalPersonEmail && user.naturalPersonEmail === email && user.naturalPersonPassword === password) ||
        (user.legalPersonEmail && user.legalPersonEmail === email && user.legalPersonPassword === password)
      );

      if (user) {
        console.log('Login successful');
        this.router.navigate(['/inicio']); // Redirigir a la página principal
      } else {
        console.log('Invalid credentials');
      }
      this.loginForm.reset();
    }
  }
}


