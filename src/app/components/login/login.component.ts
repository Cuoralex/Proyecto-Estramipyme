import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login-users/auth.service';

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

      this.loginService.getUsers().subscribe((users: any[]) => {
        const user = users.find((user: any) =>
          (user.naturalPersonEmail && user.naturalPersonEmail === email && user.naturalPersonPassword === password) ||
          (user.legalPersonEmail && user.legalPersonEmail === email && user.legalPersonPassword === password)
        );

        if (user) {
          // Aquí puedes hacer algo después del login si es necesario
          this.router.navigate(['formulario']);
          this.loginForm.reset();
        } else {
          this.loginForm.markAllAsTouched();
          alert("Error al ingresar los datos");
        }
      });
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
