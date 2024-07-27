
import { Injectable } from '@angular/core';
import { RegisterData } from '../../components/models/register-users/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly storageKey = 'formValue';

  saveData(data: RegisterData): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  getData(): RegisterData | null {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : null;
  }

  clearData(): void {
    localStorage.removeItem(this.storageKey);
  }
}
