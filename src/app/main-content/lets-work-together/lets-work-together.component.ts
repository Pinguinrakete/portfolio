import { Component } from '@angular/core';

@Component({
  selector: 'app-lets-work-together',
  standalone: true,
  imports: [],
  templateUrl: './lets-work-together.component.html',
  styleUrl: './lets-work-together.component.scss'
})
export class LetsWorkTogetherComponent {
  
  scrollToContact(event: Event) {
    event.preventDefault();
    const contactSection = document.getElementById('go-to-contact');
    
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'center' 
      });
    }
  }
}
