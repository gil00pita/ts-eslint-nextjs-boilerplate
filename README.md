# Lanify

Minimal Next.js App Router starter wired up with Chakra UI.

## Requirements

- Node.js 20.9.0 or newer
- npm

## Development

```bash
npm install
npm run dev
```

## Rebranding the design system

This project treats Chakra UI as the implementation engine and this repository as
the brand-specific design system layer. A rebrand should not start by changing
component props one by one. Start with brand inputs, translate them into tokens,
then validate the result across Storybook components.

### What a product designer needs first

Before changing tokens or recipes, collect these inputs:

- Brand name, product name, and the business context for the rebrand.
- Target users, key jobs to be done, and the product surfaces they use most.
- Brand personality in 3-5 words, plus words the brand should avoid.
- Existing brand assets: logo files, color palette, typography rules, icon style,
  illustration style, photography direction, and voice guidelines.
- Accessibility expectations, including required WCAG level and any sector rules.
- Main product environments: marketing site, authenticated app, admin tools,
  mobile web, dashboards, forms, charts, notifications, and transactional flows.
- Competitors or references to differentiate from, plus references to learn from.
- Functional tone for UI states: success, warning, danger, info, loading, empty,
  disabled, focus, selected, and active.
- Technical constraints: fonts that can be licensed, browser support, dark mode
  support, theming requirements, and whether multiple brands must coexist.

### Product design prompt

Use this prompt to generate a rebrand direction before editing the system:

```text
You are a senior product designer rebranding a Chakra UI v3 design system.

Brand:
- Name: [brand or product name]
- Category: [industry or product category]
- Audience: [primary users and their context]
- Personality: [3-5 adjectives]
- Avoid: [tones, styles, or patterns to avoid]

Inputs:
- Logo: [link or description]
- Existing colors: [hex values or notes]
- Typography: [current or desired fonts]
- Product surfaces: [dashboard, forms, marketing, mobile web, etc.]
- Accessibility target: [WCAG AA, AAA, internal standard]
- Competitors and references: [links or notes]

Task:
Create a brand direction that can be implemented as Chakra UI v3 tokens,
semantic tokens, and recipes. The design should feel distinctive, usable,
accessible, and appropriate for repeated product work rather than only a
marketing page.

Please deliver:
1. Brand positioning summary in one paragraph.
2. UI personality principles with do and don't guidance.
3. Color system:
   - brand palette from 50 to 950
   - gray palette from 50 to 950
   - semantic roles for bg, fg, border, success, warning, error, and info
   - light and dark mode guidance
4. Typography system:
   - font recommendations
   - heading, body, label, caption, and code usage
   - weight and line-height guidance
5. Shape, spacing, shadow, and motion guidance.
6. Component recipe guidance for Button, Input, Badge, Card, Dialog, Menu,
   Avatar, Alert, Tabs, Table, and Tooltip.
7. Storybook validation plan:
   - foundations pages to update
   - component stories to inspect
   - accessibility checks to run
8. Engineering handoff:
   - Chakra token names
   - semantic token names
   - recipe changes
   - risks and open questions

Constraints:
- Use Chakra UI v3 patterns only.
- Token values must be expressible with { value: ... }.
- Prefer semantic tokens over one-off component colors.
- Use colorPalette-aware recipes for reusable component styling.
- Include contrast notes for light and dark mode.
```

### Implementation approach

1. Define the raw brand values first.
   Update color scales, fonts, radii, shadows, and motion values in the theme
   layer. Chakra token values must use `{ value: ... }`.

2. Map raw values into semantic tokens.
   Product components should use names like `bg`, `bg.panel`, `fg`,
   `fg.muted`, `border`, `brand.solid`, `brand.fg`, and `brand.focusRing`
   instead of hardcoded hex values.

3. Keep recipes separate, but colocated with their component.
   Use `src/components/<ComponentName>/<ComponentName>.recipe.ts` for
   single-part components and
   `src/components/<ComponentName>/<ComponentName>.slot-recipe.ts` for
   multi-part components. Register them from the theme composition file.

4. Keep Storybook visible by ownership.
   Put reusable component stories beside the component in
   `src/components/<ComponentName>/<ComponentName>.stories.tsx`. Use
   `src/stories/` for foundations, guidelines, release notes, and other
   cross-system documentation.

5. Validate the rebrand in Storybook.
   Review foundations first, then common product flows: forms, dialogs, menus,
   alerts, empty states, loading states, tables, navigation, and dashboards.
   Check light mode, dark mode, keyboard focus, disabled states, and contrast.

6. Run the project checks.

```bash
npm run lint
npm run format:check
npm run build
```

If the rebrand changes Chakra theme types, regenerate Chakra types with the CLI
before final validation.
