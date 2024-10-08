import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RegisterService } from '../../services/register-users/register.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';


// Función de validación para contraseñas de persona natural
export const NaturalPasswordsValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const NaturalPassword = control.get('NaturalPersonPassword');
  const NaturalPasswordConfirm = control.get('NaturalPersonConfirmPassword');
  return NaturalPassword && NaturalPasswordConfirm && NaturalPassword.value !== NaturalPasswordConfirm.value ? { NaturalPasswords: true } : null;
};

export const LegalPasswordsValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const LegalPassword = control.get('LegalPersonPassword');
  const LegalPasswordConfirm = control.get('LegalPersonConfirmPassword');
  return LegalPassword && LegalPasswordConfirm && LegalPassword.value !== LegalPasswordConfirm.value ? { LegalPasswords: true } : null;
};

@Component({
  selector: 'app-registern',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl:'./registern.component.html',
  styleUrls: ['./registern.component.scss']
})


export class RegisternComponent implements OnInit, OnDestroy {
  myForm!: FormGroup;
  registerForm: FormGroup;
  TypeOfPerson!: FormControl;
  TypeCompany!: FormControl;
  TypeCompanyAnother: boolean=false;
  LegalPersonName!: FormControl;
  LegalPersonCompanyName!: FormControl;
  Sector!: FormControl;
  LegalPersonAddress!: FormControl;
  LegalPersonPhone!: FormControl;
  LegalPersonEmail!: FormControl;
  LegalPersonPassword!: FormControl;
  LegalPersonConfirmPassword!: FormControl;
  NaturalPersonName!: FormControl;
  NaturalPersonAddress!: FormControl;
  NaturalPersonPhone!: FormControl;
  NaturalPersonEmail!: FormControl;
  NaturalPersonPassword!: FormControl;
  NaturalPersonConfirmPassword!: FormControl;
  TypeOfAdvice!: FormControl;
  Subscriptions: Subscription[] = []

register() {
throw new Error('Method not implemented.');
}

  constructor(
    private fb: FormBuilder,
    
    private http: HttpClient,
    private router: Router,
    private registerService: RegisterService
  ) {
    this.registerForm = this.fb.group({
      TypeOfPerson: ['', Validators.required],
      TypeCompany: [''],
      TypeCompanyAnother: [''],
      LegalPersonName: [''],
      LegalPersonCompanyName: [''],
      Sector: [''],
      LegalPersonAddress: [''],
      LegalPersonPhone: [''],
      LegalPersonEmail: ['', Validators.email],
      LegalPersonPassword: ['', Validators.required],
      LegalPersonConfirmPassword: ['', Validators.required],
      NaturalPersonName: [''],
      NaturalPersonAddress: [''],
      NaturalPersonPhone: [''],
      NaturalPersonEmail: ['', Validators.email],
      NaturalPersonPassword: ['', Validators.required],
      NaturalPersonConfirmPassword: ['', Validators.required],
      TypeOfAdvice: [''],
      Role: ['Cliente'] //Rol por defecto
    }, {
      validators: [NaturalPasswordsValidator, LegalPasswordsValidator]
    });
  }

  ngOnInit() {
    // Handle TypeOfPerson value changes
    const typeOfPersonSubscription = this.registerForm.get('TypeOfPerson')?.valueChanges.subscribe(value => {
      this.registerForm.reset({ TypeOfPerson: value }, { emitEvent: false });
      this.setupValidators(value);
    });

    if (typeOfPersonSubscription) {
      this.Subscriptions.push(typeOfPersonSubscription);
    }

    // Handle TypeCompany value changes
    const typeCompanySubscription = this.registerForm.get('TypeCompany')?.valueChanges.subscribe(value => {
      this.TypeCompanyAnother = (value === 'otro');  // Asigna true si el valor es "otro", de lo contrario, false
    
      if (this.TypeCompanyAnother) {
        this.registerForm.get('TypeCompanyAnother')?.enable();
        this.registerForm.get('TypeCompanyAnother')?.setValidators(Validators.required);
      } else {
        this.registerForm.get('TypeCompanyAnother')?.disable();
        this.registerForm.get('TypeCompanyAnother')?.clearValidators();
      }
    
      // Actualiza los validadores del formulario
      this.registerForm.get('TypeCompanyAnother')?.updateValueAndValidity();
    });
    
    
    if (typeCompanySubscription) {
      this.Subscriptions.push(typeCompanySubscription);
    }
  }    

  ngOnDestroy() {
    this.Subscriptions.forEach((subscription: { unsubscribe: () => any; }) => subscription.unsubscribe());
  }

  onRegister() {
    if (this.registerForm.valid) {
      const formData = {...this.registerForm.value, Role: 'Cliente'};
      
      this.http.post('http://localhost:3000/users', formData)
        .subscribe({
          next: () => {
            this.router.navigate(['formulario']);
          },
          error: (err) => {
            console.error('Error al guardar los datos', err);
          }
        });
    }
  }

  setupValidators(value: string) {
    if (value === 'Jurídica') {
      this.registerForm.get('TypeCompany')?.setValidators(Validators.required);
      this.registerForm.get('LegalPersonName')?.setValidators(Validators.required);
      this.registerForm.get('LegalPersonCompanyName')?.setValidators(Validators.required);
      this.registerForm.get('Sector')?.setValidators(Validators.required);
      this.registerForm.get('LegalPersonAddress')?.setValidators(Validators.required);
      this.registerForm.get('LegalPersonPhone')?.setValidators(Validators.required);
      this.registerForm.get('LegalPersonEmail')?.setValidators([Validators.required, Validators.email]);
      this.registerForm.get('LegalPersonPassword')?.setValidators([Validators.required]);

      this.registerForm.get('TypeCompany')?.clearValidators();
      this.registerForm.get('NaturalPersonName')?.clearValidators();
      this.registerForm.get('NaturalPersonAddress')?.clearValidators();
      this.registerForm.get('NaturalPersonPhone')?.clearValidators();
      this.registerForm.get('NaturalPersonEmail')?.clearValidators();
      this.registerForm.get('NaturalPersonPassword')?.clearValidators();
      this.registerForm.get('NaturalPersonConfirmPassword')?.clearValidators();
    } else if (value === 'Natural') {
      
      this.registerForm.get('TypeCompany')?.clearValidators();
      this.registerForm.get('NaturalPersonName')?.setValidators(Validators.required);
      this.registerForm.get('NaturalPersonAddress')?.setValidators(Validators.required);
      this.registerForm.get('NaturalPersonPhone')?.setValidators(Validators.required);
      this.registerForm.get('NaturalPersonEmail')?.setValidators([Validators.required, Validators.email]);
      this.registerForm.get('NaturalPersonPassword')?.setValidators([Validators.required]);

      this.registerForm.get('TypeCompany')?.clearValidators();
      this.registerForm.get('LegalPersonName')?.clearValidators();
      this.registerForm.get('LegalPersonCompanyName')?.clearValidators();
      this.registerForm.get('Sector')?.clearValidators();
      this.registerForm.get('LegalPersonAddress')?.clearValidators();
      this.registerForm.get('LegalPersonPhone')?.clearValidators();
      this.registerForm.get('LegalPersonEmail')?.clearValidators();
      this.registerForm.get('LegalPersonPassword')?.clearValidators();
      this.registerForm.get('LegalPersonConfirmPassword')?.clearValidators();
    }

    this.registerForm.get('TypeCompany')?.updateValueAndValidity();
    this.registerForm.get('LegalPersonName')?.updateValueAndValidity();
    this.registerForm.get('LegalPersonCompanyName')?.updateValueAndValidity();
    this.registerForm.get('Sector')?.updateValueAndValidity();
    this.registerForm.get('LegalPersonAddress')?.updateValueAndValidity();
    this.registerForm.get('LegalPersonPhone')?.updateValueAndValidity();
    this.registerForm.get('LegalPersonEmail')?.updateValueAndValidity();
    this.registerForm.get('LegalPersonPassword')?.updateValueAndValidity();
    this.registerForm.get('LegalPersonConfirmPassword')?.updateValueAndValidity();
    this.registerForm.get('NaturalPersonName')?.updateValueAndValidity();
    this.registerForm.get('NaturalPersonAddress')?.updateValueAndValidity();
    this.registerForm.get('NaturalPersonPhone')?.updateValueAndValidity();
    this.registerForm.get('NaturalPersonEmail')?.updateValueAndValidity();
    this.registerForm.get('NaturalPersonPassword')?.updateValueAndValidity();
    this.registerForm.get('NaturalPersonConfirmPassword')?.updateValueAndValidity();
  }
}