import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentaComponent } from './page/cuenta/cuenta.component';
import { ObjetoComponent } from './page/objeto/objeto.component';
import { ReporteComponent } from './page/reporte/reporte.component';
import { ObjetoCreaeditaComponent } from './page/objeto/objeto-creaedita/objeto-creaedita.component';
import { ReporteCreaeditaComponent } from './page/reporte/reporte-creaedita/reporte-creaedita.component';
import { CuentaCreaeditaComponent } from './page/cuenta/cuenta-creaedita/cuenta-creaedita.component';


const routes: Routes = [{
  path: 'cuenta', component: CuentaComponent, children:[
    { path: 'agregar', component: CuentaCreaeditaComponent },
    { path: 'edicion/:id', component: CuentaCreaeditaComponent }
  ]
}, {
  path: 'objeto', component: ObjetoComponent, children:[
    { path: 'agregar', component: ObjetoCreaeditaComponent },
    {path:'edicion/:id', component: ObjetoCreaeditaComponent}
  ]
}, {
  path: 'reporte', component: ReporteComponent, children:[
    { path: 'agregar', component: ReporteCreaeditaComponent },
    { path: 'edicion/:id', component: ReporteCreaeditaComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
