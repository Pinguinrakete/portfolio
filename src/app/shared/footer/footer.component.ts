import { Component } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  /* 
   * The constructor of the Footer component is used to inject the PortfolioService into the component. 
   * This allows the component to interact with the service and access its properties and methods.
   */
  constructor(private portfolioService: PortfolioService) {}

  /*
   * The toggleLegalNoticeComponent method is responsible for toggling the visibility of the legal notice 
   * component. It also ensures that any currently open privacy policy is closed when the legal notice is toggled.
   */
  toggleLegalNoticeComponent() {
    this.statusLegalNotice();

    if (this.portfolioService.openPrivacyPolicy) {
      this.portfolioService.togglePrivacyPolicy();
      this.portfolioService.toggleLegalNotice();
      this.portfolioService.openPrivacyPolicy = false;
    } else {
      this.portfolioService.toggleLegalNotice();
    }
  }

  /*
   * The statusLegalNotice method toggles the visibility state of the legal notice. It checks 
   * whether the legal notice is currently open or closed and then updates its state accordingly.
   */
  statusLegalNotice() {
    if (!this.portfolioService.openLegalNotice) {
      this.portfolioService.openLegalNotice = true;
    } else {
      this.portfolioService.openLegalNotice = false;
    }
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