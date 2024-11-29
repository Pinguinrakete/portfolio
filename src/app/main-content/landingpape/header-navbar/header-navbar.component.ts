import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-navbar.component.html',
  styleUrl: './header-navbar.component.scss'
})
export class HeaderNavbarComponent {
  activeLink: string = '';

  scrollToSkillSet(event: Event) {
    event.preventDefault();
    const skillSetSection = document.getElementById('go-to-skill-set');
    
    if (skillSetSection) {
      skillSetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'center' 
      });
    }
  }
   
  scrollToWorkTogether(event: Event) {
    event.preventDefault();
    const letsWorkTogether = document.getElementById('lets-work-together');
    
    if (letsWorkTogether) {
      letsWorkTogether.scrollIntoView({
        behavior: 'smooth',
        block: 'start' 
      });
    }
  }

  scrollToMyWork(event: Event) {
    event.preventDefault();
    const myWork = document.getElementById('my-work');
    
    if (myWork) {
      window.scrollTo({
        top: myWork.getBoundingClientRect().top + window.scrollY - 100, 
        behavior: 'smooth'
      });
    }
  }
}






  
