// user-administrator.service.ts
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Users } from "../models/user-administrator.model";

@Injectable({ 
  providedIn: 'root' 
})

export class UserService {
  private baseUrl = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(this.baseUrl);
  }

  getUsers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(this.baseUrl);
  }

  create(data: Users): Observable<Users> {
    // Asigna el rol 'Cliente' por defecto si no está presente en los datos
    if (!data.Role) {
      data.Role = 'Cliente';
    }
    return this.httpClient.post<Users>(this.baseUrl, data);
  }

  

  edit(id: number): Observable<Users> {
    return this.httpClient.get<Users>(`${this.baseUrl}/${id}`);
  }

  update(data: Users): Observable<Users> {
    return this.httpClient.put<Users>(`${this.baseUrl}/${data.id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}
