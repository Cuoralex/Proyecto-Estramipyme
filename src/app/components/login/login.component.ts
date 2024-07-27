import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService:LoginService) {
    this.loginForm = this.formBuilder.group({
      email: ['alexa@gmail.com', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  login() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value)
      this.router.navigateByUrl("inicio");
      this.loginForm.reset(); 
    } else {
      this.loginForm.markAllAsTouched();
      alert("Error al ingresar los datos");
    }
  }

  get email(){
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
