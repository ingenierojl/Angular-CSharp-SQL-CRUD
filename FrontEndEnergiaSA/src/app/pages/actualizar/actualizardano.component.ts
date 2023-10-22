import { Component, OnInit } from '@angular/core';
import { Reporte } from '../../model/reporte';
import { ReportesService } from '../../services/reportesservices';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-actualizardano',
  templateUrl: './actualizardano.component.html',
  styleUrls: ['./actualizardano.component.css']
})

export class ActualizardanoComponent implements OnInit {
  reportes: Reporte[] = [];

  reporte: Reporte = {
    id: -1, // o id: 0
    titulo: '',
    descripcion: '',
    fecha: '', // Inicializar con una fecha vacía o predeterminada
    estado: ''
  };

  constructor(private reportesService: ReportesService, private datePipe: DatePipe) { }


  ngOnInit() {
    this.obtenerReportes();
  }

  obtenerReportes() {
    this.reportesService.getReportes().subscribe((data: Reporte[]) => {
      this.reportes = data.map(reporte => {
        if (reporte.fecha) {
          reporte.fecha = this.datePipe.transform(new Date(reporte.fecha), 'yyyy-MM-dd');
        }
        return reporte;
      });
    });
  }

verCambios(reporte: Reporte) 
{

    console.log('Datos que se actualizarán:', reporte);
  
    this.reportesService.updateReporte(reporte)
      .subscribe(
        res => {
          console.log('Registro actualizado con éxito');
          // Aquí puede recargar los datos para reflejar el cambio
          this.obtenerReportes(); 
        },
        err => {
          console.error('Error actualizando el registro', err);
        }
      );
  
}


}

