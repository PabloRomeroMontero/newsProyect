import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {DetailComponent} from './components/detail/detail.component';
import {BuscarComponent} from './components/buscar/buscar.component';
import {LoginComponent} from './components/login/login.component';
import {RegistrarComponent} from './components/registrar/registrar.component';
import {GuardGuard} from './guards/guard.guard';


const routes: Routes =
   [
    {  component: HomeComponent, path: 'home'},
    {  component: DetailComponent, path: 'detail/:id'},
    {  component: BuscarComponent, path: 'buscar/:id'},
    {  component: LoginComponent, path: 'login'},
    {  component: RegistrarComponent, path: 'registrar'},
    {  component: HomeComponent, path: '**'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
