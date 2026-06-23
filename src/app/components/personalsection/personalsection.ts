import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-personalsection',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './personalsection.html',
  styleUrl: './personalsection.scss',
})
export class Personalsection {
  relocateHover = false;
  remoteHover = false;
}
