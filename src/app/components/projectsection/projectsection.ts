import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  imageLeft: boolean;
}

@Component({
  selector: 'app-projectsection',
  templateUrl: './projectsection.html',
  styleUrl: './projectsection.scss',
  standalone: true,
  imports: []
})
export class Projectsection {
  readonly projects: Project[] = [
    {
      title: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: 'assets/join.png',
      imageAlt: 'Join project screenshot',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      githubUrl: '#',
      liveUrl: '#',
      imageLeft: true
    },
    {
      title: 'Pokedex',
      description: 'Browse and search all Pokémon using the PokéAPI. Displays types, stats and details in a responsive, interactive card interface.',
      image: 'assets/pokedex.png',
      imageAlt: 'Pokedex project screenshot',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: '#',
      liveUrl: '#',
      imageLeft: false
    },
    {
      title: 'El Pollo Loco',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      image: 'assets/el-pollo-loco.png',
      imageAlt: 'El Pollo Loco project screenshot',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: '#',
      liveUrl: '#',
      imageLeft: true
    }
  ];
}
