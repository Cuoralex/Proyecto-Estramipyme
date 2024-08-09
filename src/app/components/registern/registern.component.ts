import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RegisterService } from '../../services/register.service';
import { RegisterData } from '../../models/register.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registern',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './registern.component.html',
  styleUrls: ['./registern.component.scss']
})
export class RegisternComponent implements OnInit, OnDestroy {
  isOtherCompanyType: boolean = false;
  registerForm: FormGroup;
  subscriptions: Subscription[] = [];
OptionTypeCompany: any;
LegalName: any;
LegalCompanyName: any;
OptSector: any;
LegalAddress: any;
LegalPhone: any;
LegalEmail: any;
LegalPassword: any;
NaturalPersonNames: any;
NaturalAddress: any;
NaturalPhone: any;
NaturalEmail: any;
NaturalPassword: any;

  constructor(private registerService: RegisterService, fb: FormBuilder) {
    this.registerForm = fb.group({
      TypeOfPerson: ['', Validators.required],
      TypeCompany: [''],
      TypeCompanyAnother: [''],
      LegalPersonName: [''],
      LegalPersonCompanyName: [''],
      Sector: [''],
      LegalPersonAddress: [''],
      LegalPersonPhone: [''],
      LegalPersonEmail: ['', Validators.email],
      LegalPersonPassword: [''],
      LegalPersonConfirmPassword: [''],
      NaturalPersonName: [''],
      NaturalPersonAddress: [''],
      NaturalPersonPhone: [''],
      NaturalPersonEmail: ['', Validators.email],
      NaturalPersonPassword: [''],
      NaturalPersonConfirmPassword: [''],
      TypeOfAdvice: ['']
    });
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

    const typeOfPersonSubscription = this.registerForm.get('TypeOfPerson')?.valueChanges.subscribe(value => {
      this.registerForm.reset({ TypeOfPerson: value }, { emitEvent: false });
      this.setupValidators(value);
    });

    if (typeOfPersonSubscription) {
      this.subscriptions.push(typeOfPersonSubscription);
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  register() {
    if (this.registerForm.valid) {
      const formValue = this.registerForm.value;
      let dataToSend: RegisterData = {
        typeOfPerson: formValue.TypeOfPerson,
        naturalPersonName: formValue.NaturalPersonName || '',
        NaturalPersonAddress: formValue.NaturalPersonAddress || '',
        NaturalPersonPhone: formValue.NaturalPersonPhone || '',
        naturalPersonEmail: formValue.NaturalPersonEmail || '',
        naturalPersonPassword: formValue.NaturalPersonPassword || '',
        naturalPersonConfirmPassword: formValue.NaturalPersonConfirmPassword || '',
        typeOfAdvice: formValue.TypeOfAdvice || '',
        typeCompany: formValue.TypeCompany || '',
        typeCompanyAnother: formValue.TypeCompanyAnother || '',
        legalPersonName: formValue.LegalPersonName || '',
        legalPersonCompanyName: formValue.LegalPersonCompanyName || '',
        sector: formValue.Sector || '',
        LegalPersonAddress: formValue.LegalPersonAddress || '',
        LegalPersonPhone: formValue.LegalPersonPhone || '',
        legalPersonEmail: formValue.LegalPersonEmail || '',
        legalPersonPassword: formValue.LegalPersonPassword || '',
        legalPersonConfirmPassword: formValue.LegalPersonConfirmPassword || '',
      };

      this.registerService.registerUser(dataToSend).subscribe(
        (response: RegisterData) => {
          console.log('Datos guardados en json-server', response);
          this.registerForm.reset();
          this.registerForm.markAsPristine();
          this.registerForm.markAsUntouched();
        },
        (error: any) => {
          console.error('Error al guardar los datos', error);
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }

  setupValidators(value: string) {
    if (value === 'juridica') {
      this.registerForm.get('TypeCompany')?.setValidators(Validators.required);
      this.registerForm.get('LegalPersonName')?.setValidators(Validators.required);
      this.registerForm.get('LegalPersonCompanyName')?.setValidators(Validators.required);
      this.registerForm.get('Sector')?.setValidators(Validators.required);
      this.registerForm.get('LegalPersonAddress')?.setValidators(Validators.required);
      this.registerForm.get('LegalPersonPhone')?.setValidators(Validators.required);
      this.registerForm.get('LegalPersonEmail')?.setValidators([Validators.required, Validators.email]);
      this.registerForm.get('LegalPersonPassword')?.setValidators([Validators.required]);

      this.registerForm.get('NaturalPersonName')?.clearValidators();
      this.registerForm.get('NaturalPersonAddress')?.clearValidators();
      this.registerForm.get('NaturalPersonPhone')?.clearValidators();
      this.registerForm.get('NaturalPersonEmail')?.clearValidators();
      this.registerForm.get('NaturalPersonPassword')?.clearValidators();
      this.registerForm.get('NaturalPersonConfirmPassword')?.clearValidators();
    } else if (value === 'natural') {
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
