import { Component } from '@angular/core';
import { HeaderNavbarComponent } from '../main-content/landingpage/header-navbar/header-navbar.component';
import { FooterComponent } from '../../app/shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [HeaderNavbarComponent, FooterComponent, TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
