import type { Preview, ReactRenderer } from '@storybook/react-vite'

import { ChakraProvider } from '@chakra-ui/react'
import { DocsContainer, type DocsContainerProps } from '@storybook/addon-docs/blocks'
import { withThemeByClassName } from '@storybook/addon-themes'
import { type FC, type PropsWithChildren, useEffect, useState } from 'react'
import { create } from 'storybook/theming'
import { INITIAL_VIEWPORTS } from 'storybook/viewport'

import { ColorModeProvider } from '@/components/ui/color-mode'
import { customBrandThemeSystem } from '@/theme'
import { colors } from '@/theme/colors'
import { fonts } from '@/theme/fonts'

const docsLightTheme = create({
  appBg: colors.common.white.value,
  appContentBg: colors.common.white.value,
  barBg: colors.common.white.value,
  barTextColor: colors.gray[950].value,
  fontBase: fonts.body.value,
  fontCode: fonts.mono.value,
  inputBg: colors.gray[50].value,
  inputBorder: colors.gray[100].value,
  textColor: colors.gray[950].value,
  base: 'light',
})

const docsDarkTheme = create({
  appBg: colors.gray[950].value,
  appContentBg: colors.gray[900].value,
  barBg: colors.gray[950].value,
  barTextColor: colors.common.white.value,
  fontBase: fonts.body.value,
  fontCode: fonts.mono.value,
  inputBg: colors.gray[900].value,
  inputBorder: colors.gray[700].value,
  textColor: colors.common.white.value,
  base: 'dark',
})

const getDocsTheme = () =>
  document.documentElement.classList.contains('dark') ? docsDarkTheme : docsLightTheme

const getColorMode = () => (document.documentElement.classList.contains('dark') ? 'dark' : 'light')

const StorybookProviders: FC<PropsWithChildren> = ({ children }) => {
  const [forcedTheme, setForcedTheme] = useState<'light' | 'dark'>(getColorMode)

  useEffect(() => {
    const root = document.documentElement
    const observer = new MutationObserver(() => {
      setForcedTheme(getColorMode())
    })

    observer.observe(root, {
      attributeFilter: ['class'],
      attributes: true,
    })

    return () => observer.disconnect()
  }, [])

  return (
    <ChakraProvider value={customBrandThemeSystem}>
      <ColorModeProvider forcedTheme={forcedTheme}>{children}</ColorModeProvider>
    </ChakraProvider>
  )
}

const ThemedDocsContainer: FC<PropsWithChildren<DocsContainerProps<ReactRenderer>>> = ({
  children,
  context,
}) => {
  const [docsTheme, setDocsTheme] = useState(getDocsTheme)

  useEffect(() => {
    const root = document.documentElement
    const observer = new MutationObserver(() => {
      setDocsTheme(getDocsTheme())
    })

    observer.observe(root, {
      attributeFilter: ['class'],
      attributes: true,
    })

    return () => observer.disconnect()
  }, [])

  return (
    <StorybookProviders>
      <DocsContainer context={context} theme={docsTheme}>
        {children}
      </DocsContainer>
    </StorybookProviders>
  )
}

export const parameters = {
  // Stories opt out with parameters.a11y.disable only for intentional, documented exceptions.
  a11y: {
    test: 'error',
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: colors.gray[900].value },
    ],
  },
  docs: {
    container: ThemedDocsContainer,
  },
  options: {
    storySort: {
      locales: '',
      method: 'alphabetical',
      order: [
        'Phenix UI',
        [
          'Overview',
          "What's New",
          'Getting Started',
          'Install',
          'About',
          'Brand Styles',
          [
            'Overview',
            'Available Components',
            'Color',
            'Icons',
            'Illustrations',
            'Motion',
            'Grid',
            'Spacing',
            'Radius',
            'Themes',
            'Typography',
          ],
          'Guidelines',
          ['Overview', 'Accessibility', 'Content', 'Patterns'],
        ],
        'Brand X',
        ['Overview', 'Styles', 'Patterns'],
        'Layout',
        'Typography',
        'Buttons',
        'Date and Time',
        'Forms',
        'Collections',
        'Overlays',
        'Disclosure',
        'Feedback',
        'Data Display',
        'Internationalization',
        'Utilities',
        'Charts',
        '*',
      ],
    },
  },
  viewport: {
    options: INITIAL_VIEWPORTS,
  },
}

export const decorators = [
  withThemeByClassName<ReactRenderer>({
    defaultTheme: 'light',
    themes: {
      dark: 'dark',
      light: 'light',
    },
  }),
  (Story: FC) => (
    <StorybookProviders>
      <Story />
    </StorybookProviders>
  ),
]

const preview: Preview = {
  decorators,
  parameters,
}

export default preview
