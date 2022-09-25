import { Router, ActivatedRoute, Params } from '@angular/router';
import { ObjetoService } from './../../../service/objeto.service';
import { Objeto } from './../../../model/objeto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objeto-creaedita',
  templateUrl: './objeto-creaedita.component.html',
  styleUrls: ['./objeto-creaedita.component.css']
})
export class ObjetoCreaeditaComponent implements OnInit {
  objeto:Objeto=new Objeto();
  mensaje: string="";
  edicion:boolean=false;
  id: number=0;

  constructor(private ObjetoService: ObjetoService, private router:Router, private route:ActivatedRoute) 
  { }
  
  ngOnInit(): void {
    this.route.params.subscribe((data: Params)=>{
      this.id=data['id'];
      this.edicion=data['id']!=null;
      this.init();
    });
  }
  aceptar(): void {
    if (this.objeto.nombreObjeto.length > 0 && this.objeto.ubicacion.length > 0) {   
      if (this.edicion) {
        this.ObjetoService.modificar(this.objeto).subscribe(data => {
          this.ObjetoService.listar().subscribe(data => {
            this.ObjetoService.setLista(data);
        })
      })
    } else {

      this.ObjetoService.insertar(this.objeto).subscribe(data => {
        this.ObjetoService.listar().subscribe(data => {
          this.ObjetoService.setLista(data);
        })
      })
    }
      this.router.navigate(['reporte']);
    } else {
      this.mensaje = "Complete los valores requeridos";
    }
  }

init()
{
  if(this.edicion)
  {
    this.ObjetoService.listarId(this.id).subscribe(data=>{
      this.objeto=data;
    })
  }
}
}
