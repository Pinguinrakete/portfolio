import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = [
    {
        "name": "JOIN",
        "skills": "Angular | TypeScript | HTML | CSS | Firebase",
        "content": "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
        "image": "join-image",
        "alt": "JOIN Image"
    },
    {
        "name": "Pollo Loco",
        "skills": "JavaScript | HTML | CSS",
        "content": "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
        "image": "pollo-loco-image",
        "alt": "Pollo Loco Image"
    },
    {
        "name": "DA Bubble",
        "skills": "Angulatr | TypeScript | HTML | CSS | Firebase",
        "content": "A very Simple Customer Relationship Management system working with CRUD functionality.",
        "image": "simple-crm-image",
        "alt": "DA Bubble Image"
    },
    {
      "name": "Pokédex",
      "skills": "JavaScript | HTML | CSS | Api",
      "content": "Based on the PokéAPI a simple library that provides and catalogues pokemon information.",
      "image": "pokedex-image",
        "alt": " Image"
    }
  ]
}
