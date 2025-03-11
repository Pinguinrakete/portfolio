import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  /* 
   * The constructor of the Footer component is used to inject the PortfolioService into the component. 
   * This allows the component to interact with the service and access its properties and methods.
   */
  constructor(private router: Router) {}
  // constructor(private router: Router, private portfolioService: PortfolioService) {}

/*
 * When the user clicks the "Legal Notice" link, the navigateToLegalNotice() method is invoked, 
 * and the application navigates to the /legal-notice route.
 */
  navigateToLegalNotice() {
    this.router.navigate(['/legal-notice']); 
  }

  /*
   * The scrollToLandingPage method is used to smoothly scroll the page to the element 
   * with the ID landing-page. It prevents the default action associated with the event 
   * and triggers a smooth scroll to the designated section of the page.
   */
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

  /*
   * The scrollToContact method is used to smoothly scroll the page to the element with 
   * the ID go-to-contact. It prevents the default action associated with the event 
   * and scrolls to the contact section, centering it within the viewport.
   */
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