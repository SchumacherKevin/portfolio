import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
  imports: [TranslatePipe]
})
export class LegalNoticeComponent { }
