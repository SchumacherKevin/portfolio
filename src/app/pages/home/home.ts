import { Component } from '@angular/core';
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
export class HomeComponent { }
