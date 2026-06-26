import { Component } from '@angular/core';
import { ProjectSectionComponent } from '../../components/projectsection/projectsection';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  standalone: true,
  imports: [ProjectSectionComponent]
})
export class ProjectsPageComponent { }
