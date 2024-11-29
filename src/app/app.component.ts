import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpapeComponent } from './main-content/landingpape/landingpape.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LandingpapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
