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
export class TestimonialSectionComponent {
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

  // -Looping mobile carousel: real slides flanked by a clone of the last and first item-
  get extendedTestimonials(): Testimonial[] {
    const items = this.testimonials;
    return [items[items.length - 1], ...items, items[0]];
  }

  currentIndex = 1;
  isAnimating = true;

  private touchStartX = 0;
  private touchStartY = 0;
  private touchCurrentX = 0;

  get trackTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  get trackTransition(): string {
    return this.isAnimating ? 'transform 300ms ease' : 'none';
  }

  onTouchStart(event: TouchEvent): void {
    const touch = event.touches[0];
    this.touchStartX = touch.clientX;
    this.touchStartY = touch.clientY;
    this.touchCurrentX = touch.clientX;
  }

  /**
   * Tracks the swipe and suppresses page scroll once the gesture is clearly horizontal,
   * so a vertical swipe still scrolls the page instead of dragging the carousel.
   * @param event Active touch-move event for the ongoing gesture.
   */
  onTouchMove(event: TouchEvent): void {
    const touch = event.touches[0];
    this.touchCurrentX = touch.clientX;
    const deltaX = touch.clientX - this.touchStartX;
    const deltaY = touch.clientY - this.touchStartY;
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      event.preventDefault();
    }
  }

  onTouchEnd(): void {
    const threshold = 40;
    const delta = this.touchCurrentX - this.touchStartX;
    if (delta > threshold) {
      this.showPrevious();
    } else if (delta < -threshold) {
      this.showNext();
    }
  }

  showNext(): void {
    this.isAnimating = true;
    this.currentIndex++;
  }

  showPrevious(): void {
    this.isAnimating = true;
    this.currentIndex--;
  }

  /**
   * Snaps the loop back from a clone slide to its real counterpart once the
   * transition animation finishes, without animating the jump.
   */
  onTrackTransitionEnd(): void {
    const lastIndex = this.extendedTestimonials.length - 1;
    if (this.currentIndex === lastIndex) {
      this.isAnimating = false;
      this.currentIndex = 1;
    } else if (this.currentIndex === 0) {
      this.isAnimating = false;
      this.currentIndex = lastIndex - 1;
    }
  }
}
