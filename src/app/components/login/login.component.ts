import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/login-users/auth.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
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
        this.loginService.login(this.loginForm.value);
        this.router.navigate(['formulario']); // Redirigir al formulario
        this.loginForm.reset(); 
      } else {
        console.log('Invalid credentials');
      }
      this.loginForm.reset();
    }
  }
}