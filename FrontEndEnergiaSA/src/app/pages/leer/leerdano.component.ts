import { Component, OnInit } from '@angular/core';
import { Reporte } from '../../model/reporte';
import { ReportesService } from '../../services/reportesservices';

@Component({
  templateUrl: './leerdano.component.html',
  styleUrls: ['./leerdano.component.css']
})
export class LeerdanoComponent implements OnInit {

  reportes: Reporte[] = [];

  constructor(private reportesService: ReportesService) { }

  ngOnInit() {
    this.obtenerReportes();
  }

  obtenerReportes() {
    this.reportesService.getReportes()
      .subscribe( (data: Reporte[]) => {
        this.reportes = data;
      });
  }

}