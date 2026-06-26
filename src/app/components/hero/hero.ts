import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollToDirective } from '../../shared/scroll-to.directive';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  standalone: true,
  imports: [TranslatePipe, ScrollToDirective]
})
export class HeroComponent {
  scrollDown(): void {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  }
}
