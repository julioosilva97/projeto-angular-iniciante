import { environment } from './../environments/environment';
import { Observable } from 'rxjs';
import { Usuario } from './login/usuario.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiUrl + "/usuarios";
  clientId = environment.clientId;
  clientSecret = environment.clientSecret;
  urlToken = environment.tokenUrl;

  jwtHelper : JwtHelperService= new JwtHelperService();

  constructor(private http: HttpClient) { }

  getToken(){
    const tokenString = localStorage.getItem('access_token');
    if(tokenString){
      const token = JSON.parse(tokenString).access_token;
      return token;
    }

    return null;
  }

  public isAuthenticad(){
    const token = this.getToken();
    if(token){
      const isExpired = this.jwtHelper.isTokenExpired(token);
      return !isExpired;
    }
    return false;
  }

  logout(){
    localStorage.removeItem('access_token');
  }

  getUsuario(){
    const token = this.getToken();
    console.log(token)
    if(token){
      return this.jwtHelper.decodeToken(token).user_name
     }

     return null;
  }

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
