import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service'; // Asegúrate de que este servicio esté correctamente configurado
import { CommonModule } from '@angular/common';

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

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
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
        console.log('Usuarios obtenidos:', users);
  
        const user = users.find((user: any) => {
          if (user.TypeOfPerson === 'Natural') {
            return (user.NaturalPersonEmail === email && user.NaturalPersonPassword === password);
          } else if (user.TypeOfPerson === 'Jurídica') {
            return (user.LegalPersonEmail === email && user.LegalPersonPassword === password);
          }
          return false;
        });
  
        if (user) {
          console.log('Usuario encontrado:', user);
          this.router.navigate(['dashboard']);
          this.loginForm.reset();
        } else {
          console.error('Error: Usuario no encontrado');
          this.loginForm.markAllAsTouched();
          alert("Error al ingresar los datos");
        }
      }, error => {
        console.error('Error al obtener usuarios:', error);
        alert("Error al obtener los datos");
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
