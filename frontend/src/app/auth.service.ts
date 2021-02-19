import { environment } from './../environments/environment';
import { Observable } from 'rxjs';
import { Usuario } from './login/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiUrl + "/usuarios";

  constructor( private http : HttpClient) { }


  salvar(usuario:Usuario) : Observable<any> {
    return this.http.post(this.baseUrl, usuario);
  }

}
