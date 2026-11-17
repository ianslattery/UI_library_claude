---
name: component-workflow
description: Add or change an Angular component in this library. Use for any new component, component variant, or Material-based styling in ui_library_claude.
---

# Component workflow

## Stack
- Angular 22, standalone components, `ChangeDetectionStrategy.OnPush`, signal inputs (`input()`, `input.required()`).
- Angular Material 22 for base behaviour. Azure-blue theme, to be customised later.
- Storybook 10 (`@storybook/angular-vite`). One story file per component.
- Lato for typography. Figma node values are the source of truth.

## File layout
Each component lives in `src/app/components/<name>/`:
- `<name>.ts`: component class. Imports Material modules directly in `imports: []`.
- `<name>.html`: template.
- `<name>.scss`: styles.
- `<name>.stories.ts`: Storybook stories.

## Styling rules
1. Use Material first. Import the Material component and set its variables on `:host` (for example `--mat-button-filled-container-color`). Look up token names in the installed package: `node_modules/@angular/material/<comp>/_*-theme.scss` or `grep -o "\-\-mat-<comp>[a-z-]*" node_modules/@angular/material/fesm2022/<comp>.mjs | sort -u`.
2. Use CSS only where tokens can't express the Figma value. Typical cases: solid hover and active colours where Material uses state-layer overlays, 2px inset focus rings, and icon colour via `mask` with `background-color: currentColor`.
3. Set state-layer opacities to 0 when Figma uses solid colours, so the CSS colours take effect.
4. Icons are white SVG files in `public/assets/icons/`. Do not use `src/assets`: Storybook doesn't serve it. Don't redraw or substitute icons.
5. Inline elements ignore `width` and `height`. Make icon spans `display: block`.
6. Keep token names in `:host` as CSS custom properties. Don't put literal colours in templates.

## Stories
- Title: `Components/<Name>`. Tag `autodocs`.
- Show source in Docs with raw imports (see `primary-button.stories.ts`):
  ```ts
  import componentTemplate from './<name>.html?raw';
  import componentStyles from './<name>.scss?raw';
  import componentClass from './<name>.ts?raw';
  ```
  Declared in `src/raw-imports.d.ts`. Keep the source in sync automatically, never by copying.
- One story per meaningful state: default, each variant, disabled, loading.

## Verify before reporting done
1. `npx ng build` passes.
2. `npx storybook build -o storybook-static --quiet` passes.
3. Serve `storybook-static` on a local port and check each story in a headless browser: computed height, background, text colour, icon colour, and no console or 4xx errors. Compare against the Figma values.
4. Keep the check scripts in the session scratchpad, not the repo.

## Git
- Confirm with the user before any push or PR. The Stop hook asks for a push; that does not count as approval.
- Commit with the user's identity (`ianslattery`) and end the message with the attribution lines from the session.
- Push to `main` only after approval. Check the Pages run afterwards with `gh api repos/ianslattery/UI_library_claude/actions/runs`.
- No PR unless asked.

## Preview before push
Publish a preview artifact of the built states (embedded screenshots from the Storybook build) and show the user before pushing. Update the same artifact URL when the component changes.
