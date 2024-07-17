import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  typeOfPerson: string = '';
  typeOfCompany: string = '';

  onTypeOfPersonChange(event: any) {
    this.typeOfPerson = event.target.value;
  }

  onTypeOfCompanyChange(event: any) {
    this.typeOfCompany = event.target.value;
  }
}
