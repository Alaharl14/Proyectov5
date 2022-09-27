import { MatDialogRef } from '@angular/material/dialog';
import { ObjetoService } from 'src/app/service/objeto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objeto-dialogo',
  templateUrl: './objeto-dialogo.component.html',
  styleUrls: ['./objeto-dialogo.component.css']
})
export class ObjetoDialogoComponent implements OnInit {

  constructor(private objetoServce:ObjetoService, private dialogRef:MatDialogRef<ObjetoDialogoComponent>) 
  { 

  }

  ngOnInit(): void {
  }
  confirmar(estado: boolean)
  {
    this.objetoServce.setConfirmaEliminacion(estado);
    this.dialogRef.close();
  }
}
