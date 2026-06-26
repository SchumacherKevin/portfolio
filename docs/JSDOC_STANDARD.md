# JSDoc Standard

Conventions for documenting TypeScript code in this Angular portfolio. Applies to components, directives, services, pipes, and standalone utility functions under `src/app/`.

## When to write a JSDoc comment

Document the **public surface** of a class — `@Input`/`@Output` members, exported functions, and public methods whose name/signature alone doesn't make behavior obvious. Skip JSDoc for:

- Private/internal helpers, trivial getters/setters, and template-only state (e.g. `emailHover`, `currentIndex`).
- Anything where the method name and types already say everything (`showNext(): void`).
- Component classes themselves (the `@Component` decorator + filename already identify them).

If a one-line inline comment (`// why this exists`) would suffice per the project's general no-comment-bloat rule, prefer that over a JSDoc block. JSDoc is for documenting an API contract someone else will call without reading the implementation — not for narrating what the code does.

## Tag set

Use only the tags below, in this order. Omit any tag that adds no information.

| Tag            | Use for                                                                             |
| -------------- | ----------------------------------------------------------------------------------- |
| (summary line) | One sentence, imperative mood, no period needed but allowed. Always present.        |
| `@param`       | Each parameter, only if the name/type don't already convey meaning.                 |
| `@returns`     | Non-`void` returns where the meaning of the value isn't obvious from the name/type. |
| `@throws`      | Only if the function can throw in a way callers must handle.                        |
| `@default`     | On `@Input` properties with a non-obvious default.                                  |
| `@deprecated`  | With a one-line replacement pointer.                                                |

Do not use `@author`, `@since`, `@version`, `@license`, `@example` blocks, or decorative banners (`/** ============ */`). Do not restate the TypeScript type in prose (no "—is a string—").

## Formatting

```ts
/**
 * Scrolls smoothly to the element matching this directive's target id.
 * @param event Click event being intercepted to suppress the default jump.
 */
@HostListener('click', ['$event'])
onClick(event: Event): void {
  ...
}
```

- `/** ... */` block directly above the declaration, no blank line between.
- Summary line is one sentence. Wrap additional context as plain prose below it, before the tags, only if genuinely needed.
- One space after `*` on each line; no trailing punctuation tricks, no ASCII art.

## Inputs and Outputs

Document `@Input`/`@Output` members when the binding name doesn't fully explain intent, or when there's a non-default value/unit/format to call out:

```ts
export class ScrollToDirective {
  /**
   * Id of the element to scroll into view on click.
   * @default ''
   */
  @Input('appScrollTo') targetId = '';
}
```

Skip JSDoc on inputs/outputs whose name is already the full contract (e.g. `disabled: boolean`).

## Services and exported functions

Exported, non-trivial functions and injectable service methods get a summary + `@param`/`@returns` as needed:

```ts
/**
 * Builds the contact-form payload expected by the PHP mail endpoint.
 * @returns Plain object ready for `JSON.stringify`.
 */
function buildMailPayload(form: ContactForm): MailPayload { ... }
```

## Language

Write JSDoc in English, matching the codebase's existing comments and identifiers (UI copy is the only place German appears, via i18n).

## Enforcement

This is a documentation convention, not a lint rule — there is no `eslint-plugin-jsdoc` configured. Apply it by review: when adding or touching a public method, input, or exported function, check whether it needs a JSDoc block per the rules above before committing.
