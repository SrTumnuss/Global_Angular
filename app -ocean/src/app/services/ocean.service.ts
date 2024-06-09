import { Injectable } from '@angular/core';
import {Ocean} from '../interfaces/ocean';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OceanService {
  private clienteUrl = "https://fiap-3sis-gs-20241.azurewebsites.net/OceanData?pagina=1&qtde=20";
  constructor(private http: HttpClient) {}

  //Esta lista virá da API
  clientes:Ocean[] = [];
  

  listar(): Observable <Ocean[]>{
   

    return this.http.get<Ocean[]>(this.clienteUrl) as Observable<Ocean[]>;

  
   


  }


}
