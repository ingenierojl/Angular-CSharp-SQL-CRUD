import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-creardano',
  templateUrl: './creardano.component.html',
  styleUrls: ['./creardano.component.css']
})

export class CreardanoComponent {
  danoData = {
    titulo: '',
    descripcion: '',
    fecha: ' ',
    estado: ' ',
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) { }

  onSubmit() {
    console.log('Datos de usuario:', this.danoData);

    // Realiza una solicitud HTTP POST para enviar los datos al backend
    this.http.post('http://localhost:5003/api/auth/crear-danos', this.danoData)
      .subscribe(
        (response: any) => {
          // Maneja la respuesta del servidor si es necesario
          console.log('Respuesta del servidor:', response);

          // Puedes redirigir al usuario a otra página después de enviar los datos
         // this.router.navigate(['/otra-ruta']);
        },
        (error) => {
          // Maneja cualquier error que pueda ocurrir durante la solicitud
          console.error('Error al enviar los datos al servidor:', error);
        }
      );
  }
}
