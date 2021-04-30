import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Login } from '../../models/login';
import { Usuario } from '../../models/usuario';

import { UrlAcesso } from '../../config/urlAcesso';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  acesso: UrlAcesso = new UrlAcesso();

  constructor( private http: HttpClient ) {
   }

  iniciaSessao(data: Usuario): Observable<Login>{
    return this.http.post<Login>(`${this.acesso.urlAcesso}/auth/login`, data);

  }

}
