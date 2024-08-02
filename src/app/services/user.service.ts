import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user.model";

// // Asegúrate de tener una interfaz User definida
// interface User {
//   id: number;
//   name: string;
//   role: string;
// }

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'api/users'; // Asegúrate de que esta URL sea correcta
  private baseUrl = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) {}

  // // Obtener todos los usuarios
  // getUsers(): Observable<User[]> {
  //   return this.httpClient.get<User[]>(this.apiUrl);
  // }

  getAll(){
    return this.httpClient.get<User[]>('http://localhost:3000/users')
  }

  creat(data: User){
    return this.httpClient.post('http://localhost:3000/users', data);
  }

  edit(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}/${id}`);
  }

  update(data: User): Observable<User> {
    return this.httpClient.put<User>(`${this.baseUrl}/${data.id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}
//   // Añadir un nuevo usuario
//   addUser(user: User): Observable<User> {
//     return this.httpClient.post<User>(this.apiUrl, user);
//   }

//   // Actualizar un usuario existente
//   updateUser(user: User): Observable<User> {
//     return this.httpClient.put<User>(`${this.apiUrl}/${user.id}`, user);
//   }

//   // Eliminar un usuario por ID
//   deleteUser(id: number): Observable<void> {
//     return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
//   }
// }
