import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentaComponent } from './page/cuenta/cuenta.component';
import { ObjetoComponent } from './page/objeto/objeto.component';
import { ReporteComponent } from './page/reporte/reporte.component';
import { DistritoComponent } from './page/distrito/distrito.component';
import { ObjetoCreaeditaComponent } from './page/objeto/objeto-creaedita/objeto-creaedita.component';
import { ReporteCreaeditaComponent } from './page/reporte/reporte-creaedita/reporte-creaedita.component';
import { DistritoCreaeditaComponent } from './page/distrito/distrito-creaedita/distrito-creaedita.component';

const routes: Routes = [{
  path: 'cuenta', component: CuentaComponent, children:[

  ]
}, {
  path: 'objeto', component: ObjetoComponent, children:[
    { path: 'agregar', component: ObjetoCreaeditaComponent }
  ]
}, {
  path: 'reporte', component: ReporteComponent, children:[
    { path: 'agregar', component: ReporteCreaeditaComponent },
    { path: 'edicion/:id', component: ReporteCreaeditaComponent }


  ]
}, {  
    path: 'distrito', component: DistritoComponent, children:[
      { path: 'agregar', component: DistritoCreaeditaComponent },
      { path: 'edicion/:id', component: DistritoCreaeditaComponent }
    
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
