import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollTo]',
  standalone: true,
})
export class ScrollToDirective {
  /**
   * Id of the element to scroll into view on click.
   * @default ''
   */
  @Input('appScrollTo') targetId = '';

  /**
   * Scrolls smoothly to the element matching `targetId`.
   * @param event Click event being intercepted to suppress the default jump.
   */
  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    event.preventDefault();
    const target = document.getElementById(this.targetId);
    if (!target) return;

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
