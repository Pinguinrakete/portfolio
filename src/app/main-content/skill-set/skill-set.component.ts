import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {

  skills = [
    { image: 'angular', name: 'Angular', alt: 'Angular icon' },
    { image: 'typescript', name: 'TypeScript', alt: 'TypeScript icon' },
    { image: 'javascript', name: 'JavaScript', alt: 'JavaScript icon' },
    { image: 'html', name: 'HTML', alt: 'HTML icon' },
    { image: 'scrum', name: 'Scrum', alt: 'Scrum icon' },
    { image: 'firebase', name: 'Firebase', alt: 'Firebase icon' },
    { image: 'git', name: 'GIT', alt: 'GIT icon' },
    { image: 'css', name: 'CSS', alt: 'CSS icon' },
    { image: 'rest_api', name: 'Rest-Api', alt: 'Rest-Api icon' },
    { image: 'material_design', name: 'Material Design', alt: 'Material Design icon' },
    { image: 'growth_mindset', name: 'Growth mindset', alt: 'Growth mindset icon' }
  ];

  isImageHidden: boolean = true;

  showImage(): void {
    this.isImageHidden = false;
  }

  hideImage(): void {
    this.isImageHidden = true;
  }
}
