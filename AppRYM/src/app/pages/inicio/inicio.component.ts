import { Component, OnInit } from '@angular/core';
import { UbicacionI } from '../../models/ubicaciones/ubicacion.interface';
import { ApiRYMService } from '../../services/api-rym.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  ubicaciones: UbicacionI[] = [];

  constructor(private apiService: ApiRYMService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getUbicaciones()
      .subscribe((res: any) => {
        const { info, results } = res;
        this.ubicaciones = [...this.ubicaciones, ...results];
        console.log(this.ubicaciones)
      });
  }

  onClick() {
    this.router.navigate(['error'])
  }
}
