import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { AuthGuardLogin } from './auth/authLogin.guard';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from  './components/login/login.component';
import { CadastroUsuarioComponent } from './components/cadastro/cadastro-usuario/cadastro-usuario.component';

const routes: Routes = [
   
    { path: '', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent, canActivate: [AuthGuardLogin]},
    { path: 'cadastro-usuario', component: CadastroUsuarioComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

