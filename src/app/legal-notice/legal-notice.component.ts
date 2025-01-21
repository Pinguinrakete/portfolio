import { Component } from '@angular/core';
import { HeaderNavbarComponent } from '../main-content/landingpage/header-navbar/header-navbar.component';
import { FooterComponent } from '../../app/shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [HeaderNavbarComponent, FooterComponent, TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

}
