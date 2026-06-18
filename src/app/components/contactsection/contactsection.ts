import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contactsection',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contactsection.html',
  styleUrl: './contactsection.scss',
})
export class Contactsection {
  emailHover = false;
  phoneHover = false;
}
