import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './listado/listado.component';
import { EliminarComponent } from './eliminar/eliminar.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent,
    children: [
      {path:'listado', component: ListadoComponent},
      {path:'agregar', component: AgregarComponent},
      {path:'editar/:id', component: EditarComponent},
      {path:'eliminar/:id', component: EliminarComponent},
      {path:'**', redirectTo: 'listado'},
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
      RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class CompaniaRoutingModule { }
