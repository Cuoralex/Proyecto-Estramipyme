import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RegisterService } from '../../services/register-users/register.service';
import { RegisterData } from '../models/register-users/register.model';


const PERSON_TYPE_NATURAL = 'natural';
const PERSON_TYPE_JURIDICA = 'juridica';

// Función de validación para contraseñas de persona natural
export const naturalPasswordsValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const naturalPassword = control.get('NaturalPersonPassword');
  const naturalPasswordConfirm = control.get('NaturalPersonConfirmPassword');
  return naturalPassword && naturalPasswordConfirm && naturalPassword.value !== naturalPasswordConfirm.value ? { naturalPasswords: true } : null;
};

export const LegalPasswordsValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const LegalPassword = control.get('LegalPersonPassword');
  const LegalPasswordConfirm = control.get('LegalPersonConfirmPassword');
  return LegalPassword && LegalPasswordConfirm && LegalPassword.value !== LegalPasswordConfirm.value ? { LegalPasswords: true } : null;
};

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  isOtherCompanyType: boolean = false;

  registerForm: FormGroup;
  TypeOfPerson: FormControl;
  TypeCompany: FormControl;
  TypeCompanyAnother: FormControl;
  LegalPersonName: FormControl;
  LegalPersonCompanyName: FormControl;
  Sector: FormControl;
  LegalPersonEmail: FormControl;
  LegalPersonPassword: FormControl;
  LegalPersonConfirmPassword: FormControl;
  NaturalPersonName: FormControl;
  NaturalPersonEmail: FormControl;
  NaturalPersonPassword: FormControl;
  NaturalPersonConfirmPassword: FormControl;
  TypeOfAdvice: FormControl;

  private subscriptions: Subscription[] = [];

  constructor(private registerService: RegisterService, fb: FormBuilder) {
    this.TypeOfPerson = new FormControl('', Validators.required);

    // Persona Jurídica
    this.TypeCompany = new FormControl('');
    this.TypeCompanyAnother = new FormControl('');
    this.LegalPersonName = new FormControl('');
    this.LegalPersonCompanyName = new FormControl('');
    this.Sector = new FormControl('');
    this.LegalPersonEmail = new FormControl('');
    this.LegalPersonPassword = new FormControl('');
    this.LegalPersonConfirmPassword = new FormControl('');

    // Persona Natural
    this.NaturalPersonName = new FormControl('');
    this.NaturalPersonEmail = new FormControl('');
    this.NaturalPersonPassword = new FormControl('');
    this.NaturalPersonConfirmPassword = new FormControl('');

    //Tipo de asesoria
    this.TypeOfAdvice = new FormControl('');

    this.registerForm = new FormGroup({
      TypeOfPerson: this.TypeOfPerson,
      TypeCompany: this.TypeCompany,
      TypeCompanyAnother: this.TypeCompanyAnother,
      LegalPersonName: this.LegalPersonName,
      LegalPersonCompanyName: this.LegalPersonCompanyName,
      Sector: this.Sector,
      LegalPersonEmail: this.LegalPersonEmail,
      LegalPersonPassword: this.LegalPersonPassword,
      LegalPersonConfirmPassword: this.LegalPersonConfirmPassword,
      NaturalPersonName: this.NaturalPersonName,
      NaturalPersonEmail: this.NaturalPersonEmail,
      NaturalPersonPassword: this.NaturalPersonPassword,
      NaturalPersonConfirmPassword: this.NaturalPersonConfirmPassword,
      TypeOfAdvice: this.TypeOfAdvice
    }, { validators: [naturalPasswordsValidator, LegalPasswordsValidator] });

  }

  ngOnInit() {
    this.registerForm.get('TypeCompany')?.valueChanges.subscribe(value => {
      this.isOtherCompanyType = (value === 'otro');
      if (this.isOtherCompanyType) {
        this.registerForm.get('TypeCompanyAnother')?.enable();
        this.registerForm.get('TypeCompanyAnother')?.setValidators(Validators.required);
      } else {
        this.registerForm.get('TypeCompanyAnother')?.disable();
      }
    });

    this.registerForm.get('TypeCompanyAnother')?.disable();

    // Suscribirse a cambios en el control 'typeOfPerson'
    const typeOfPersonSubscription = this.registerForm.get('TypeOfPerson')?.valueChanges.subscribe(value => {
      // Limpiar el formulario pero mantener el valor de 'typeOfPerson'
      this.registerForm.reset({
        TypeOfPerson: value
      }, { emitEvent: false }); // Evita que se dispare nuevamente el valueChanges

      // Configurar validadores según el tipo de persona
      this.setupValidators(value);
    });

    // Guardar la suscripción para desuscribirse más tarde
    if (typeOfPersonSubscription) {
      this.subscriptions.push(typeOfPersonSubscription);
    }
  }

  //funciones de validación persona natural
  get NaturalPersonNames() {
    return this.registerForm.get('NaturalPersonName');
  }

  get NaturalEmail() {
    return this.registerForm.get('NaturalPersonEmail');
  }

  get NaturalPassword() {
    return this.registerForm.get('NaturalPersonPassword');
  }

  //funciones de validación persona jurídica
  get OptionTypeCompany() {
    return this.registerForm.get('TypeCompany');
  }

  get OptTypeCompanyAnother() {
    return this.registerForm.get('TypeCompanyAnother');
  }

  get LegalName() {
    return this.registerForm.get('LegalPersonName');
  }

  get LegalCompanyName() {
    return this.registerForm.get('LegalPersonCompanyName');
  }

  get OptSector() {
    return this.registerForm.get('Sector');
  }

  get LegalEmail() {
    return this.registerForm.get('LegalPersonEmail');
  }

  get LegalPassword() {
    return this.registerForm.get('LegalPersonPassword');
  }

  setupValidators(value: string) {
    if (value === PERSON_TYPE_JURIDICA) {
      this.registerForm.get('TypeCompany')?.setValidators(Validators.required);
      this.registerForm.get('LegalPersonName')?.setValidators(Validators.required);
      this.registerForm.get('LegalPersonCompanyName')?.setValidators(Validators.required);
      this.registerForm.get('Sector')?.setValidators(Validators.required);
      this.registerForm.get('LegalPersonEmail')?.setValidators([Validators.required, Validators.email]);
      this.registerForm.get('LegalPersonPassword')?.setValidators([Validators.required]);

      this.registerForm.get('NaturalPersonName')?.clearValidators();
      this.registerForm.get('NaturalPersonEmail')?.clearValidators();
      this.registerForm.get('NaturalPersonPassword')?.clearValidators();
      this.registerForm.get('NaturalPersonConfirmPassword')?.clearValidators();

    } else if (value === PERSON_TYPE_NATURAL) {
      this.registerForm.get('NaturalPersonName')?.setValidators(Validators.required);
      this.registerForm.get('NaturalPersonEmail')?.setValidators([Validators.required, Validators.email]);
      this.registerForm.get('NaturalPersonPassword')?.setValidators([Validators.required]);

      this.registerForm.get('TypeCompany')?.clearValidators();
      this.registerForm.get('LegalPersonName')?.clearValidators();
      this.registerForm.get('LegalPersonCompanyName')?.clearValidators();
      this.registerForm.get('Sector')?.clearValidators();
      this.registerForm.get('LegalPersonEmail')?.clearValidators();
      this.registerForm.get('LegalPersonPassword')?.clearValidators();
      this.registerForm.get('LegalPersonConfirmPassword')?.clearValidators();

    }
    this.registerForm.get('TypeCompany')?.updateValueAndValidity();
    this.registerForm.get('LegalPersonName')?.updateValueAndValidity();
    this.registerForm.get('LegalPersonCompanyName')?.updateValueAndValidity();
    this.registerForm.get('Sector')?.updateValueAndValidity();
    this.registerForm.get('LegalPersonEmail')?.updateValueAndValidity();
    this.registerForm.get('LegalPersonPassword')?.updateValueAndValidity();
    this.registerForm.get('LegalPersonConfirmPassword')?.updateValueAndValidity();

    this.registerForm.get('NaturalPersonName')?.updateValueAndValidity();
    this.registerForm.get('NaturalPersonEmail')?.updateValueAndValidity();
    this.registerForm.get('NaturalPersonPassword')?.updateValueAndValidity();
    this.registerForm.get('NaturalPersonConfirmPassword')?.updateValueAndValidity();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  register() {
    if (this.registerForm.valid) {
      const formValue = this.registerForm.value;
      let dataToSend: RegisterData = {
        typeOfPerson: '',
        naturalPersonName: '',
        naturalPersonEmail: '',
        naturalPersonPassword: '',
        naturalPersonConfirmPassword: '',
        typeOfAdvice: '',
        typeCompany: '',
        typeCompanyAnother: '',
        legalPersonName: '',
        legalPersonCompanyName: '',
        sector: '',
        legalPersonEmail: '',
        legalPersonPassword: '',
        legalPersonConfirmPassword: '',
      };

      if (formValue.TypeOfPerson === PERSON_TYPE_NATURAL) {
        dataToSend = {
          typeOfPerson: formValue.TypeOfPerson,
          naturalPersonName: formValue.NaturalPersonName,
          naturalPersonEmail: formValue.NaturalPersonEmail,
          naturalPersonPassword: formValue.NaturalPersonPassword,
          naturalPersonConfirmPassword: formValue.NaturalPersonConfirmPassword,
          typeOfAdvice: formValue.TypeOfAdvice || '',
        };
      } else if (formValue.TypeOfPerson === PERSON_TYPE_JURIDICA) {
        dataToSend = {
          typeOfPerson: formValue.TypeOfPerson,
          typeCompany: formValue.TypeCompany,
          typeCompanyAnother: formValue.TypeCompanyAnother || '',
          legalPersonName: formValue.LegalPersonName,
          legalPersonCompanyName: formValue.LegalPersonCompanyName,
          sector: formValue.Sector,
          legalPersonEmail: formValue.LegalPersonEmail,
          legalPersonPassword: formValue.LegalPersonPassword,
          legalPersonConfirmPassword: formValue.LegalPersonConfirmPassword,
          typeOfAdvice: formValue.TypeOfAdvice || '',
        };
      }

      // Guarda los datos en localStorage
      const users = JSON.parse(localStorage.getItem('formValue') || '[]');
      users.push(dataToSend);
      localStorage.setItem('formValue', JSON.stringify(users));

      // Resetea el formulario para limpiar los campos
      this.registerForm.reset();
      this.registerForm.markAsPristine();
      this.registerForm.markAsUntouched();

      console.log('Datos guardados en localStorage', dataToSend);
    } else {
      console.log('Formulario no válido');
    }
  }
}