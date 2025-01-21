import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {
  isImageHidden: boolean = true;
  chunkedSkills: any[] = [];

  /*
   * An array of skill objects, where each object represents a specific skill with an associated 
   * image and name. This data structure is useful for rendering a list of skills on a page, 
   * where each skill can be displayed with its icon and name.
   */
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
    { image: 'growth_mindset', name: 'Growth mindset', alt: 'Growth mindset icon' },
  ];

  /*
   * The constructor method is called when an instance of the component or class is created. 
   * In this case, it immediately invokes the checkScreenSize() method to perform an action, 
   * likely related to adjusting the layout or behavior based on the screen size.
   */
  constructor() {
    this.checkScreenSize();
  }

  /* 
   * ngOnInit is part of Angular's component lifecycle and is invoked after the constructor but before 
   * the component's view and its child views are rendered. In this case, checkScreenSize() helps ensure 
   * that the component adapts to different screen sizes immediately when the component is initialized.
   */
  ngOnInit() {
    this.checkScreenSize();
  }

  /*
   * This method checks the current screen width and adjusts the layout accordingly by chunking skills 
   * into groups. It determines whether the screen is large or small (based on a width threshold of 700 pixels) 
   * and calls the chunkSkills() method with different arguments based on the screen size.
   */
  checkScreenSize() {
    if (window.innerWidth > 700) {
      this.chunkSkills(6);
    } else {
      this.chunkSkills(100);
    }
  }

  /*
   * This is a decorator used in Angular to listen for the resize event on the window 
   * object. It binds the method it decorates to the window's resize event, 
   * triggering the method every time the window is resized.
   */
  @HostListener('window:resize', ['$event'])

  /*
   * This method is triggered whenever the window is resized. It is used to check the screen 
   * size and update the layout or behavior of the component accordingly.
   */
  onResize(event: Event) {
    this.checkScreenSize();
  }

  /*
   * This method divides the list of skills into smaller chunks, where each chunk is an array of skills. 
   * The chunk size alternates between 6 and 5, depending on the value passed into the method, and is 
   * used to organize the skills array for display purposes (e.g., for a responsive grid layout).
   */
  chunkSkills(number: number): void {
    let currentIndex = 0;
    let chunkSize = number;
    const chunked: any[] = [];
    
    while (currentIndex < this.skills.length) {
      chunked.push(this.skills.slice(currentIndex, currentIndex + chunkSize));
      currentIndex += chunkSize;

      chunkSize = chunkSize === 6 ? 5 : 6;
    }

    this.chunkedSkills = chunked;
  }

  /* 
   * This method is used to reveal or show an image that was previously hidden. It sets the isImageHidden 
   * property to false, which likely controls the visibility of an image or element in the component's template.
   */
  showImage(): void {
    this.isImageHidden = false;
  }

  /*
   * This method is used to hide an image or element by setting the isImageHidden property to true. 
   * It effectively makes the associated image or element hidden in the component's template.
   */
  hideImage(): void {
    this.isImageHidden = true;
  }
}