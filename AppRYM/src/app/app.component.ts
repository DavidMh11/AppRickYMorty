import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { LoadScriptsService } from './services/archivosJS/load-scripts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppRYM';

  constructor(private loadScripts: LoadScriptsService) {
    loadScripts.Carga(["scrollbar/scrollbar"]);

  }

}

