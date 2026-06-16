import { Component } from '@angular/core';

interface Testimonial {
  name: string;
  project: string;
  quote: string;
}

@Component({
  selector: 'app-testimonialsection',
  templateUrl: './testimonialsection.html',
  styleUrl: './testimonialsection.scss',
  standalone: true,
  imports: []
})
export class Testimonialsection {
  readonly testimonials: Testimonial[] = [
    {
      name: 'Noah Mueller',
      project: 'Project Sharkie',
      quote: 'Kevin had to develop, format and deliver content in collaboration with the team members. He is a reliable and friendly person.'
    },
    {
      name: 'Evelyn Marx',
      project: 'Project Pollo Loco',
      quote: 'He is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code.'
    },
    {
      name: 'James Rugman',
      project: 'Project Join',
      quote: 'He is a reliable and friendly person. Work in a structured way and write clear code. I recommend him as a colleague.'
    }
  ];
}
