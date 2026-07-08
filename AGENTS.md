# AGENTS.md — Chakra UI v3 Coding Standards

Instructions for AI coding agents working in this codebase. This project uses **Chakra UI v3**. Do not generate Chakra UI v2 syntax under any circumstances — v2 patterns are the most common failure mode because most training data predates v3.

---

## 1. Version guardrails (read first)

Chakra UI v3 is a near-complete API rewrite. If you are unsure whether a pattern is v2 or v3, assume it changed.

### ✅ Do

- Use `createSystem` + `defineConfig` for theming
- Use compound (namespace) components: `Dialog.Root`, `Select.Root`, `Menu.Root`, `Field.Root`
- Use `colorPalette` for component colouring
- Use `gap` for spacing in `Stack`, `HStack`, `VStack`
- Use plain boolean props: `disabled`, `open`, `invalid`, `required`, `readOnly`, `loading`
- Use `asChild` for polymorphic rendering
- Use `next-themes` (via the ColorMode snippet) for dark mode

### ❌ Don't

- ❌ `extendTheme` — removed. Use `createSystem(defaultConfig, customConfig)`
- ❌ `colorScheme` prop — renamed to `colorPalette`
- ❌ `is*` boolean props (`isOpen`, `isDisabled`, `isInvalid`, `isLoading`) — all renamed (`open`, `disabled`, `invalid`, `loading`)
- ❌ `spacing` prop on Stack — renamed to `gap`
- ❌ `Modal` — renamed to `Dialog`
- ❌ `FormControl` / `FormLabel` / `FormErrorMessage` — replaced by `Field.Root` / `Field.Label` / `Field.ErrorText`
- ❌ `Divider` — renamed to `Separator`
- ❌ `Collapse` — renamed to `Collapsible`
- ❌ `Show` / `Hide` components — removed. Use `hideFrom` / `hideBelow` style props
- ❌ `@chakra-ui/icons` — removed. Use `lucide-react` or `react-icons`, wrapped in `<Icon>`
- ❌ `useColorMode` / `useColorModeValue` from Chakra core — colour mode now lives in `next-themes` via snippets
- ❌ `useToast` — replaced by `createToaster` / `toaster.create`
- ❌ `as` prop for component polymorphism on interactive components — prefer `asChild`
- ❌ Installing `@emotion/styled` or `framer-motion` — v3 no longer depends on them. Only `@chakra-ui/react` and `@emotion/react` are needed

---

## 2. Setup and Provider

### ✅ Do

```tsx
// app/providers.tsx
"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { system } from "@/theme"           // your createSystem output
import { ColorModeProvider } from "@/components/ui/color-mode" // snippet

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ChakraProvider>
  )
}
```

- `ChakraProvider` **requires** a `value` prop (the system). Pass `defaultSystem` if there is no custom theme.
- In Next.js App Router, providers must be in a `"use client"` file.
- Prefer generating scaffolding via the CLI snippets: `npx @chakra-ui/cli snippet add` (provider, color-mode, toaster, tooltip, etc.). If snippets exist in `components/ui/`, import from there rather than reimplementing.

### ❌ Don't

```tsx
// ❌ v2 — invalid in v3
<ChakraProvider theme={theme}>
```

---

## 3. Theming: tokens and semantic tokens

Every token value must be wrapped in `{ value: ... }`. This is the single most common v3 syntax error.

### ✅ Do

```ts
// theme.ts
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50:  { value: "#e6f2ff" },
          500: { value: "#0066cc" },
          900: { value: "#00264d" },
        },
      },
      fonts: {
        heading: { value: "'Inter Variable', sans-serif" },
      },
    },
    semanticTokens: {
      colors: {
        "bg.canvas": {
          value: { base: "{colors.gray.50}", _dark: "{colors.gray.950}" },
        },
        "brand.solid": {
          value: { base: "{colors.brand.500}", _dark: "{colors.brand.400}" },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
```

- Reference other tokens with `{colors.brand.500}` template syntax.
- Semantic tokens handle light/dark via `base` / `_dark` keys — this is the preferred way to theme for colour mode, not conditional logic in components.
- To make `colorPalette="brand"` work, define the full scale (50–950) plus, ideally, semantic slots (`solid`, `contrast`, `fg`, `muted`, `subtle`, `emphasized`, `focusRing`).
- After changing the theme, regenerate types: `npx @chakra-ui/cli typegen ./theme.ts`

### ❌ Don't

```ts
// ❌ v2 — raw values without { value }, extendTheme
const theme = extendTheme({
  colors: { brand: { 500: "#0066cc" } },
})
```

- ❌ Don't hardcode hex values or raw pixel values in component props when a token exists. Use `bg="bg.canvas"`, `color="fg.muted"`, `p="4"`.
- ❌ Don't build one-off dark-mode ternaries in components when a semantic token would do.

---

## 4. Component composition (namespace pattern)

v3 components are compound. Import the namespace and compose the parts explicitly.

### ✅ Do

```tsx
import { Dialog, Portal, Button, CloseButton } from "@chakra-ui/react"

<Dialog.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
  <Dialog.Trigger asChild>
    <Button variant="outline">Open</Button>
  </Dialog.Trigger>
  <Portal>
    <Dialog.Backdrop />
    <Dialog.Positioner>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Title</Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>...</Dialog.Body>
        <Dialog.Footer>
          <Dialog.ActionTrigger asChild>
            <Button variant="ghost">Cancel</Button>
          </Dialog.ActionTrigger>
          <Button colorPalette="brand">Save</Button>
        </Dialog.Footer>
        <Dialog.CloseTrigger asChild>
          <CloseButton size="sm" />
        </Dialog.CloseTrigger>
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
</Dialog.Root>
```

Key state-callback pattern: controlled components use `open` / `onOpenChange={(e) => ...e.open}`, `value` / `onValueChange={(e) => ...e.value}`, `checked` / `onCheckedChange`. Callbacks receive a **details object**, not the raw value.

### Forms

```tsx
import { Field, Input } from "@chakra-ui/react"

<Field.Root invalid={!!errors.email} required>
  <Field.Label>
    Email <Field.RequiredIndicator />
  </Field.Label>
  <Input value={email} onChange={(e) => setEmail(e.target.value)} />
  <Field.HelperText>We'll never share it.</Field.HelperText>
  <Field.ErrorText>{errors.email}</Field.ErrorText>
</Field.Root>
```

### Select (collection-based)

```tsx
import { Select, createListCollection, Portal } from "@chakra-ui/react"

const frameworks = createListCollection({
  items: [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
  ],
})

<Select.Root collection={frameworks} onValueChange={(e) => setValue(e.value)}>
  <Select.HiddenSelect />
  <Select.Label>Framework</Select.Label>
  <Select.Control>
    <Select.Trigger>
      <Select.ValueText placeholder="Select framework" />
    </Select.Trigger>
    <Select.IndicatorGroup>
      <Select.Indicator />
    </Select.IndicatorGroup>
  </Select.Control>
  <Portal>
    <Select.Positioner>
      <Select.Content>
        {frameworks.items.map((item) => (
          <Select.Item item={item} key={item.value}>
            {item.label}
            <Select.ItemIndicator />
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Positioner>
  </Portal>
</Select.Root>
```

### ❌ Don't

- ❌ `<Select>` with plain `<option>` children (v2 style) — v3 `Select` is collection-based. For a truly simple case use `NativeSelect.Root` + `NativeSelect.Field`.
- ❌ Guess sub-component names. If unsure of a part name (`Positioner`, `Backdrop`, `ItemIndicator`), check the docs/snippet rather than inventing one.
- ❌ Skip `Portal` around overlay content (Dialog, Select, Menu, Tooltip, Popover) — z-index and clipping bugs follow.

---

## 5. Styling props and conditions

### ✅ Do

```tsx
<Box
  bg="bg.subtle"
  p="4"
  borderRadius="l2"
  _hover={{ bg: "bg.emphasized" }}
  _dark={{ borderColor: "whiteAlpha.300" }}
  hideBelow="md"
  css={{ "--custom-var": "value" }}   // escape hatch for raw CSS
/>
```

- Responsive values: object syntax `fontSize={{ base: "sm", md: "md" }}` or array syntax.
- Text truncation: `truncate` (single line) or `lineClamp={2}` — not `isTruncated` / `noOfLines`.
- Use the `chakra()` factory for styling third-party or HTML elements: `const Custom = chakra("section", { base: { p: 4 } })`.
- For repeated inline style objects, use `defineStyle`/recipes rather than copy-pasting prop sets.

### ❌ Don't

- ❌ `sx` prop — replaced by `css`
- ❌ `styleConfig` / `multiStyleConfig` — replaced by recipes and slot recipes
- ❌ `apply` prop or `textStyle` misuse from v2 — v3 `textStyle` works, but define text styles in the theme config
- ❌ Mixing raw CSS-in-JS libs (styled-components, emotion `styled`) into components — stay in Chakra's system

---

## 6. Recipes (component variants)

Use recipes for reusable variants instead of wrapper components with hardcoded props.

### ✅ Do

```ts
// theme: single-part
import { defineRecipe } from "@chakra-ui/react"

const buttonRecipe = defineRecipe({
  base: { fontWeight: "semibold", borderRadius: "l2" },
  variants: {
    visual: {
      solid: { bg: "colorPalette.solid", color: "colorPalette.contrast" },
      outline: { borderWidth: "1px", borderColor: "colorPalette.solid" },
    },
    size: {
      sm: { px: "3", h: "8", textStyle: "sm" },
      lg: { px: "5", h: "12", textStyle: "md" },
    },
  },
  defaultVariants: { visual: "solid", size: "sm" },
})

export default buttonRecipe
// lives at components/Button/Button.recipe.ts — import it into theme/index.ts to register
// under theme.recipes / theme.slotRecipes in defineConfig
```

- Multi-part components use `defineSlotRecipe` with a `slots` array, named `<ComponentName>.slot-recipe.ts`.
- Inside recipes, use `colorPalette.*` virtual tokens so `colorPalette` prop works.
- Recipe files live inside the owning component's folder (see [Folder structure](#folder-structure)), not in a shared `theme/recipes/` directory — colocate the recipe with the component it styles, and import it into `theme/index.ts` purely for registration.

### ❌ Don't

- ❌ Define recipe logic inline inside the component function/JSX — extract it to `<ComponentName>.recipe.ts` even when it's colocated in the same folder, so variants stay typed and reusable.
- ❌ Recreate a themable component when overriding the built-in recipe (`theme.recipes.button`) would do.

---

## 7. Colour mode (dark mode)

### ✅ Do

- Use the `color-mode` snippet (wraps `next-themes`): `useColorMode`, `useColorModeValue`, `<ColorModeButton />` imported from `@/components/ui/color-mode`.
- Prefer **semantic tokens** over `useColorModeValue` — components should read `bg="bg.canvas"` and stay ignorant of the current mode.
- Use the `_dark` condition for one-off overrides.
- Guard against hydration mismatch: the snippet's `ClientOnly` wrapper exists for mode-dependent UI like the toggle button.

### ❌ Don't

- ❌ Import `useColorMode` from `@chakra-ui/react` — it is not exported there in v3.
- ❌ Scatter `isDark ? x : y` ternaries — that logic belongs in semantic tokens.

---

## 8. Toasts

### ✅ Do

```tsx
// components/ui/toaster.tsx comes from the snippet
import { toaster } from "@/components/ui/toaster"

toaster.create({
  title: "Saved",
  description: "Your changes were stored.",
  type: "success",
})
```

Mount `<Toaster />` once, near the app root.

### ❌ Don't

- ❌ `const toast = useToast()` — v2 API, removed.

---

## 9. Accessibility (non-negotiable)

- Never remove focus outlines. If restyling, use `focusRing` props / `_focusVisible`, keeping a visible indicator with ≥3:1 contrast.
- Icon-only buttons must use `IconButton` with an `aria-label`.
- Use `Field.Root` for every form control so labels, helper text, and errors are wired via ARIA automatically — don't hand-roll `aria-describedby`.
- Keep semantic HTML: `asChild` onto real `<a>`/`<button>` elements; don't attach `onClick` to `Box` — use `Button`, `Link`, or `chakra("button")`.
- Colour tokens must meet WCAG 2.1 AA contrast (4.5:1 text, 3:1 UI) in **both** light and dark values of every semantic token.
- Respect reduced motion: gate non-essential animation behind `_motionReduce` / `prefers-reduced-motion`.

---

## 10. Tips & tricks (v3 idioms worth using)

### Token interpolation in composite values

Any style prop that takes a compound CSS value can reference theme tokens with `{}` syntax — use this instead of hardcoding:

```tsx
<Box
  border="1px solid {colors.border}"
  borderTop="2px dashed {colors.brand.500}"
  boxShadow="0 1px 3px {colors.blackAlpha.300}"
  outline="2px solid {colors.brand.focusRing}"
  css={{ borderBottom: "1px solid {colors.border.muted}" }}
/>
```

### Colour opacity modifier

Append `/<opacity>` to any colour token — no more `rgba()` or `transparentize`:

```tsx
<Box bg="brand.500/10" borderColor="border/50" />
<Button boxShadow="0 0 0 4px {colors.brand.500/30}">Focus glow</Button>
```

### Built-in semantic tokens — use before inventing your own

v3 ships a full semantic set that already adapts to dark mode:

- **Backgrounds:** `bg`, `bg.subtle`, `bg.muted`, `bg.emphasized`, `bg.panel`, `bg.inverted`, `bg.error` / `bg.warning` / `bg.success` / `bg.info`
- **Foregrounds:** `fg`, `fg.muted`, `fg.subtle`, `fg.inverted`, `fg.error`, etc.
- **Borders:** `border`, `border.muted`, `border.subtle`, `border.emphasized`, `border.error`

```tsx
<Box bg="bg.panel" borderWidth="1px" borderColor="border.muted" color="fg.muted" />
```

### Shadow scale

```tsx
<Card.Root shadow="sm" />        // xs, sm, md, lg, xl, 2xl, inner, inset
<Box shadow="md" _hover={{ shadow: "lg" }} transition="shadow 0.2s" />
```

Define custom elevations in `theme.tokens.shadows` (each wrapped in `{ value: ... }`), and note shadow values can interpolate colour tokens too: `{ value: "0 4px 12px {colors.brand.900/15}" }`.

### `colorPalette` virtual tokens — palette-agnostic components

Set the palette once; children resolve `colorPalette.*` automatically:

```tsx
<Box colorPalette="brand" bg="colorPalette.subtle" borderColor="colorPalette.muted">
  <Text color="colorPalette.fg">Swap "brand" for "red" and everything re-themes</Text>
  <Button bg="colorPalette.solid" color="colorPalette.contrast">Action</Button>
</Box>
```

### Focus rings without fighting CSS

```tsx
<Input focusRing="outside" focusRingColor="brand.solid" />
// focusRing: "outside" | "inside" | "mixed" | "none"
```

### Gradients (new syntax)

```tsx
// ❌ v2: bgGradient="linear(to-r, teal.500, blue.500)"
<Box bgGradient="to-r" gradientFrom="brand.400" gradientTo="brand.600" />

// Gradient text
<Heading bgGradient="to-r" gradientFrom="brand.400" gradientTo="purple.500" bgClip="text">
  Headline
</Heading>
```

### Layout micro-helpers people forget exist

```tsx
<Circle size="10" bg="bg.emphasized">GA</Circle>       // avatar-ish
<Square size="12" borderRadius="l2" />
<Center h="dvh">Centered</Center>
<AbsoluteCenter axis="both">Overlay label</AbsoluteCenter>
<Float placement="top-end" offset="1">                  {/* badge pinned to a corner */}
  <Circle size="4" bg="red.solid" />
</Float>
<Bleed inline="4">Escapes parent padding</Bleed>
<Box boxSize="8" />                                     // width + height in one prop
<AspectRatio ratio={16 / 9}><iframe /></AspectRatio>
```

### Separators between stack children

```tsx
<Stack separator={<Separator />} gap="4">...</Stack>
// or style-prop version on any container:
<Box divideY="1px" divideColor="border.muted">...</Box>
```

### Group and peer hover

```tsx
<Box className="group" role="group">
  <Text _groupHover={{ color: "brand.fg" }}>Lights up when parent is hovered</Text>
</Box>
```

### State-driven styling via data attributes

Compound components expose `data-state` — style states declaratively instead of tracking them in React:

```tsx
<Accordion.ItemTrigger _expanded={{ bg: "bg.emphasized" }} />
<Checkbox.Control _checked={{ borderColor: "brand.solid" }} />
<Link _current={{ fontWeight: "semibold", color: "brand.fg" }} />  // aria-current nav links
// also: _open, _closed, _selected, _invalid, _disabled, _highlighted
```

### Built-in enter/exit animations

Keyframe tokens ship out of the box — pair them with `_open` / `_closed`:

```tsx
<Dialog.Content
  animationName={{ _open: "fade-in, scale-in", _closed: "fade-out, scale-out" }}
  animationDuration="fast"
/>
<Box animationName="slide-from-top, fade-in" animationDuration="moderate" />
```

### `Show` and `For` render utilities

```tsx
<Show when={user} fallback={<Spinner />}>
  {(u) => <Text>{u.name}</Text>}
</Show>

<For each={items} fallback={<EmptyState.Root>...</EmptyState.Root>}>
  {(item) => <Card.Root key={item.id}>...</Card.Root>}
</For>
```

(Note: this `Show` is conditional rendering — unrelated to v2's removed responsive `Show`/`Hide`.)

### Targeting descendants with `css`

```tsx
<Button css={{ "& svg": { boxSize: "4", color: "fg.muted" } }}>
  <LuDownload /> Export
</Button>
```

### `layerStyle` and `textStyle` shorthands

```tsx
<Box layerStyle="fill.subtle" colorPalette="brand" p="4" />   // fill.*, outline.*, indicator.*
<Text textStyle="sm" color="fg.muted">Caption</Text>
```

Define custom ones in `theme.textStyles` / `theme.layerStyles` when a prop combo repeats three or more times.

### Icons in v3

```tsx
import { Icon } from "@chakra-ui/react"
import { LuHeart } from "react-icons/lu"

<Icon size="md" color="fg.muted"><LuHeart /></Icon>
<IconButton aria-label="Like" variant="ghost"><LuHeart /></IconButton>  {/* icon as children, not `icon` prop */}
```

### Responsive: props first, hooks second

```tsx
<Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="6" />
```

Reach for `useBreakpointValue` only when *behaviour* (not styling) changes per breakpoint — it re-renders on resize and can flash on SSR.

---

## 11. Project conventions

- **Imports:** everything from `@chakra-ui/react` (no per-component packages), snippets from `@/components/ui/*`.
- **TypeScript:** run CLI typegen after theme changes; never `as any` around style props — fix the token instead.
- **Layout primitives:** `Stack`/`HStack`/`VStack` with `gap` for 1-D layout, `Grid`/`SimpleGrid` for 2-D, `Flex` when you need raw flexbox control. Don't nest Stacks three deep when one Grid would do.
- **Spacing scale:** stick to theme spacing tokens (`p="4"`, `gap="6"`); no arbitrary `p="13px"`.
- **File structure:** no component lives outside a folder — even a one-line component gets `components/<ComponentName>/`. Recipes, slot recipes, CSS modules, private sub-components, and tests are colocated inside that folder, not scattered into shared `theme/` or `__tests__` trees. Semantic tokens stay in `theme/semantic-tokens.ts`; the system is composed in `theme/index.ts`.
- **Storybook-only components:** components used only by Storybook stories live under `components/storybook/`, not in the main component namespace. Promote them into `components/<ComponentName>/` only when they become reusable app or library components.

### Folder structure

Follow the existing layout — one folder per component under `src/components/`, PascalCase named, with every folder exposing a barrel `index.ts` and a main file that matches the folder name exactly:

```text
src/
  app/                        # Next.js App Router routes only — no component logic here
    layout.tsx
    page.tsx
  components/
    ui/                       # Chakra CLI snippets (provider, color-mode, toaster, ...) — don't hand-roll these
      provider.tsx
      color-mode.tsx
    storybook/                # components used only by Storybook stories
    <ComponentName>/          # PascalCase, one folder per component — no loose component files
      index.ts                # barrel: `export { <ComponentName> } from "./<ComponentName>"`
      <ComponentName>.tsx     # main implementation — filename matches the folder name
      <ComponentName>.recipe.ts        # defineRecipe, colocated (single-part components)
      <ComponentName>.slot-recipe.ts   # defineSlotRecipe, colocated (multi-part components)
      <ComponentName>.module.css       # CSS module, only for the odd case Chakra props can't cover
      <ComponentName>.test.tsx         # unit/behavior tests, colocated with the component
      <ComponentName>.stories.tsx
      components/              # sub-components used only by this component — not shared, no own folder needed
        <ComponentName>Item.tsx
      examples/
        <component-name>-basic.tsx
        <component-name>-with-<variant>.tsx
  theme/
    index.ts                  # createSystem(defaultConfig, config) composition — imports recipes from component folders
    colors.ts
    fonts.ts
    semantic-tokens.ts
  hooks/                      # shared hooks, kebab-case filenames matching the hook name
  utils/                      # framework-agnostic helpers, kebab-case filenames
  stories/                    # cross-cutting Storybook docs (Overview, Typography, design-system foundations)
  styles/
```

- Every component folder must have an `index.ts` barrel — import consumers use `@/components/<ComponentName>`, never a deep path into the folder's internals.
- The main component file is named after its folder (`Button/Button.tsx`, not `Button/index.tsx` for the implementation) — `index.ts` only re-exports.
- Recipes and slot recipes are colocated with the component they style (`<ComponentName>.recipe.ts` / `<ComponentName>.slot-recipe.ts`), then imported into `theme/index.ts` purely for registration — don't centralize them in a shared `theme/recipes/` folder.
- Reach for a `<ComponentName>.module.css` file only when a style genuinely can't be expressed with Chakra props/recipes/`css`; keep it colocated, never in a shared `styles/` module tree.
- Sub-components used exclusively by one component (list items, internal rows, a private header) live under that component's own `components/` subfolder — they don't get a top-level `src/components/` folder of their own.
- Test files are colocated as `<ComponentName>.test.tsx` beside the implementation, not under a parallel `__tests__/` tree.
- Keep example files kebab-case and prefixed with the component name (`accordion-with-icon.tsx`), so they sort together and match the story's `Example` import naming.
- Don't put implementation code inside `examples/` — those files are documentation/demo snippets only.
- New shared, non-Chakra UI pieces (data fetching, formatting, cross-component logic) belong in `hooks/` or `utils/`, not inside a component folder, unless they're only ever used by that one component.

---

## 12. Quick v2 → v3 rename table

| v2 | v3 |
|---|---|
| `extendTheme` | `createSystem(defaultConfig, config)` |
| `<ChakraProvider theme={...}>` | `<ChakraProvider value={system}>` |
| `colorScheme` | `colorPalette` |
| `spacing` (Stack) | `gap` |
| `isOpen` / `onClose` | `open` / `onOpenChange` |
| `isDisabled`, `isInvalid`, `isLoading` | `disabled`, `invalid`, `loading` |
| `Modal.*` | `Dialog.*` |
| `FormControl` | `Field.Root` |
| `FormErrorMessage` | `Field.ErrorText` |
| `Divider` | `Separator` |
| `Collapse` | `Collapsible.Root` |
| `sx` | `css` |
| `noOfLines` | `lineClamp` |
| `isTruncated` | `truncate` |
| `useToast` | `toaster.create` (snippet) |
| `useColorModeValue` (core) | semantic tokens / color-mode snippet |
| `@chakra-ui/icons` | `lucide-react` / `react-icons` + `<Icon>` |
| `Show` / `Hide` | `hideFrom` / `hideBelow` |

---

## 13. Testing and validation patterns

Use the lightest check that matches the risk of the change, and always report what you ran.
Examples below use `npm run` to match the README; Yarn v1 equivalents are `yarn lint`, `yarn doctor --scope changed`, `yarn build`, etc.

### Commands

- `npm run lint` — run ESLint across the project. Use this for TypeScript, React, import-order, React Hooks, Next.js Core Web Vitals, and Prettier-backed style checks.
- `npm run lint:fix` — use only when you intend to apply automatic ESLint fixes. Review the diff afterward because import and object sorting can move code around.
- `npm run format:check` — verify Prettier formatting without writing files.
- `npm run build` — run after changes that affect Next.js routing, server/client boundaries, theme setup, package versions, or shared TypeScript types.
- `npm run doctor` — run React Doctor for React-specific health checks, dead-code analysis, dependency/import problems, circular imports, and issues ESLint may not catch.
- `npm run doctor -- --scope changed` — prefer this for focused feature work when the branch is large and you only need diagnostics for changed code.
- `npm run doctor -- --staged` — use this before committing staged UI or React component changes.

### Patterns

- Start with `npm run lint` for almost every code change. Fix real issues rather than weakening rules or adding broad disables.
- Use React Doctor as a second pass for React architecture and code-health issues, especially after adding hooks, shared components, providers, barrel exports, or dependency changes.
- For component behavior, prefer Testing Library patterns that assert what users can see or do: accessible names, roles, keyboard flow, form errors, and state changes.
- For Chakra UI components, test behavior and accessibility rather than implementation details. Avoid assertions tied to generated class names or DOM internals from Chakra/Ark.
- For Storybook-backed components, keep stories current when props, visual states, or examples change; run `npm run build-storybook` when story structure or preview configuration changes.
- When a check fails because of unrelated existing issues, capture the command and the first relevant failure in the final response instead of silently skipping validation.

### Don't

- ❌ Don't add `eslint-disable` comments unless the rule is genuinely wrong for that exact line; prefer a narrow disable with a short reason.
- ❌ Don't use snapshots as the main assertion for interactive React components.
- ❌ Don't treat `npm run lint:fix` as a substitute for reading the resulting diff.
- ❌ Don't ignore React Doctor warnings about circular imports, unused exports, duplicate dependencies, or hook misuse without explaining why.

---

## 14. Self-check before finishing any task

1. Zero `is*` boolean props anywhere in the diff.
2. Zero `extendTheme`, `colorScheme`, `sx`, `useToast` occurrences.
3. All token definitions wrapped in `{ value: ... }`.
4. Overlay components wrapped in `Portal` with full part composition.
5. Colours come from semantic tokens, not hex codes or mode ternaries.
6. Every form input sits inside `Field.Root`; every icon button has `aria-label`.
7. Controlled component callbacks destructure the details object (`e.open`, `e.value`).
