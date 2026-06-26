# Kevin Schumacher — Portfolio

Personal portfolio website built with Angular, presenting an about-me section, skills, testimonials, projects, and a contact form. Live content (texts) is fully translated via i18n (German/English), and the layout is responsive (mobile-first single page with smooth scroll navigation).

## Features

- **Single-page sections**: Hero, personal/about, skills, testimonials, projects, and contact — composed in [home.ts](src/app/pages/home/home.ts) and linked via smooth-scroll navigation ([scroll-to.directive.ts](src/app/shared/scroll-to.directive.ts)).
- **Dedicated projects page**: [/projects](src/app/pages/projects/projects.ts) reuses the project section for a focused view.
- **Internationalization**: German and English translations served from [public/i18n](public/i18n) via `@ngx-translate`, with a language switcher in the header.
- **Contact form**: Reactive form in [contactsection.ts](src/app/components/contactsection/contactsection.ts) posts to a PHP mail endpoint ([contact-form-mail.php](public/contact-form-mail.php)) for sending emails without a dedicated backend.
- **Legal pages**: Imprint/legal notice and privacy policy routes for GDPR compliance.
- **Zoneless Angular**: Uses `provideZonelessChangeDetection` for change detection without `zone.js`.

## Tech stack

- [Angular](https://angular.dev) 22 (standalone components, signals, zoneless change detection)
- [@ngx-translate](https://github.com/ngx-translate/core) for i18n
- TypeScript, SCSS
- [Vitest](https://vitest.dev/) for unit tests

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Project structure

```
src/app/
├── components/      # Reusable section components (hero, skills, contact, footer, …)
├── pages/           # Routed pages (home, projects, legal-notice, privacy-policy)
├── shared/          # Shared directives (e.g. scroll-to)
├── app.routes.ts     # Route definitions
└── app.config.ts     # App-wide providers (router, i18n, HTTP client)
public/
├── i18n/            # Translation files (de.json, en.json)
└── contact-form-mail.php  # Backend endpoint for the contact form
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
