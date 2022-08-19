import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProducto } from './interfaces/IProducto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


   apiUrl: string = environment.apiUrl;
   companiaUrl: string= `${this.apiUrl}/products`;
   resultados: IProducto[]  = [];
 
   constructor(private http: HttpClient) { }
 
   listarProductos(){
     this.http.get<IProducto[]>(this.companiaUrl)
     .subscribe(resp =>{
       this.resultados = resp;
     })
   }

   
}
