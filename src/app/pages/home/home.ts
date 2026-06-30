import { AfterViewInit, Component, inject, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeroComponent } from '../../components/hero/hero';
import { PersonalSectionComponent } from '../../components/personalsection/personalsection';
import { SkillSectionComponent } from '../../components/skillsection/skillsection';
import { TestimonialSectionComponent } from '../../components/testimonialsection/testimonialsection';
import { ProjectSectionComponent } from '../../components/projectsection/projectsection';
import { ContactSectionComponent } from '../../components/contactsection/contactsection';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true,
  imports: [
    HeroComponent,
    PersonalSectionComponent,
    SkillSectionComponent,
    TestimonialSectionComponent,
    ProjectSectionComponent,
    ContactSectionComponent
  ]
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private fragmentSub?: Subscription;

  // Subscribing to the observable (not just the snapshot) handles both initial load
  // (cross-page navigation) and same-page fragment changes (e.g. burger-menu links
  // while already on home). Using window.scrollTo with the fixed-header offset ensures
  // we land below the header instead of behind it.
  ngAfterViewInit(): void {
    this.fragmentSub = this.route.fragment.subscribe(fragment => {
      if (!fragment) return;
      this.scrollToFragment(fragment);
    });
  }

  ngOnDestroy(): void {
    this.fragmentSub?.unsubscribe();
  }

  private scrollToFragment(fragment: string): void {
    const doScroll = () => {
      const element = document.getElementById(fragment);
      if (!element) return;
      const header = document.querySelector<HTMLElement>('.header');
      const offset = header?.offsetHeight ?? 0;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    };

    // With cache disabled, Angular's template images (hero, projects, about-me, etc.)
    // are requested after the initial page load, so window.load and readyState checks
    // fire too early. We wait specifically for every unloaded image currently in the
    // DOM — once they all have their real dimensions the layout is stable and
    // getBoundingClientRect gives the correct contact-section position.
    const pending = Array.from(document.images).filter(img => !img.complete);

    if (pending.length === 0) {
      window.requestAnimationFrame(doScroll);
      return;
    }

    Promise.all(
      pending.map(
        img =>
          new Promise<void>(resolve => {
            img.addEventListener('load', () => resolve(), { once: true });
            img.addEventListener('error', () => resolve(), { once: true });
          })
      )
    ).then(() => window.requestAnimationFrame(doScroll));
  }
}
