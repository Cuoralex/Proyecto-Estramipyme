import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/inicio/login.service';
import { NavbarComponent } from '../../shared/navbar/navbar.component';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
    loginForm=this.formBuilder.group({
      email:['alexa@gmail.com', [Validators.email, Validators.required]],
      password:['',[Validators.required]]
  })
userLoginOn: any;

  constructor (private formBuilder:FormBuilder, private router:Router, private loginService: LoginService){}
    ngOnInit(): void {}

    get email(){
      return this.loginForm.controls.email;
    }
  
    get password()
    {
      return this.loginForm.controls.password;
    }

    login(){
      if(this.loginForm.valid){
        this.loginService.login(this.loginForm.value)
        this.router.navigateByUrl("/inicio");
        this.loginForm.reset();
      }else{
         this.loginForm.markAllAsTouched();
        alert("Error al ingresar los datos");
      }
    }
}
