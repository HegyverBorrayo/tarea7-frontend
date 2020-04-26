import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresoNotaComponent } from './components/ingreso-nota/ingreso-nota.component';
import { ListadoNotaComponent } from './components/listado-nota/listado-nota.component';


const routes: Routes = [
  {path: 'ingreso', component: IngresoNotaComponent},
  {path: 'consulta', component: ListadoNotaComponent},
  {path: '', component: ListadoNotaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
