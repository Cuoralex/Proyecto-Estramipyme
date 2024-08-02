import { Component, OnInit } from '@angular/core'; //Para el ciclo de vida OnInit
import { CommonModule } from '@angular/common'; //Provee ngIf, ngFor, etc
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; //Crear y manejar formularios reactivos
import { Router } from '@angular/router';  //Navegación de rutas
import { LoginService } from '../../services/login.service'; //Lógica del login

@Component({
  selector: 'app-login',  //Nombre del componente
  standalone: true,   //Indica que es un componente independiente y no necesita un módulo especifico
  imports: [ //Importaciones del componente
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html', //Ruta al template HTML
  styleUrls: ['./login.component.scss'] // Ruta a estilos
})
export class LoginComponent implements OnInit { //Define la clase
  loginForm: FormGroup; //Un formulario reactivo de tipo FormGroup

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {  //Inicia el componente e inyecta dependencias, define loginForm con email y password
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}  //Método de ciclo de vida que inicia todas las propiedades el componente

  login() {
    if (this.loginForm.valid) {   //verifica que el formulario sea válido
      const { email, password } = this.loginForm.value;  //Extrae los valores del formulario
      const storedData = JSON.parse(localStorage.getItem('formValue') || '[]');  //Obtiene y parsea los datos almacenados en consola

      console.log('Stored Data:', storedData);  //Muestra datos almacenados en consola

      // Buscar el usuario en los datos almacenados
      const user = storedData.find((user: any) =>
        (user.naturalPersonEmail && user.naturalPersonEmail === email && user.naturalPersonPassword === password) ||
        (user.legalPersonEmail && user.legalPersonEmail === email && user.legalPersonPassword === password)
      );

      if (user) {  //Si el usuario es encontrado
        this.loginService.login(this.loginForm.value); // Llama al servicio de login para manejar la lógica de login
        this.router.navigate(['formulario']); // Redirigir al formulario
        this.loginForm.reset(); // Resetea el formulario
      } else { //Si no se encuentra el usuario
        this.loginForm.markAllAsTouched(); //Marca todos los campos como tocados
        alert("Error al ingresar los datos"); // Muestra una alerta indicando un error
      }
    }
  }

  //Método get, metodo getter para acceder fácilmente a las controles de formulario email y password
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
