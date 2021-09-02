import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListPersonajeComponent } from './pages/list-personaje/list-personaje.component';
import { ErrorComponent } from './pages/error/error.component';
import { DetailPersonajeComponent } from './pages/detail-personaje/detail-personaje.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'personajes',
    component: ListPersonajeComponent
  },  
  {
    path: 'personajes/:id',
    component: DetailPersonajeComponent
  },  
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
