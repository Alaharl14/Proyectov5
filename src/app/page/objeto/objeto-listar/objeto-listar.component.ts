import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ObjetoService } from 'src/app/service/objeto.service';
import { Objeto } from 'src/app/model/objeto';
import { MatTableDataSource } from '@angular/material/table'
import { ObjetoDialogoComponent } from './objeto-dialogo/objeto-dialogo.component';

@Component({
  selector: 'app-objeto-listar',
  templateUrl: './objeto-listar.component.html',
  styleUrls: ['./objeto-listar.component.css']
})
export class ObjetoListarComponent implements OnInit {
  dataSource: MatTableDataSource<Objeto> = new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','distancia','distanciaLimite','ubicacion','fechaVinculo', 'acciones'];
  private idMayor: number=0;
  constructor(private ps: ObjetoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    })
    this.ps.getLista().subscribe(data=>{this.dataSource=new MatTableDataSource(data);
    });
    this.ps.getConfirmaEliminacion().subscribe(data=>{
      data==true?this.eliminar(this.idMayor):false;
    })
    
  }

  confirmar(id:number)
  {
    this.idMayor=id;
    this.dialog.open(ObjetoDialogoComponent);
  }
  eliminar(id: number)
  {
    this.ps.eliminar(id).subscribe(()=>{
      this.ps.listar().subscribe(data=>{this.ps.setLista(data);})
    });

  }
}

