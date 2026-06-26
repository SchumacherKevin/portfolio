import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollTo]',
  standalone: true,
})
export class ScrollToDirective {
  @Input('appScrollTo') targetId = '';

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    event.preventDefault();
    const target = document.getElementById(this.targetId);
    if (!target) return;

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
