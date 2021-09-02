import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Servicios
import { LoadScriptsService } from './services/archivosJS/load-scripts.service';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListPersonajeComponent } from './pages/list-personaje/list-personaje.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ErrorComponent } from './pages/error/error.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { RouterModule } from '@angular/router';
import { DetailPersonajeComponent } from './pages/detail-personaje/detail-personaje.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListPersonajeComponent, 
    DetailPersonajeComponent,  
    TopbarComponent,    
    ErrorComponent,
    InputSearchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [LoadScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
