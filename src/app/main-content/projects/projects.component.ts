import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  constructor(public portfolioService: PortfolioService) {}

  /* 
   * An array of project objects, where each object represents a specific project. 
   * Each project contains details such as its name, technologies used, a brief 
   * description, image references, and optionally a link to the project.
   */
  projects = [
    {
        "name": "JOIN",
        "skills": "Angular | TypeScript | HTML | CSS | Firebase",
        "contentEN": "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
        "contentDE": "Aufgabenmanager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzern und Kategorien zu.",
        "image": "join-image",
        "alt": "JOIN Image",
        "link": "https://github.com/Pinguinrakete/join",
        "link_live_test": "https://join.enrico-kirschke.de/javascript/join/index.html"
    },
    {
        "name": "Pollo Loco",
        "skills": "JavaScript | HTML | CSS",
        "contentEN": "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
        "contentDE": "Jump-and-Run-Spiel, das objektorientiert programmiert wurde. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen das verrückte Huhn zu kämpfen.",
        "image": "pollo-loco-image",
        "alt": "Pollo Loco Image",
        "link": "https://github.com/Pinguinrakete/el_pollo_loco",
        "link_live_test": "https://elpolloloco.enrico-kirschke.de/javascript/elpolloloco/index.html"
    },
    {
        "name": "DA Bubble",
        "skills": "Angular | TypeScript | HTML | CSS | Firebase",
        "contentEN": "A very Simple Customer Relationship Management system working with CRUD functionality.",
        "contentDE": "Ein sehr einfaches Customer Relationship Management (CRM)-System mit CRUD-Funktionalität.",        
        "image": "simple-crm-image",
        "alt": "DA Bubble Image",
        "link": "https://chatgpt.com/",
        "link_live_test": "https://chatgpt.com/"
    },
    {
      "name": "Pokédex",
      "skills": "JavaScript | HTML | CSS | Api",
      "contentEN": "Based on the PokéAPI a simple library that provides and catalogues pokemon information.",
      "contentDE": "Basierend auf der PokéAPI eine einfache Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert.",
      "image": "pokedex-image",
      "alt": " Pokedex Image",
      "link": "https://github.com/Pinguinrakete/pokedex",
      "link_live_test": "https://pokedex.enrico-kirschke.de/javascript/pokedex/index.html"
    }
  ]
}