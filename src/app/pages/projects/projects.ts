import { Component } from '@angular/core';
import { Projectsection } from '../../components/projectsection/projectsection';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  standalone: true,
  imports: [Projectsection]
})
export class ProjectsPageComponent { }
