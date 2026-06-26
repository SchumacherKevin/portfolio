import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  private readonly translate = inject(TranslateService);

  readonly currentLang = this.translate.currentLang;
  readonly menuOpen = signal(false);

  /**
   * Switches the active i18n language for the whole app.
   * @param lang Language code matching one of the loaded translation files (e.g. `'en'`, `'de'`).
   */
  useLang(lang: string): void {
    this.translate.use(lang);
  }

  toggleMenu(): void {
    this.menuOpen.set(!this.menuOpen());
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}