import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reporte } from '../model/reporte';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  url = 'http://localhost:5003/api/auth/listar-danos';

  constructor(private http: HttpClient) { }

  getReportes() {
    return this.http.get<Reporte[]>(this.url);
  }
  
url1 = 'http://localhost:5003/api/auth/update';

updateReporte(reporte: Reporte) {

  return this.http.put(`${this.url1}/${reporte.id}`, reporte)
    .pipe(
      catchError(err => {
        console.error('Error en petición HTTP', err);
        throw err; // Lanzar el error al componente
      })
    );

}
}