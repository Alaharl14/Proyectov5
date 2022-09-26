import { Component, OnInit } from '@angular/core';
import { DistritoService } from 'src/app/service/distrito.service';
import { Distrito } from 'src/app/model/distrito';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DistritoDialogoComponent } from './distrito-dialogo/distrito-dialogo.component';

@Component({
  selector: 'app-distrito-listar',
  templateUrl: './distrito-listar.component.html',
  styleUrls: ['./distrito-listar.component.css']
})
export class DistritoListarComponent implements OnInit {
  dataSource: MatTableDataSource<Distrito> = new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','acciones'];
  private idMayor: number = 0;
  constructor(private ps: DistritoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    })
    this.ps.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.ps.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }

  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(DistritoDialogoComponent);
  }


  eliminar(id: number) {
    this.ps.eliminar(id).subscribe(() => {
      this.ps.listar().subscribe(data => {
        this.ps.setLista(data);/* se ejecuta la línea 27*/
      });
    });
  }
}
