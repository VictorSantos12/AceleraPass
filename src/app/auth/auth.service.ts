import { Injectable } from "@angular/core";

@Injectable ({
    providedIn: 'root'
})
export class AuthService {

    constructor() {}

Authenticated () {
  var sessao: string = localStorage.getItem("token");
  if (sessao == "" || sessao == null) {
    return false;
  }else {
    return true;
  }
}

}