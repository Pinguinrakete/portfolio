import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  scrollToLandingPage(event: Event) {
    event.preventDefault();
    const landingPageSection = document.getElementById('landing-page');
    
    if (landingPageSection) {
      landingPageSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start' 
      });
    }
  }

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
