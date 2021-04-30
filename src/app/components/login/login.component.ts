import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';

import { Login } from '../../models/login';
import { Menu } from '../../models/menu/menu';
import { Usuario } from '../../models/usuario';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
 formGroup: FormGroup;
 login: Login = new Login();
 usuario: Usuario = new Usuario();
 menu: Menu;
 loginValid: boolean = false;
 loading: boolean = false;


  constructor( private builder: FormBuilder, private loginService: LoginService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

    this.formGroup = this.builder.group({
      Email: ['',
      Validators.compose([Validators.required])],
      Senha: ['', 
      Validators.compose([Validators.required])]
    })
  }

  loginAuthetication() {
  if (this.formGroup.invalid) {
    Swal.fire('Opps!', 'Verifique seus dados antes de tentar novamente', 'warning')
  }else{
    this.loginValidation();
  }
}

loginValidation() {
 
 this.loading = true;
 this.usuario.email = this.formGroup.get('Email').value;
 this.usuario.senha = this.formGroup.get('Senha').value;
 
 this.loginAutenticated();
 
}

loginAutenticated() {
  
  this.loginValid = true;

  this.loginService.iniciaSessao(this.usuario)
  .subscribe((data: Login) => {
    this.retornoLogin(data);
  })
  .add(() => {
    if(this.loginValid = true) {
      this.setItemsToLocalStorage(this.login);
      this.spinner.show();
    }
  })
}

retornoLogin(data: Login) {
  
 this.login = data;

 this.spinner.hide();
 localStorage.setItem('token', data.usuario.token);
}

setItemsToLocalStorage(login: Login) {
  localStorage.setItem('Email', login.usuario.email);
  localStorage.setItem('Senha', login.usuario.senha);
  this.setItemsMenuToLocalStorag(login);

  location.href = './home';
}

setItemsMenuToLocalStorag(login: Login) {

  for(let item = 0; item < 3; item++) {

    let menu = login.menu[item];

    localStorage.setItem('icone', menu.icone);
    localStorage.setItem('nome', menu.nome);
    localStorage.setItem('menu_pai', String(menu.menu_pai));

  }
  
 }

}
