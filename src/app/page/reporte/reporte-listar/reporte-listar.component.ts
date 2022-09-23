import { Component, OnInit } from '@angular/core';
import { ReporteService } from 'src/app/service/reporte.service';
import { Reporte } from 'src/app/model/reporte';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ReporteDialogoComponent } from './reporte-dialogo/reporte-dialogo.component';

@Component({
  selector: 'app-reporte-listar',
  templateUrl: './reporte-listar.component.html',
  styleUrls: ['./reporte-listar.component.css']
})
export class ReporteListarComponent implements OnInit {
  dataSource: MatTableDataSource<Reporte> = new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','descripcion','fechareporte','acciones'];
  private idMayor: number = 0;
  constructor(private ps: ReporteService, private dialog: MatDialog) { }

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
    this.dialog.open(ReporteDialogoComponent);
  }


  eliminar(id: number) {
    this.ps.eliminar(id).subscribe(() => {
      this.ps.listar().subscribe(data => {
        this.ps.setLista(data);/* se ejecuta la línea 27*/
      });
    });
  }
}
