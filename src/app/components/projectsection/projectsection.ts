import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface Project {
  title: string;
  descriptionKey: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  imageLeft: boolean;
  /** Greys out the card and suppresses its GitHub/live links when the project isn't public yet. */
  disabled?: boolean;
}

@Component({
  selector: 'app-projectsection',
  templateUrl: './projectsection.html',
  styleUrl: './projectsection.scss',
  standalone: true,
  imports: [TranslatePipe]
})
export class ProjectSectionComponent {
  readonly projects: Project[] = [
    {
      title: 'Join',
      descriptionKey: 'PROJECTS.ITEMS.JOIN.DESCRIPTION',
      image: 'assets/join.png',
      imageAlt: 'Join project screenshot',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      githubUrl: 'https://github.com/SchumacherKevin',
      liveUrl: 'https://projects.kevin-schumacher.de/join/',
      imageLeft: true,
      disabled: true
    },
    {
      title: 'Pokedex',
      descriptionKey: 'PROJECTS.ITEMS.POKEDEX.DESCRIPTION',
      image: 'assets/pokedex.png',
      imageAlt: 'Pokedex project screenshot',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/SchumacherKevin/Pokedex.git',
      liveUrl: 'https://projects.kevin-schumacher.de/pokedex/',
      imageLeft: false
    },
    {
      title: 'El Pollo Loco',
      descriptionKey: 'PROJECTS.ITEMS.ELPOLLOLOCO.DESCRIPTION',
      image: 'assets/el-pollo-loco.png',
      imageAlt: 'El Pollo Loco project screenshot',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/SchumacherKevin/El-Pollo-Locco.git',
      liveUrl: 'https://projects.kevin-schumacher.de/el-pollo-loco/',
      imageLeft: true
    }
  ];
}
