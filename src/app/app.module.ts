import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuentaComponent } from './page/cuenta/cuenta.component';
import { CuentaListarComponent } from './page/cuenta/cuenta-listar/cuenta-listar.component';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import{MatIconModule} from'@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ObjetoComponent } from './page/objeto/objeto.component';
import { ObjetoListarComponent } from './page/objeto/objeto-listar/objeto-listar.component';
import { ObjetoCreaeditaComponent } from './page/objeto/objeto-creaedita/objeto-creaedita.component';
import { ReporteComponent } from './page/reporte/reporte.component';
import { ReporteListarComponent } from './page/reporte/reporte-listar/reporte-listar.component';
import { ReporteCreaeditaComponent } from './page/reporte/reporte-creaedita/reporte-creaedita.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReporteDialogoComponent } from './page/reporte/reporte-listar/reporte-dialogo/reporte-dialogo.component';
import { ReporteBuscarComponent } from './page/reporte/reporte-buscar/reporte-buscar.component';
import { DistritoComponent } from './page/distrito/distrito.component';
import { DistritoBuscarComponent } from './page/distrito/distrito-buscar/distrito-buscar.component';
import { DistritoCreaeditaComponent } from './page/distrito/distrito-creaedita/distrito-creaedita.component';
import { DistritoListarComponent } from './page/distrito/distrito-listar/distrito-listar.component';
import { DistritoDialogoComponent } from './page/distrito/distrito-listar/distrito-dialogo/distrito-dialogo.component';


@NgModule({
  declarations: [
    AppComponent,
    CuentaComponent,
    CuentaListarComponent,
    ObjetoComponent,
    ObjetoListarComponent,
    ObjetoCreaeditaComponent,
    ReporteComponent,
    ReporteListarComponent,
    ReporteCreaeditaComponent,
    ReporteDialogoComponent,
    ReporteBuscarComponent,
    DistritoComponent,
    DistritoBuscarComponent,
    DistritoCreaeditaComponent,
    DistritoListarComponent,
    DistritoDialogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
