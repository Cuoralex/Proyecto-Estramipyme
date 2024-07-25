import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { DashboardAdministratorComponent } from '../../views/dashboard/layout/dashboard-administrator/dashboard-administrator.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    DashboardAdministratorComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginService: any;
  router: any;
onSubmit() {
throw new Error('Method not implemented.');
}
     loginForm=this.formBuilder.group({
     email:['alexa@gmail.com', [Validators.email, Validators.required]],
     password:['',[Validators.required]]
  })

  constructor (private formBuilder:FormBuilder) {}//, private router:Router, private loginService: LoginService){}
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
        this.router.navigateByUrl("iniciar-sesion");
        this.loginForm.reset();
      
    }
  }
}
