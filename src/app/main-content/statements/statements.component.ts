import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-statements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statements.component.html',
  styleUrl: './statements.component.scss'
})
export class StatementsComponent {

  statements = [
    {
        "name": "James Rugman",
        "project": "Project Join",
        "content": "Sofia is a reliable and friendly person. Work in a structured way and write a clear code. I highly recommend her as a colleague."
    },
    {
        "name": "Evelyn Marx",
        "project": "Project DA Bubble",
        "content": "Sofia is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code."
    },
    {
        "name": "Noah Müller",
        "project": "Project Pollo Locco",
        "content": "Sofia had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person."
    }
  ]
}