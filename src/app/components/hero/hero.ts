import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  standalone: true
})
export class HeroComponent {
  scrollDown(): void {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  }
}
