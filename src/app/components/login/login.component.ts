import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

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
        this.router.navigate(['/inicio']); // Redirigir a la página principal
        this.loginForm.reset(); 
      } else {
        this.loginForm.markAllAsTouched();
        alert("Error al ingresar los datos");
      }
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
