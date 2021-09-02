import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-search',
  template: '<div class="search-container"><input #inputSearch type="text" placeholder="Search.." name="search" (keyup)="onSearch(inputSearch.value)"></div>',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSearch(value: string) {
    if (value && value.length > 3) {
      this.router.navigate(['/personajes'], {
        queryParams:{q:value}
      })
    }
  }
}
