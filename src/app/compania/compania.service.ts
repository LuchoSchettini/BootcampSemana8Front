import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Compania, IDataCompania } from './interfaces/IDataCompania';

@Injectable({
  providedIn: 'root'
})
export class CompaniaService {

  apiUrl: string = environment.apiUrl;
  companiaUrl: string= `${this.apiUrl}/compania`;
  resultados: Compania[] = [];

  constructor(private http: HttpClient) { }

  listarCompañia(){
    this.http.get<IDataCompania>(this.companiaUrl)
    .subscribe(resp =>{
      this.resultados = resp.resultado;
    })
  }
}
