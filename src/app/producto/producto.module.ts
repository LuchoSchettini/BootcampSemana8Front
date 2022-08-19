import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './listado/listado.component';
import { ProductoRoutingModule } from './producto-routing.module';
import { MaterialModule } from '../material/material.module';
import { ProductoService } from './producto.service';



@NgModule({
  declarations: [
    AgregarComponent,
    EditarComponent,
    EliminarComponent,
    HomeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MaterialModule
  ],
  providers: [
    ProductoService
  ]
})
export class ProductoModule {

 }
