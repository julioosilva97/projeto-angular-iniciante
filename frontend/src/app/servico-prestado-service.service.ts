import { ServicoPrestadoConsulta } from './servico-prestado/servico-prestado-lista/servico-prestado-consulta.model';
import { Observable } from 'rxjs';
import { ServicoPrestado } from './servico-prestado/servicoprestado.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoServiceService {

  baseUrl = environment.apiUrl+"/servicos-prestados";


  constructor(private http:HttpClient) { }

  salvar(servicoPrestado:ServicoPrestado): Observable<ServicoPrestado>{
    return this.http.post<ServicoPrestado>(this.baseUrl,servicoPrestado);
  }

  buscar(nome:string, mes:number):Observable<ServicoPrestadoConsulta[]>{
    console.log(nome)
    console.log(mes)

    const httpParams = new HttpParams().set("nome",nome).set("mes",mes.toString());

    const url = this.baseUrl + "?" + httpParams.toString();

    return this.http.get<any>(url);

  }
}
