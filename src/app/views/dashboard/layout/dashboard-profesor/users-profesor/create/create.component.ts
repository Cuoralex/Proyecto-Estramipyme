import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  userForm: FormGroup;
  TypeCompanyAnother = false;
  formdata: any;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      TypeOfPerson: ['', Validators.required],
      TypeCompany: ['', Validators.required],
      TypeCompanyAnother: [''],
      LegalPersonName: ['', Validators.required],
      LegalPersonCompanyName: ['', Validators.required],
      Sector: ['', Validators.required],
      LegalPersonAddress: ['', Validators.required],
      LegalPersonPhone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      LegalPersonEmail: ['', [Validators.required, Validators.email]],
      LegalPersonPassword: ['', [Validators.required, Validators.minLength(6)]],
      LegalPersonConfirmPassword: ['', Validators.required],
      TypeOfAdvice: ['', Validators.required],
      NaturalPersonName: ['', Validators.required],
      NaturalPersonAddress: ['', Validators.required],
      NaturalPersonPhone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      NaturalPersonEmail: ['', [Validators.required, Validators.email]],
      NaturalPersonPassword: ['', [Validators.required, Validators.minLength(6)]],
      NaturalPersonConfirmPassword: ['', Validators.required],
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.userForm.get('TypeCompany')?.valueChanges.subscribe(value => {
      this.TypeCompanyAnother = value === 'otro';
      if (this.TypeCompanyAnother) {
        this.userForm.get('TypeCompanyAnother')?.setValidators([Validators.required]);
      } else {
        this.userForm.get('TypeCompanyAnother')?.clearValidators();
      }
      this.userForm.get('TypeCompanyAnother')?.updateValueAndValidity();
    });
  }

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('LegalPersonPassword')?.value;
    const confirmPassword = group.get('LegalPersonConfirmPassword')?.value;
    const naturalPassword = group.get('NaturalPersonPassword')?.value;
    const naturalConfirmPassword = group.get('NaturalPersonConfirmPassword')?.value;

    return password === confirmPassword && naturalPassword === naturalConfirmPassword ? null : { notMatching: true };
  }

  createUser() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      console.log('User data:', formData);
      // Aquí se realizaría la lógica para enviar los datos al backend o manejar la creación del usuario
    }
  }
}
