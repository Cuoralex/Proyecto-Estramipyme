import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetricsService {
  public apiUrl = 'http://localhost:3000/metrics'; // Asegúrate de que esta URL es correcta

  constructor(public http: HttpClient) { }

  getMetrics(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}
