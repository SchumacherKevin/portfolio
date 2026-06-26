import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollToDirective } from '../../shared/scroll-to.directive';

@Component({
  selector: 'app-personalsection',
  standalone: true,
  imports: [TranslatePipe, ScrollToDirective],
  templateUrl: './personalsection.html',
  styleUrl: './personalsection.scss',
})
export class PersonalSectionComponent {
  relocateHover = false;
  remoteHover = false;
}
