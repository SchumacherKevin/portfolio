import { AfterViewInit, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
export class HomeComponent implements AfterViewInit {
  private readonly route = inject(ActivatedRoute);

  /**
   * Scrolls to the route fragment once the view has rendered. Needed because when navigating
   * here from another lazy-loaded route (e.g. the burger menu on the legal notice page), the
   * router's built-in anchor scrolling fires before the freshly loaded sections have settled
   * into their final layout, landing on the wrong spot on mobile.
   */
  ngAfterViewInit(): void {
    const fragment = this.route.snapshot.fragment;
    if (!fragment) return;

    setTimeout(() => {
      document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  }
}
