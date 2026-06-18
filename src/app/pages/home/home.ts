import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { Personalsection } from '../../components/personalsection/personalsection';
import { Skillsection } from '../../components/skillsection/skillsection';
import { Testimonialsection } from '../../components/testimonialsection/testimonialsection';
import { Projectsection } from '../../components/projectsection/projectsection';
import { Contactsection } from '../../components/contactsection/contactsection';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true,
  imports: [
    HeroComponent,
    Personalsection,
    Skillsection,
    Testimonialsection,
    Projectsection,
    Contactsection
  ]
})
export class HomeComponent { }
