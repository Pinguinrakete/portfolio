import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule, TranslateService } from "@ngx-translate/core";
import { PortfolioService } from '../../../services/portfolio.service';

@Component({
  selector: 'app-header-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header-navbar.component.html',
  styleUrl: './header-navbar.component.scss'
})

export class HeaderNavbarComponent {
  activeLink: string = '';
  isMobileView: boolean = window.innerWidth < 911;
  isMobileViewHeight: boolean = window.innerHeight < 826;


  constructor(public portfolioService: PortfolioService, private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  /*
   * The method receives a parameter language, which contains the new language code.
   */

  switchLanguage(language: string) {
    this.portfolioService.selectedLanguage = language;
    this.translate.use(language);
  }
  
  /*
  * This method is triggered when a user interacts with a specific element in the navbar, 
  * typically associated with scrolling to the "Let's Work Together" section of the page.
  */
  scrollToWorkTogether(event: Event) {
    event.preventDefault();
    this.goToLandingpage();

    setTimeout(() => {
      const letsWorkTogether = document.getElementById('lets-work-together');
      
      if (letsWorkTogether) {
        letsWorkTogether.scrollIntoView({
          behavior: 'smooth',
          block: 'start' 
        });
      }
    }, 300);

    this.setStatusLegalNoticeAndPrivacyPolicy();
    this.closeMenu();
  }

  /*
  * This method is triggered when a user interacts with a specific element in the navbar, 
  * typically associated with scrolling to the "Skill set" section of the page.
  */
  scrollToSkillSet(event: Event) {
    event.preventDefault();
    this.goToLandingpage();

    setTimeout(() => {
      const skillSetSection = document.getElementById('go-to-skill-set');

      if (skillSetSection) {

        console.log(this.isMobileViewHeight);
        const scrollBlock = this.isMobileViewHeight ? 'start' : 'center';


        skillSetSection.scrollIntoView({
          behavior: 'smooth',
          block: scrollBlock
        });
      }
    }, 300);

    this.setStatusLegalNoticeAndPrivacyPolicy();
    this.closeMenu();
  }

  /*
   * This method is triggered when a user interacts with a specific element in the navbar, 
   * typically associated with scrolling to the "My work" section of the page.
   */
  scrollToMyWork(event: Event) {
    event.preventDefault();
    this.goToLandingpage();

    setTimeout(() => {
      const myWork = document.getElementById('my-work');
      
      if (myWork) {
        window.scrollTo({
          top: myWork.getBoundingClientRect().top + window.scrollY - 100, 
          behavior: 'smooth'
        });
      }
    }, 300);

    this.setStatusLegalNoticeAndPrivacyPolicy();
    this.closeMenu();
  }

  /*
   * This method is triggered when a user interacts with a specific element in the navbar, 
   * typically associated with scrolling to the "Contact" section of the page.
  */
  scrollToContact(event: Event) {
    event.preventDefault();
    this.goToLandingpage();

    setTimeout(() => {
      const contactSection = document.getElementById('go-to-contact');
      
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: 'smooth',
          block: 'center' 
        });
      }
    }, 300);

    this.setStatusLegalNoticeAndPrivacyPolicy();
    this.closeMenu();

  }

  /*
   * The method sets the openLegalNotice property of the portfolioService to false.
   * It also sets the openPrivacyPolicy property of the portfolioService to false.
   */
  setStatusLegalNoticeAndPrivacyPolicy() {
    this.portfolioService.openLegalNotice = false;
    this.portfolioService.openPrivacyPolicy = false;
  }

  /*
   * This method is responsible for opening the navigation menu on mobile view 
   * by manipulating the visibility and animation classes of a dialog element.
   */
  openNavigationMenu() {
    const dialog = document.getElementById('dialog');
    
    if (dialog && this.isMobileView) {
      dialog.classList.remove('slide-out');

      dialog.classList.remove('d-none');
    }
  }

  /*
  * This method is responsible for closing the navigation menu by adding appropriate classes 
  * to the dialog element to trigger a sliding animation and eventually hide the menu.
  */
  closeNavigationMenu() {
    const dialog = document.getElementById('dialog');
    
    if (dialog) {
      dialog.classList.add('slide-out');

      setTimeout(() => {
        dialog.classList.add('d-none');
      }, 300);
    }
  }

  /*
   * This method is responsible for closing the menu by hiding the dialog 
   * element after a specified delay.
  */
  closeMenu() {
    const dialog = document.getElementById('dialog');
    if (dialog) {

      setTimeout(() => {
        dialog.classList.add('d-none');
      }, 500);
    }
  }

  /*
   * This method handles the closing of the legal notice and privacy policy sections 
   * when navigating to the landing page. It ensures that any open legal notices or 
   * privacy policy dialogs are toggled off before transitioning to the landing page.
   */
  goToLandingpage() {
    if (this.portfolioService.openLegalNotice) {
      this.portfolioService.toggleLegalNotice();
    }

    if (!this.portfolioService.showLegalNotice && this.portfolioService.showPrivacyPolicy) {
      this.portfolioService.toggleLegalNotice();
    }

    if (this.portfolioService.openPrivacyPolicy) {
      this.portfolioService.togglePrivacyPolicy();
      this.portfolioService.toggleLegalNotice();
    }
  }

  /*
   * This is a decorator used in Angular to listen for the resize event on the window 
   * object. It binds the method it decorates to the window's resize event, 
   * triggering the method every time the window is resized.
   */
  @HostListener('window:resize', ['$event'])
    
  /*
   * This method is triggered when the window is resized. It updates the isMobileView 
   * property based on the new window width and handles the closing of the 
   * navigation menu if the window is not in mobile view.
   */
  onResize(event: Event) {
    const dialog = document.getElementById('dialog');
    this.isMobileView = window.innerWidth < 911;
    
    if (!this.isMobileView) {
      this.closeNavigationMenu();
    }
  }
}