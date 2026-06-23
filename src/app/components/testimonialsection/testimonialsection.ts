import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface Testimonial {
  name: string;
  projectKey: string;
  quoteKey: string;
}

@Component({
  selector: 'app-testimonialsection',
  templateUrl: './testimonialsection.html',
  styleUrl: './testimonialsection.scss',
  standalone: true,
  imports: [TranslatePipe]
})
export class Testimonialsection {
  readonly testimonials: Testimonial[] = [
    {
      name: 'Noah Mueller',
      projectKey: 'TESTIMONIALS.ITEMS.NOAH.PROJECT',
      quoteKey: 'TESTIMONIALS.ITEMS.NOAH.QUOTE'
    },
    {
      name: 'Evelyn Marx',
      projectKey: 'TESTIMONIALS.ITEMS.EVELYN.PROJECT',
      quoteKey: 'TESTIMONIALS.ITEMS.EVELYN.QUOTE'
    },
    {
      name: 'James Rugman',
      projectKey: 'TESTIMONIALS.ITEMS.JAMES.PROJECT',
      quoteKey: 'TESTIMONIALS.ITEMS.JAMES.QUOTE'
    }
  ];
}
