import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { query } from '@angular/animations';
import { PersonajeI } from '../models/personajes/personaje.interface';
import { UbicacionI } from '../models/ubicaciones/ubicacion.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiRYMService {
  private ApiUrl = 'https://rickandmortyapi.com/api/';
  constructor(private http: HttpClient) { }

  getPersonajes(query = '', page = 1) {
    return this.http.get<PersonajeI[]>(this.ApiUrl + 'character/?name=' + query + '&page=' + page)
  }
  getPersonajesByPages(page: string) {
    return this.http.get<PersonajeI[]>(this.ApiUrl + 'character/?page=' + page)
  }
  getPersonajeById(id: string) {
    return this.http.get<PersonajeI[]>(this.ApiUrl + 'character/' + id)
  }
  getUbicaciones(){
    return this.http.get<UbicacionI[]>(this.ApiUrl+ 'location');
  }
}
