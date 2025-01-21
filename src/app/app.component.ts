import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../src/app/services/portfolio.service';
import { LegalNoticeComponent } from './../app/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './../app/privacy-policy/privacy-policy.component';
import { LandingpageComponent } from './main-content/landingpage/landingpage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LegalNoticeComponent, PrivacyPolicyComponent, LandingpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Enrico Kirschke - Portfolio';

  /*
   * This constructor is part of the AppComponent class in Angular. It initializes the component by injecting 
   * the PortfolioService into the component, making it available for use throughout the component.
   */
  constructor(public portfolioService: PortfolioService) {}

  /*
   * The ngOnInit method is a lifecycle hook in Angular that is called once the component is 
   * initialized. In this method, the component subscribes to observables from the PortfolioService 
   * to update its internal state based on changes in the legal notice and privacy policy visibility.
   */
  ngOnInit() {
    this.portfolioService.showLegalNotice$.subscribe(show => {
      this.portfolioService.showLegalNotice = show;
    });

    this.portfolioService.showPrivacyPolicy$.subscribe(show => {
      this.portfolioService.showPrivacyPolicy = show;
    });
  }
}
