import { Routes } from '@angular/router';
import { LandingpageComponent } from './main-content/landingpage/landingpage.component';
import { LegalNoticeComponent } from './../app/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './../app/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: LandingpageComponent,  },
    { path: 'legal-notice', component: LegalNoticeComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
];
