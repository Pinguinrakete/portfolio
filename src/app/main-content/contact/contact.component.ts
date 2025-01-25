import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { ContactFormSucessfullySubmittedComponent } from '../../main-content/contact-form-sucessfully-submitted/contact-form-sucessfully-submitted.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ContactFormSucessfullySubmittedComponent, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './contact-responsive.component.scss']
})
export class ContactComponent {

  @ViewChild('nameInput') nameInput!: NgModel;
  @ViewChild('emailInput') emailInput!: NgModel;
  @ViewChild('messageInput') messageInput!: NgModel;

  btnHasBeenPushed: boolean = false;
  inputName: string = '';
  inputEmail: string = '';
  inputMessage: string = '';
  checkBoxPrivacyPolicy: boolean = false;
  isHovered: boolean = false;
  showSuccessOverlay = false;

  /* 
   * The constructor of the Contact component is used to inject the PortfolioService into the component. 
   * This allows the component to interact with the service and access its properties and methods.
   */
  constructor(private router: Router) {}

  /*
   * When the user clicks the "PrivacyPolicy" link, the navigateToPrivacyPolicy() method is invoked, 
   * and the application navigates to the /privacy-policy route.
   */
  navigateToPrivacyPolicy() {
    this.router.navigate(['/privacy-policy']); 
  }

  /*
   * This method is triggered when a user hovers over a specific element. It updates the 
   * isHovered property to true, indicating that the element is currently being hovered.
   */
  onHover() {
    this.isHovered = true;
  }

  /*
   * This method is triggered when the user stops hovering over a specific element. It updates the 
   * isHovered property to false, indicating that the element is no longer being hovered.
   */
  onLeave() {
    this.isHovered = false;
  }

  /*
   * This method is triggered when a button is pressed. It updates the btnHasBeenPushed 
   * property to true, indicating that the button has been pushed or activated.
   */
  btnOn() {
    this.btnHasBeenPushed = true;
  }

  /*
   * This method is responsible for validating the input fields when a button has been pressed. It checks 
   * the validity of various input fields (such as name, email, and message) as well as the checkbox status.
   */
  checkValidyOfInput() {
    if(this.btnHasBeenPushed) {
      this.checkValidyOfInputfield('name',this.nameInput);
      this.checkValidyOfInputfield('email',this.emailInput);
      this.checkValidyOfInputfield('message',this.messageInput);
      this.checkValidyOfCheckBox();
    }
  }
  
  /*
   * This method is responsible for checking the validity of the privacy policy checkbox. It ensures 
   * that the checkbox has been checked, and if not, it reveals a validation message.
   */
  checkValidyOfCheckBox() {
    if(this.btnHasBeenPushed) {
      if(!this.checkBoxPrivacyPolicy) {
        const checkBoxPrivacyPolicy = document.getElementById('required-privacy-policy');
        
        if (checkBoxPrivacyPolicy) {
          checkBoxPrivacyPolicy.classList.remove('d-hidden');
        }
      } else {
        const checkBoxPrivacyPolicy = document.getElementById('required-privacy-policy');

        if (checkBoxPrivacyPolicy) {
            checkBoxPrivacyPolicy.classList.add('d-hidden');
        }
      }
    }
  }

  /*
   * This method validates an individual input field. If the input field is invalid, it triggers the 
   * display of an error message and icon. If the field is valid, it removes the error indicators.
   */
  checkValidyOfInputfield(inputData:string, inputfield:any) {
    if(inputfield.invalid) {
        this.showRequiredTextAndErrorIcon(inputData);
    } else {
      this.removeRequiredTextAndErrorIcon(inputData);
    }
  }

  /*
   * This method displays the error message and icon for a specific input field when it 
   * is invalid. It ensures that the relevant error text and icon are visible to the user.
   */
  showRequiredTextAndErrorIcon(inputData:string) {
    const inputError = document.getElementById(`required-${inputData}`);
    const iconError = document.getElementById(`error-${inputData}-icon`);
    
    if (inputError && iconError) {
      inputError.classList.remove('d-none');
      iconError.classList.remove('d-none');
    }
  }

  /*
   * This method hides the error message and icon for a specific input field when it is valid. 
   * It ensures that the relevant error indicators are no longer visible to the user.
   */
  removeRequiredTextAndErrorIcon(inputData:string) {
    const inputError = document.getElementById(`required-${inputData}`);
    const iconError = document.getElementById(`error-${inputData}-icon`);
    
    if (inputError && iconError) {
      inputError.classList.add('d-none');
      iconError.classList.add('d-none');
    }
  }

  /*
   * This method is triggered when the user submits a form. It validates the 
   * input fields and, if all fields are valid, changes the button's color, 
   * clears the input fields, and displays a success overlay.
   */
  onSubmit() {
    this.checkValidyOfInput();

    if (this.nameInput.valid && this.emailInput.valid && this.messageInput.valid && this.checkBoxPrivacyPolicy) {
      const btnChangeColor = document.getElementById('btn-submit');

      if (btnChangeColor) {
      btnChangeColor.classList.add('btn-say-hello');
      this.clearInputFields();
      // this.showSuccessOverlay = true;
      }
    }
  }

  /*
   * This method is responsible for closing the success overlay by setting the 
   * showSuccessOverlay property to false. It hides the overlay, typically used 
   * to indicate that a form submission was successful.
   */
  closeOverlay() {
    this.showSuccessOverlay = false;
  }

  /* 
   * This method clears the values of the input fields and resets the privacy policy checkbox to its default 
   * state. It is typically called after a successful form submission to reset the form for a new entry.
   */
  clearInputFields() {
    this.inputName = '';
    this.inputEmail = '';
    this.inputMessage = '';
    this.checkBoxPrivacyPolicy = false;
  }

  /*
   * This method smoothly scrolls the page to the "landing-page" section when triggered. 
   * It is typically used for navigation within the page, especially when a user clicks 
   * a link or button that should take them to the landing page section.
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
   * This method scrolls the page instantly to the "landing-page" section when triggered. 
   * It is similar to the smooth scroll functionality, but instead of a smooth transition, 
   * the scroll happens instantly.
   */
  startsAtTheTop(event: Event) {
    event.preventDefault();
    const landingPageSection = document.getElementById('landing-page');
    
    if (landingPageSection) {
      landingPageSection.scrollIntoView({
        behavior: 'instant',
        block: 'start' 
      });
    }
  }
}