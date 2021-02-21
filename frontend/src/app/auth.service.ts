import { environment } from './../environments/environment';
import { Observable } from 'rxjs';
import { Usuario } from './login/usuario.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiUrl + "/usuarios";
  clientId = environment.clientId;
  clientSecret = environment.clientSecret;
  urlToken = environment.tokenUrl;

  constructor(private http: HttpClient) { }

  login(usuario: string, senha: string): Observable<any> {

    const params = new HttpParams()
      .set('username', usuario)
      .set('password', senha)
      .set('grant_type', 'password');

      const headers = {
        'Authorization': 'Basic '+ btoa(`${this.clientId}:${this.clientSecret}`),
        'Content-Type' : 'application/x-www-form-urlencoded'
      }

      return this.http.post(this.urlToken,params.toString(),{headers});

  }

  salvar(usuario: Usuario): Observable<any> {
    return this.http.post(this.baseUrl, usuario);
  }

}
