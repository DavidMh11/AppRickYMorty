import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajeI } from '../../models/personajes/personaje.interface';
import { ApiRYMService } from '../../services/api-rym.service';

@Component({
  selector: 'app-detail-personaje',
  templateUrl: './detail-personaje.component.html',
  styleUrls: ['./detail-personaje.component.css']
})
export class DetailPersonajeComponent implements OnInit {
  personaje: PersonajeI;
  origin: any[]
  constructor(private route: ActivatedRoute, private apiService: ApiRYMService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id']
      if (id != null) {
        this.apiService.getPersonajeById(id).subscribe((res:any) => {                            
          this.personaje = res;  
        });
      }
    });
  }
}
