import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { Personalsection } from '../../components/personalsection/personalsection';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true,
  imports: [HeroComponent, Personalsection]
})
export class HomeComponent { }
