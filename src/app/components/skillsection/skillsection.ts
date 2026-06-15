import { Component } from '@angular/core';

interface Skill {
  label: string;
  icon: string;
  challenge?: boolean;
}

@Component({
  selector: 'app-skillsection',
  standalone: true,
  templateUrl: './skillsection.html',
  styleUrl: './skillsection.scss',
})
export class Skillsection {
  skills: Skill[] = [
    { label: 'Angular', icon: 'assets/angular-icon-v2.svg' },
    { label: 'TypeScript', icon: 'assets/typescript-icon.svg' },
    { label: 'JavaScript', icon: 'assets/javascript-icon.svg' },
    { label: 'HTML', icon: 'assets/html5-icon.svg' },
    { label: 'CSS', icon: 'assets/css3-icon.svg' },
    { label: 'REST-API', icon: 'assets/restapi-icon.svg' },
    { label: 'Supabase', icon: 'assets/supabase-icon.svg' },
    { label: 'Git', icon: 'assets/git-icon.svg' },
    { label: 'Scrum', icon: 'assets/scrum-icon.svg' },
    { label: 'Material design', icon: 'assets/materialdesign-icon.svg' },
    { label: 'Challenge me', icon: 'assets/question-box-icon.svg', challenge: true },
  ];
}
