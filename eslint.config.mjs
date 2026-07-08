import eslint from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import nextVitals from 'eslint-config-next/core-web-vitals'
import perfectionist from 'eslint-plugin-perfectionist'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import reactHooks from 'eslint-plugin-react-hooks'
import { defineConfig } from 'eslint/config'
import fs from 'fs'
import path from 'path'

// Resolve candidate tsconfig locations (relative to process.cwd())
const candidates = [
  path.resolve(process.cwd(), 'tsconfig.json'),
  path.resolve(process.cwd(), 'src', 'tsconfig.json'),
]

const foundTsconfig = candidates.find((p) => fs.existsSync(p))

export default defineConfig([
  ...nextVitals,
  eslint.configs.recommended,
  {
    ignores: ['node_modules', 'build', 'dist', 'coverage', 'storybook-static'],
  },

  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2023,
      globals: {
        __dirname: 'readonly',
        afterEach: 'readonly',
        beforeEach: 'readonly',
        clearInterval: 'readonly',
        clearTimeout: 'readonly',
        console: 'readonly',
        describe: 'readonly',
        document: 'readonly',
        expect: 'readonly',
        fetch: 'readonly',
        HTMLButtonElement: 'readonly',
        HTMLElement: 'readonly',
        HTMLInputElement: 'readonly',
        it: 'readonly',
        jest: 'readonly',
        module: 'readonly',
        MutationObserver: 'readonly',
        navigator: 'readonly',
        process: 'readonly',
        require: 'readonly',
        setInterval: 'readonly',
        setTimeout: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        window: 'readonly',
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      perfectionist,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-unused-expressions': [
        'warn',
        { allowShortCircuit: true, allowTernary: true },
      ],
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../*', '../../*'],
              message:
                'Use absolute imports (e.g. "@/components/...") instead of relative parent imports.',
            },
          ],
        },
      ],
      'no-undef': 'error',
      'no-unused-vars': 'off',
      // perfectionist/unicorn rules (kept from your original)
      'perfectionist/sort-enums': 'error',
      'perfectionist/sort-exports': 'error',
      'perfectionist/sort-imports': [
        'error',
        {
          customGroups: [],
          environment: 'node',
          fallbackSort: { type: 'unsorted' },
          groups: [
            'type-import',
            ['value-builtin', 'value-external'],
            'type-internal',
            'value-internal',
            ['type-parent', 'type-sibling', 'type-index'],
            ['value-parent', 'value-sibling', 'value-index'],
            'ts-equals-import',
            'unknown',
          ],
          ignoreCase: true,
          internalPattern: ['^~/.+', '^@/.+', '^#.+'],
          maxLineLength: undefined,
          newlinesBetween: 1,
          newlinesInside: 0,
          order: 'asc',
          partitionByComment: false,
          partitionByNewLine: false,
          sortBy: 'path',
          specialCharacters: 'keep',
          type: 'alphabetical',
          useExperimentalDependencyDetection: true,
        },
      ],
      'perfectionist/sort-jsx-props': 'error',
      'perfectionist/sort-named-imports': 'error',
      'perfectionist/sort-objects': [
        'error',
        {
          customGroups: [
            {
              elementNamePattern: '^base$',
              groupName: 'base',
              selector: 'property',
            },
            {
              elementNamePattern: '^(50|100|200|300|400|500|600|700|800|900|950)$',
              groupName: 'chakra-color-scale',
              selector: 'property',
              type: 'natural',
            },
            {
              elementNamePattern: '^xs$',
              groupName: 'size-xs',
              selector: 'property',
            },
            {
              elementNamePattern: '^sm$',
              groupName: 'size-sm',
              selector: 'property',
            },
            {
              elementNamePattern: '^md$',
              groupName: 'size-md',
              selector: 'property',
            },
            {
              elementNamePattern: '^lg$',
              groupName: 'size-lg',
              selector: 'property',
            },
            {
              elementNamePattern: '^xl$',
              groupName: 'size-xl',
              selector: 'property',
            },
            {
              elementNamePattern: '^2xl$',
              groupName: 'size-2xl',
              selector: 'property',
            },
            {
              elementNamePattern: '^3xl$',
              groupName: 'size-3xl',
              selector: 'property',
            },
            {
              elementNamePattern: '^4xl$',
              groupName: 'size-4xl',
              selector: 'property',
            },
            {
              elementNamePattern: '^5xl$',
              groupName: 'size-5xl',
              selector: 'property',
            },
          ],
          groups: [
            'unknown',
            'chakra-color-scale',
            'base',
            'size-xs',
            'size-sm',
            'size-md',
            'size-lg',
            'size-xl',
            'size-2xl',
            'size-3xl',
            'size-4xl',
            'size-5xl',
          ],
          ignoreCase: true,
          order: 'asc',
          type: 'alphabetical',
        },
      ],

      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  {
    // The Storybook manager bundle (esbuild) doesn't apply the `viteFinal` `@/*`
    // alias config, so files it bundles must use relative imports.
    files: ['.storybook/manager.ts'],
    rules: {
      'no-restricted-imports': 'off',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ...(foundTsconfig
          ? {
              project: foundTsconfig,
              tsconfigRootDir: process.cwd(),
            }
          : {}),
        ecmaFeatures: { jsx: true },
      },
    },
  },

  prettierRecommended,
])
