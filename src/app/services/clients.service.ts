// user-administrator.service.ts
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Clients } from "../models/clients.model";

@Injectable({ 
  providedIn: 'root' 
})

export class ClientsService {
  private baseUrl = 'http://localhost:3000/clients';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Clients[]> {
    return this.httpClient.get<Clients[]>(this.baseUrl);
  }

  getClients(): Observable<Clients[]> {
    return this.httpClient.get<Clients[]>(this.baseUrl);
  }

  create(data: Clients): Observable<Clients> {
    // Asigna el rol 'Cliente' por defecto si no está presente en los datos
    if (!data.Role) {
      data.Role = 'Cliente';
    }
    return this.httpClient.post<Clients>(this.baseUrl, data);
  }

  edit(id: number): Observable<Clients> {
    return this.httpClient.get<Clients>(`${this.baseUrl}/${id}`);
  }

  update(data: Clients): Observable<Clients> {
    return this.httpClient.put<Clients>(`${this.baseUrl}/${data.id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

  private apiUrl = 'http://localhost:3000/clients';

  getLastClient(): Observable<any> {
    return this.httpClient.get<any[]>(this.baseUrl).pipe(
      map((clients: string | any[]) => clients[clients.length - 1])
    );
  }
}
