import { environment } from './../environments/environment';
import { Cliente } from './clientes/cliente.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

   baseUrl = environment.apiUrl+"/clientes";


  constructor(private http : HttpClient) { }

  salvar(cliente : Cliente) : Observable<Cliente>{
    ///const url = `${environment.apiUrl}/clientes`;
    return this.http.post<Cliente>(this.baseUrl,cliente);
  }

  listar() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl);
  }

  buscarPorId(id:number) : Observable<Cliente>{
    return this.http.get<Cliente>(`${this.baseUrl}/${id}`);
  }

  atualizar(cliente:Cliente) : Observable<Cliente>{
    return this.http.put<Cliente>(this.baseUrl,cliente);

  }

  excluir(id:number) : Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

}
