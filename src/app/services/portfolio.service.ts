import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {
  openLegalNotice = false;
  openPrivacyPolicy = false;
  showLegalNotice = false;
  showPrivacyPolicy = false;
  selectedLanguage: string = 'en';

  /* 
   * A BehaviorSubject used to manage and broadcast the visibility state of the privacy policy or LegalNotice. 
   */
  private showLegalNoticeSubject = new BehaviorSubject<boolean>(false);
  private showPrivacyPolicySubject = new BehaviorSubject<boolean>(false);
  
  /*
   * This getter method provides an observable stream of the current state of the legal 
   * notice's visibility. It returns the showLegalNoticeSubject as an observable,allowing 
   * other components or services to subscribe to the visibility state and react to changes.
   */
  get showLegalNotice$() {
    return this.showLegalNoticeSubject.asObservable();
  }

  /*
   * This getter method provides an observable stream of the current state of the privacy 
   * policy's visibility. It returns the showPrivacyPolicySubject as an observable, allowing 
   * other components or services to subscribe to the visibility state and react to changes.
   */
  get showPrivacyPolicy$() {
    return this.showPrivacyPolicySubject.asObservable();
  }

  /* 
   * The toggleLegalNotice method is used to toggle the visibility state of 
   * the legal notice. It changes the current state (shown or hidden) of the 
   * legal notice by flipping the value of the showLegalNoticeSubject.
   */
  toggleLegalNotice() {
    this.showLegalNoticeSubject.next(!this.showLegalNoticeSubject.value);
  }

  /*
   * The togglePrivacyPolicy method is used to toggle the visibility state of 
   * the privacy policy. It changes the current state (shown or hidden) of the 
   * privacy policy by flipping the value of the showPrivacyPolicySubject.
   */
  togglePrivacyPolicy() {
    this.showPrivacyPolicySubject.next(!this.showPrivacyPolicySubject.value);
  }
}