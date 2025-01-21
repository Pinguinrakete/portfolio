import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-lets-work-together',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './lets-work-together.component.html',
  styleUrls: ['./lets-work-together.component.scss', './lets-work-together-responsive.component.scss']
})
export class LetsWorkTogetherComponent {
  
  /*
   * This method scrolls the page smoothly to the "go-to-contact" section when triggered. 
   * It is typically used for smooth navigation from one part of the page to another, 
   * particularly when a user clicks a button or link to go to the contact section.
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
