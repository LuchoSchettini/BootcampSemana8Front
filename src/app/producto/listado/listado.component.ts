import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description'];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
      this.productoService.listarProductos();
  }

  get resultados(){
    return this.productoService.resultados;
  }

}
