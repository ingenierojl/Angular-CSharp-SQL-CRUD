import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reporte } from '../model/reporte';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

    constructor(private http: HttpClient) { }

  
url1 = 'http://localhost:5003/api/auth/delete';

deleteReporte(reporte: Reporte) {

  return this.http.put(`${this.url1}/${reporte.id}`, reporte)
    .pipe(
      catchError(err => {
        console.error('Error en petición HTTP', err);
        throw err; // Lanzar el error al componente
      })
    );

}
}