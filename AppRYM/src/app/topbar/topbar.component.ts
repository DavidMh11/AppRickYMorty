import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementsByClassName('nav_links')[0]

    toggleButton.addEventListener('click',()=>{
      navbarLinks.classList.toggle('active')
    })
  }
  
  onSearch(){
    
  }
}
