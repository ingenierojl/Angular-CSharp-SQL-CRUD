import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string, role: string): Observable<any> {
    const userData = { username, password, role };
    console.log("antes de enviar al servidor");
    return this.http.post('http://localhost:5003/api/auth/login', userData)
      .pipe(
        catchError(error => {
          // Maneja el error aquí
          console.log('Error al iniciar sesión:', error);
          // Puedes mostrar un mensaje al usuario o tomar otras acciones según el error.
          throw error; // Lanza el error para que pueda ser manejado en el componente que llama a esta función.
        }),
        tap((response: any) => {
          if (response && response.token) {
            sessionStorage.setItem('token', response.token); // Usar sessionStorage en lugar de localStorage
            console.log("token en navegador");
          }
        })
      );
  }

  logout() {
    sessionStorage.removeItem('token'); // Limpiar el token de la sesión
  }

  isAuthenticated(): boolean {
    const token = sessionStorage.getItem('token'); // Obtener el token desde la sesión
    return !!token;
  }
}
