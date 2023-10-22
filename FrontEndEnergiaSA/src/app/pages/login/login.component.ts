import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router'; // Importa el servicio Router
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'energiajaimesa';
  userData = {
    username: '',
    password: '',
    role: '' 
  };

  constructor(private authService: AuthService, private router: Router) { } // Inyecta el servicio Router

  onSubmit() {
    console.log('Datos de usuario:', this.userData);
    this.authService.login(this.userData.username, this.userData.password, this.userData.role)
      .subscribe((result) => {
        if (result) {
          // Redirigir al usuario a la página de inicio o a la página deseada después del inicio de sesión.
          alert('Ingreso exitoso.');
          this.router.navigate(['/acciones']);
        } else {
          alert('Nombre de usuario o contraseña incorrectos.');
        }
      });
  }
}
