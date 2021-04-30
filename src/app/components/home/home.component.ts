import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { HomeService } from './home.service';
import { Menu } from '../../models/menu/menu';

import { Usuario } from '../../models/menu/usuario_info';
import { Banner } from '../../models/menu/banner';
import { Empresas } from '../../models/menu/empresas';

import { Login } from '../../models/login';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  menu: Menu[] = [];
  usuario: Usuario[] = [];
  banner: Banner[] = [];
  empresas: Empresas[] = [];

  constructor( private service: HomeService) { }

  ngOnInit(): void {
    
    // this.menuShow();
    this.usuarioInfo();
    this.showBanner();
    this.listarEmpresas();
  }

  // menuShow() {
    
  //   for(let i = 0; i <= 3; i++) {

  //     let menu = this.menu[i];

  //     menu.icone = localStorage.getItem('icone');
  //     menu.nome = localStorage.getItem('nome');
  //     menu.menu_pai = Number(localStorage.getItem('menu_pai'));

  //   }
  // }

  usuarioInfo() {
    this.service.usuario()
    .subscribe((data) => {
      this.retornoUsuarioInfo(data);
    })
  }

  retornoUsuarioInfo(data) {
    if(data) {
      this.usuario = data;
    }
  }

  showBanner() {
    this.service.banner()
    .subscribe((data) => {
       this.retornoShowBanner(data);
    })
  }

  retornoShowBanner(data) {
    if(data) {
      this.banner = data;
    }
  }

  listarEmpresas() {
    
    this.service.empresas()
    .subscribe((data) => {
      this.retornoListarEmpresas(data)
    })
 
  }

  retornoListarEmpresas(data) {
    if(data) {
      this.empresas = data;
    }
    // else {
    //  Swal.fire('Opps!', 'Verifique seus dados antes de tentar novamente', 'warning')
    // }
  }

  acessarEmpresa() {
   
  }
 

 }
