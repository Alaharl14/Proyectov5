import { ActivatedRoute, Params, Router } from '@angular/router';
import { ReporteService } from './../../../service/reporte.service';
import { Component, OnInit } from '@angular/core';
import { Reporte } from 'src/app/model/reporte';

@Component({
  selector: 'app-reporte-creaedita',
  templateUrl: './reporte-creaedita.component.html',
  styleUrls: ['./reporte-creaedita.component.css']
})
export class ReporteCreaeditaComponent implements OnInit {
  reporte : Reporte = new Reporte();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;

  constructor(private ReporteService: ReporteService,private router: Router,
    private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.route.params.subscribe((data: Params) => {
        this.id = data['id'];
        this.edicion = data['id'] != null;
        this.init();
      });
    }


    aceptar(): void {
      if (this.reporte.nombreReporte.length > 0 && this.reporte.descripcionReporte.length > 0) {   
        if (this.edicion) {
          this.ReporteService.modificar(this.reporte).subscribe(data => {
            this.ReporteService.listar().subscribe(data => {
              this.ReporteService.setLista(data);
          })
        })
      } else {

        this.ReporteService.insertar(this.reporte).subscribe(data => {
          this.ReporteService.listar().subscribe(data => {
            this.ReporteService.setLista(data);
          })
        })
      }
        this.router.navigate(['reporte']);
      } else {
        this.mensaje = "Complete los valores requeridos";
      }
    }

    init() {
      if (this.edicion) {
        this.ReporteService.listarId(this.id).subscribe(data => {
          this.reporte = data;
        })
      }
  
    }
  
  }