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
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...(config.resolve?.alias ?? {}),
          '@/components': srcPath('components'),
          '@/constant': srcPath('app/constant/index.ts'),
          '@/hoc': srcPath('app/hoc/index.ts'),
          '@/internationalization': srcPath('internationalization/index.ts'),
          '@/providers': srcPath('providers/index.ts'),
          '@/storybook': srcPath('utils/storybook'),
          '@/storybook/utils': srcPath('utils/storybook'),
          '@/theme': themePath,
          '@/types': srcPath('types/index.ts'),
          '@/ui': srcPath('components/ui'),
          '@/utils': srcPath('utils'),
          '@/utils/storybook': srcPath('utils/storybook'),
          '@': srcPath(),
        },
      },
    }
  },
}

export default config
