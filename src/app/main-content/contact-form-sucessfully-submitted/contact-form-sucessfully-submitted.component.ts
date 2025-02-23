import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form-sucessfully-submitted',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './contact-form-sucessfully-submitted.component.html',
  styleUrl: './contact-form-sucessfully-submitted.component.scss'
})

export class ContactFormSucessfullySubmittedComponent {
  /* 
   * The @Output() decorator is used to create an event emitter (close), which allows the 
   * child component (where this method resides) to send information to its parent component.
   */
  @Output() close = new EventEmitter<void>();

  /* 
   * This method emits an event to close or hide the overlay. It communicates with the parent 
   * component to trigger the closing action, typically used after a form submission or when 
   * the user takes an action to dismiss the overlay.
   */
  closeOverlay() {
    this.close.emit();
  }
}
