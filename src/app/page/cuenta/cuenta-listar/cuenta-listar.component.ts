import { Component, OnInit } from '@angular/core';
import { CuentaService } from 'src/app/service/cuenta.service';
import { Cuenta } from 'src/app/model/cuenta';
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog';
import { CuentaDialogoComponent } from './cuenta-dialogo/cuenta-dialogo.component';

@Component({
  selector: 'app-cuenta-listar',
  templateUrl: './cuenta-listar.component.html',
  styleUrls: ['./cuenta-listar.component.css']
})
export class CuentaListarComponent implements OnInit {
  dataSource: MatTableDataSource<Cuenta> = new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','contrasena','correo','numero','direccion','acciones'];
  private idMayor: number = 0;
  constructor(private ps: CuentaService, private dialog: MatDialog) { }

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
    this.dialog.open(CuentaDialogoComponent);
  }


  eliminar(id: number) {
    this.ps.eliminar(id).subscribe(() => {
      this.ps.listar().subscribe(data => {
        this.ps.setLista(data);
      });
    });
  }
}
