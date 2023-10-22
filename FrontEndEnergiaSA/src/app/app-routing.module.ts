import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AccionesComponent } from './pages/crud/acciones.component';
import { AuthGuard } from './auth.guard';
import { CreardanoComponent } from './pages/crear/creardano.component';
import { LeerdanoComponent } from './pages/leer/leerdano.component';
import { ActualizardanoComponent } from './pages/actualizar/actualizardano.component';
import { BorrardanoComponent } from './pages/borrar/borrardano.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'acciones', component: AccionesComponent, canActivate: [AuthGuard] },
  { path: 'crear', component: CreardanoComponent, canActivate: [AuthGuard] },
  { path: 'listar', component: LeerdanoComponent, canActivate: [AuthGuard] },
  { path: 'actualizar', component: ActualizardanoComponent, canActivate: [AuthGuard] },
  { path: 'eliminar', component: BorrardanoComponent, canActivate: [AuthGuard] },



 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
