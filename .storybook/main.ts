import type { StorybookConfig } from '@storybook/nextjs-vite'

import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const rootPath = (relativePath = '.') =>
  fileURLToPath(new URL(`../${relativePath}`, import.meta.url))

const srcPath = (relativePath = '.') =>
  fileURLToPath(new URL(`../src/${relativePath}`, import.meta.url))

const nextConfigPath = rootPath('next.config.mjs')
const publicPath = rootPath('public')
const themePath = srcPath('theme')

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-themes',
    '@storybook/addon-vitest',
  ],
  core: {
    disableProjectJson: true,
    disableTelemetry: true,
  },
  features: {
    viewport: true,
  },
  framework: {
    name: '@storybook/nextjs-vite',
    options: {
      nextConfigPath,
    },
  },
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
  staticDirs: existsSync(publicPath) ? ['../public'] : [],
  stories: [
    '../src/stories/**/*.docs.mdx',
    '../src/components/**/*.docs.mdx',
    '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      exclude: ['**/*.stories.tsx', '**/.storybook/preview.tsx'],
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
    },
  },
  async viteFinal(config) {
    const inheritedAliases = Array.isArray(config.resolve?.alias)
      ? config.resolve.alias
      : Object.entries(config.resolve?.alias ?? {}).map(([find, replacement]) => ({
          find,
          replacement,
        }))

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: [
          { find: '@/components', replacement: srcPath('components') },
          { find: '@/constant', replacement: srcPath('app/constant/index.ts') },
          { find: '@/hoc', replacement: srcPath('app/hoc/index.ts') },
          {
            find: '@/internationalization',
            replacement: srcPath('internationalization/index.ts'),
          },
          { find: '@/providers', replacement: srcPath('providers/index.ts') },
          { find: '@/storybook/utils', replacement: srcPath('utils/storybook') },
          { find: '@/storybook', replacement: srcPath('utils/storybook') },
          { find: '@/theme', replacement: themePath },
          { find: '@/types', replacement: srcPath('types/index.ts') },
          { find: '@/ui', replacement: srcPath('components/ui') },
          { find: '@/utils/storybook', replacement: srcPath('utils/storybook') },
          { find: '@/utils', replacement: srcPath('utils') },
          { find: '@', replacement: srcPath() },
          ...inheritedAliases,
        ],
      },
    }
  },
}

export default config
