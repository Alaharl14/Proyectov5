import { ActivatedRoute, Params, Router } from '@angular/router';
import { DistritoService } from './../../../service/distrito.service';
import { Component, OnInit } from '@angular/core';
import { Distrito } from 'src/app/model/distrito';

@Component({
  selector: 'app-distrito-creaedita',
  templateUrl: './distrito-creaedita.component.html',
  styleUrls: ['./distrito-creaedita.component.css']
})
export class DistritoCreaeditaComponent implements OnInit {
  distrito : Distrito = new Distrito();
  mensaje: string = "";
  edicion: boolean = false;
  id: number = 0;

  constructor(private DistritoService: DistritoService,private router: Router,
    private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.route.params.subscribe((data: Params) => {
        this.id = data['id'];
        this.edicion = data['id'] != null;
        this.init();
      });
    }


    aceptar(): void {
      if (this.distrito.nombreDistrito.length > 0 ) {   
        if (this.edicion) {
          this.DistritoService.modificar(this.distrito).subscribe(data => {
            this.DistritoService.listar().subscribe(data => {
              this.DistritoService.setLista(data);
          })
        })
      } else {

        this.DistritoService.insertar(this.distrito).subscribe(data => {
          this.DistritoService.listar().subscribe(data => {
            this.DistritoService.setLista(data);
          })
        })
      }
        this.router.navigate(['distrito']);
      } else {
        this.mensaje = "Complete los valores requeridos";
      }
    }

    init() {
      if (this.edicion) {
        this.DistritoService.listarId(this.id).subscribe(data => {
          this.distrito = data;
        })
      }
  
    }
  
  }