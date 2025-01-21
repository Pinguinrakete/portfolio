import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-statements',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './statements.component.html',
  styleUrl: './statements.component.scss'
})

export class StatementsComponent {
  slideIndex: number = 1;
  isMobileView: boolean = window.innerWidth < 800;

  constructor(public portfolioService: PortfolioService) {}

  /*
   * An array of statement objects, where each object represents a testimonial or statement provided 
   * by a colleague or client. Each statement contains the person's name, the project they worked on, 
   * and their content (the testimonial itself).
   */
  statements = [
    {
        "name": "Katrin Schmidt",
        "project": "Project Join",
        "contentEN": "As a frontend developer, Rico has an impressive technical understanding. The way he solves complex UI problems while keeping performance and user-friendliness in mind is remarkable.",
        "contentDE": "Als Frontend-Developer hat Rico ein beeindruckendes technisches Verständnis. Die Art und Weise, wie er komplexe UI-Probleme löst und gleichzeitig auf Performance und Benutzerfreundlichkeit achtet, ist bemerkenswert."
    },
    {
      "name": "Jörg Weber",
      "project": "Project DA Bubble",
      "contentEN": "In our team, Rico is always the one who motivates the team and fosters collaboration. He ensures that all ideas are heard and actively contributes to a positive and productive working atmosphere.",
      "contentDE": "In unserem Team ist Rico immer derjenige, der das Team motiviert und die Zusammenarbeit fördert. Er sorgt dafür, dass alle Ideen gehört werden und trägt aktiv zu einer positiven und produktiven Arbeitsatmosphäre bei."
  },
    {
        "name": "Thomas Richter",
        "project": "Project Pollo Locco",
        "contentEN": "He knows how to create engaging and functional user interfaces that take the user experience to the next level. Every page he works on looks absolutely fantastic!",
        "contentDE": "Er versteht es, ansprechende und gleichzeitig funktionale Benutzeroberflächen zu erstellen, die die Benutzererfahrung auf ein neues Level heben. Jede Seite, an der er arbeitet, sieht einfach fantastisch aus!"
    }
  ]

  /* 
   * The ngAfterViewInit method is a lifecycle hook in Angular that is called after the component's view (and 
   * its child views) has been fully initialized. It is typically used to perform actions that require the view 
   * to be fully rendered before executing, such as interacting with DOM elements or initializing third-party libraries.
   * In this case, the method calls showSlides(1), which is likely used to initialize or 
   * display the first slide of a slideshow when the view is fully initialized.
   */
  ngAfterViewInit() {
    this.showSlides(1);
  }

  /* 
   * This method is used to navigate through a slideshow by incrementing or decrementing the slide index. It modifies the 
   * slideIndex by a given value (n) and then calls the showSlides() method to update the view to the new slide.
   */
  plusSlides(n: number): void {
    this.showSlides(this.slideIndex += n);
  }

  /*
   * This method is used to directly navigate to a specific slide in the slideshow by setting the slideIndex to the 
   * provided slide number (n). It then calls the showSlides() method to update the displayed slide.
   */
  currentSlide(n: number): void {
    this.showSlides(this.slideIndex = n);
  }

  /*
   * The showSlides method is responsible for displaying a specific slide in a slideshow, and it adjusts the visibility 
   * of the slides based on the provided index (n). It handles both mobile and non-mobile views, providing a different 
   * ehavior depending on the screen size.
   */
  showSlides(n: number): void {
    if (this.isMobileView) {
      let i: number;
      const slides: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
      const dots: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;

      if (n > slides.length) { 
        this.slideIndex = 1; 
      }

      if (n < 1) { 
        this.slideIndex = slides.length; 
      }

      for (i = 0; i < slides.length; i++) {
        slides[i].style.visibility = "hidden";  
      }

      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      slides[this.slideIndex - 1].style.visibility = "visible";  
      dots[this.slideIndex - 1].className += " active";
    } else {
      const slides: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.visibility = "visible";  
      }
    }
  }

  /*
   * This is a decorator used in Angular to listen for the resize event on the window 
   * object. It binds the method it decorates to the window's resize event, 
   * triggering the method every time the window is resized.
   */
  @HostListener('window:resize', ['$event'])
  
  /*
   * The onResize method is triggered when the window is resized. It updates the isMobileView 
   * property basedon the new window width and then calls the showSlides() method to update the 
   * slideshow accordingly. This ensures that the slideshow adapts to the screen size changes, 
   * such as switching between mobile and desktop views.
   */
  onResize(event: Event) {
    this.isMobileView = window.innerWidth < 800;
    this.showSlides(this.slideIndex); 
  }
}