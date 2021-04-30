import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Login } from '../../models/login';
import { Menu } from '../../models/menu/menu';
import { Banner } from '../../models/menu/banner';
import { Empresas } from '../../models/menu/empresas';
import { Usuario } from '../../models/menu/usuario_info';

import { UrlAcesso } from '../../config/urlAcesso';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  acesso: UrlAcesso = new UrlAcesso();
  token: string;

  constructor( private http: HttpClient ) {
    this.token = localStorage.getItem('token');
  }

  usuario(): Observable<Usuario>{
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('token', localStorage.getItem("token"));
    headers = headers.append('pagina', '1');
    return this.http.get<Usuario>(`${this.acesso.urlAcesso}/api/buscar_usuario_info`, {headers})
  }

  banner(): Observable<Banner>{
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('token', localStorage.getItem("token"));
    headers = headers.append('pagina', '1');
    return this.http.get<Banner>(`${this.acesso.urlAcesso}/api/banner`, {headers})
  }

  empresas(): Observable<Empresas> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('token', localStorage.getItem("token"));
    headers = headers.append('pagina', '1');
    return this.http.get<Empresas>(`${this.acesso.urlAcesso}/api/empresa-home`, {headers})
  }

}
