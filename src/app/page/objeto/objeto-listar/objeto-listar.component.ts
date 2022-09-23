import { Component, OnInit } from '@angular/core';
import { ObjetoService } from 'src/app/service/objeto.service';
import { Objeto } from 'src/app/model/objeto';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-objeto-listar',
  templateUrl: './objeto-listar.component.html',
  styleUrls: ['./objeto-listar.component.css']
})
export class ObjetoListarComponent implements OnInit {
  dataSource: MatTableDataSource<Objeto> = new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','distancia','distanciaLimite','ubicacion','fechaVinculo'];
  constructor(private ps: ObjetoService) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    })
  }

}

