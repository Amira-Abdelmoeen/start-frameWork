import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY === 0 || document.documentElement.scrollTop === 0) {
       document.documentElement.querySelector(".navbar")?.classList.remove("p-2")
       document.documentElement.querySelector(".navbar")?.classList.add("p-4")
    }else{
      document.documentElement.querySelector(".navbar")?.classList.remove("p-4")
      document.documentElement.querySelector(".navbar")?.classList.add("p-2")
  
    }
  }
}
