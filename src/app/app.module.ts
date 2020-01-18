import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { CreateEditComponent } from './components/create-edit/create-edit.component';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { ItemNewComponent } from './components/item-new/item-new.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import {NewsService} from './services/news.service';
import {FirebaseService} from './services/firebase.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CallbackComponent } from './components/callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    CreateEditComponent,
    DetailComponent,
    HomeComponent,
    ItemNewComponent,
    LoginComponent,
    NavbarComponent,
    RegistrarComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [NewsService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
