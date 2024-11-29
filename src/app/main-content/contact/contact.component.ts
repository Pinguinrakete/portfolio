import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
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

  onHover() {
    this.isHovered = true;
  }

  onLeave() {
    this.isHovered = false;
  }

  btnOn() {
    this.btnHasBeenPushed = true;
  }

  checkValidyOfInput() {
    if(this.btnHasBeenPushed) {
      this.checkValidyOfInputfield('name',this.nameInput);
      this.checkValidyOfInputfield('email',this.emailInput);
      this.checkValidyOfInputfield('message',this.messageInput);
      this.checkValidyOfCheckBox();
    }
  }

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

  checkValidyOfInputfield(inputData:string, inputfield:any) {
    if(inputfield.invalid) {
        this.showRequiredTextAndErrorIcon(inputData);
      } else {
        this.removeRequiredTextAndErrorIcon(inputData);
      }
    }

  showRequiredTextAndErrorIcon(inputData:string) {
    const inputError = document.getElementById(`required-${inputData}`);
    const iconError = document.getElementById(`error-${inputData}-icon`);
    
    if (inputError && iconError) {
      inputError.classList.remove('d-none');
      iconError.classList.remove('d-none');
    }
  }

  removeRequiredTextAndErrorIcon(inputData:string) {
    const inputError = document.getElementById(`required-${inputData}`);
    const iconError = document.getElementById(`error-${inputData}-icon`);
    
    if (inputError && iconError) {
      inputError.classList.add('d-none');
      iconError.classList.add('d-none');
    }
  }

  sendEmail() {
    this.checkValidyOfInput();

    if (this.nameInput.valid && this.emailInput.valid && this.messageInput.valid && this.checkBoxPrivacyPolicy) {
      const btnChangeColor = document.getElementById('btn-submit');

      if (btnChangeColor) {
      btnChangeColor.classList.add('btn-say-hello');
      this.clearInputFields();
      // Hier kannst du weiter verfahren (z.B. Formular absenden)
      }
    }
  }

  clearInputFields() {
    this.inputName = '';
    this.inputEmail = '';
    this.inputMessage = '';
    this.checkBoxPrivacyPolicy = false;
  }

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
}