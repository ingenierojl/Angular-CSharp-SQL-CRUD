import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Log que se está ejecutando
    console.log('Interceptor ejecutándose'); 

    // Obtener token
    const token = sessionStorage.getItem('token');

    // Logear valor de token
    console.log('Token:', token);

    if (token) {
      // Clonar request y agregar header
      const cloned = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      // Loggear request clonada 
      console.log('Request clonada:', cloned);

      // Manejar request clonada
      return next.handle(cloned).pipe(
        tap(event => {
          // Loggear evento response
          console.log('Evento:', event);
        })  
      );
    }

    return next.handle(request);

  }

}