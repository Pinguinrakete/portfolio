import { Component } from '@angular/core';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { LetsWorkTogetherComponent } from '../lets-work-together/lets-work-together.component';
import { SkillSetComponent } from '../skill-set/skill-set.component';
import { MyWorkComponent } from '../my-work/my-work.component';
import { ProjectsComponent } from '../projects/projects.component';
import { StatementsComponent } from '../statements/statements.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

SkillSetComponent
@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [HeaderNavbarComponent, LetsWorkTogetherComponent, SkillSetComponent, MyWorkComponent, ProjectsComponent, StatementsComponent, ContactComponent, FooterComponent, TranslateModule],
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent {

  /*
   * This method is triggered when a user interacts with an element (such as a button) 
   * to scroll smoothly to the contact section of the landing page.
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
