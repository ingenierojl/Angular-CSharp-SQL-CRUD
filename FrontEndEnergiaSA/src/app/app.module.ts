import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CreardanoComponent } from './pages/crear/creardano.component';
import { LeerdanoComponent } from './pages/leer/leerdano.component';
import { ActualizardanoComponent } from './pages/actualizar/actualizardano.component';
import { BorrardanoComponent } from './pages/borrar/borrardano.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './auth/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AccionesComponent } from './pages/crud/acciones.component';
import { AuthInterceptor} from './auth/auth-interceptor.service'; // Asegúrate de que la ruta sea la correcta
import { DatePipe } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreardanoComponent,
    LeerdanoComponent,
    ActualizardanoComponent,
    BorrardanoComponent,
    LoginComponent,
    AccionesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    {
      
      useClass: AuthInterceptor,
      multi: true,
      provide: HTTP_INTERCEPTORS,
    },
    DatePipe,
    AuthService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
