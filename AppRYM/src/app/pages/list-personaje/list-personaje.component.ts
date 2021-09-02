import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { ApiRYMService } from '../../services/api-rym.service';
import { PersonajeI } from '../../models/personajes/personaje.interface';
import { take, filter } from 'rxjs/operators';
type RequestInfo = {
  next: string;
}

@Component({
  selector: 'app-list-personaje',
  templateUrl: './list-personaje.component.html',
  styleUrls: ['./list-personaje.component.css']
})
export class ListPersonajeComponent implements OnInit {
  personajes: PersonajeI[] = [];
  info: RequestInfo = {
    next: null
  }
  pageN = 1;
  private query: string;
  constructor(private router: Router, private apiService: ApiRYMService, private route: ActivatedRoute) {
    this.UrlChanged()
  }

  ngOnInit(): void {
  }

  private UrlChanged(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)).subscribe(
        () => {
          this.personajes = [];
          this.pageN = 1;
          this.getPersonajesByQuery();
        }
      )
  }

  private getPersonajesByQuery(): void {
    this.route.queryParams.pipe(take(1)).subscribe((params: ParamMap) => {
      console.log(params);
      this.query = params['q'];
      this.getPersonajes();
    })
  }

  private getPersonajes(): void {
    this.apiService.getPersonajes(this.query, this.pageN)
      .subscribe((res: any) => {
        const { info, results } = res;
        this.personajes = [...this.personajes, ...results];
        this.info = info;
      });
  }
  nextPage() {
    this.pageN++;
    this.apiService.getPersonajesByPages(this.pageN.toString()).subscribe((res: any) => {
      const { info, results } = res;
      this.personajes = [...this.personajes, ...results];
      this.info = info;
    });
  }

  detailsPersonaje(id: number) {
    this.router.navigate(['personajes',id])
  }
}
