import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { Cuenta } from 'src/app/model/cuenta';
import { CuentaService } from 'src/app/service/cuenta.service';

@Component({
  selector: 'app-cuenta-creaedita',
  templateUrl: './cuenta-creaedita.component.html',
  styleUrls: ['./cuenta-creaedita.component.css']
})
export class CuentaCreaeditaComponent implements OnInit {
  cuenta:Cuenta=new Cuenta();
  mensaje:string="";
  edicion:boolean=false;
  id:number=0;

  constructor(private CuentaService:CuentaService,private router:Router,
    private route:ActivatedRoute) { }

    ngOnInit(): void {
      this.route.params.subscribe((data: Params) => {
        this.id = data['id'];
        this.edicion = data['id'] != null;
        this.init();
      });
    }
    aceptar(): void {
      if (this.cuenta.nombreCuenta.length > 0 && this.cuenta.contrasena.length > 0 && this.cuenta.correo.length>0 && this.cuenta.direccion.length>0) {   
        if (this.edicion) {
          this.CuentaService.modificar(this.cuenta).subscribe(data => {
            this.CuentaService.listar().subscribe(data => {
              this.CuentaService.setLista(data);
          })
        })
      } else {

        this.CuentaService.insertar(this.cuenta).subscribe(data => {
          this.CuentaService.listar().subscribe(data => {
            this.CuentaService.setLista(data);
          })
        })
      }
        this.router.navigate(['cuenta']);
      } else {
        this.mensaje = "Complete los valores requeridos";
      }
    }

    init() {
      if (this.edicion) {
        this.CuentaService.listarId(this.id).subscribe(data => {
          this.cuenta = data;
        })
      }
  
    }
}
