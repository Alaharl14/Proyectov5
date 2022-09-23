import { Component, OnInit } from '@angular/core';
import { CuentaService } from 'src/app/service/cuenta.service';
import { Cuenta } from 'src/app/model/cuenta';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-cuenta-listar',
  templateUrl: './cuenta-listar.component.html',
  styleUrls: ['./cuenta-listar.component.css']
})
export class CuentaListarComponent implements OnInit {
  dataSource: MatTableDataSource<Cuenta> = new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','contrasena','correo','numero','direccion'];
  constructor(private ps: CuentaService) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
