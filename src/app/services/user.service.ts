import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

// Asegúrate de tener una interfaz User definida
interface User {
  id: number;
  name: string;
  role: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'api/users'; // Asegúrate de que esta URL sea correcta

  constructor(private http: HttpClient) {}

  // Obtener todos los usuarios
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // Añadir un nuevo usuario
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  // Actualizar un usuario existente
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);
  }

  // Eliminar un usuario por ID
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
