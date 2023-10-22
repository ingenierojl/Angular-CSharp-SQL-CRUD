import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.component.html',
  styleUrls: ['./acciones.component.css']
})
export class AccionesComponent {
  constructor(private router: Router) { }
  EliminarDano()
  {
    console.log("eliminar");
    this.router.navigate(['/eliminar']);
  }
  CrearDano()
  {
    this.router.navigate(['/crear']);
  }
  LeerDano()
  {
    console.log("RegistrarUsuario");
    this.router.navigate(['/listar']);
  }
  EditarDano()
  {
    console.log("RegistrarUsuario");
    this.router.navigate(['/actualizar']);
  }



}
