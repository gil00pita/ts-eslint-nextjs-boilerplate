import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import { Box } from '@chakra-ui/react'
import type { Meta } from '@storybook/nextjs-vite'

const meta = {
  title: 'Components / Alert',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export default meta

export const Playground = createComponentPlayground('Alert')

export { AlertBasic as Basic } from './examples/alert-basic'
export { AlertClosedComponent as ClosedComponent } from './examples/alert-closed-component'
export { AlertExplorerDemo as ExplorerDemo } from './examples/alert-explorer-demo'
export { AlertSizeTable as SizeTable } from './examples/alert-size-table'
export { AlertVariantTable as VariantTable } from './examples/alert-variant-table'
export { AlertWithButtons as WithButtons } from './examples/alert-with-buttons'
export { AlertWithCloseButton as WithCloseButton } from './examples/alert-with-close-button'
export { AlertWithColorPaletteOverride as WithColorPaletteOverride } from './examples/alert-with-color-palette-override'
export { AlertWithCustomIcon as WithCustomIcon } from './examples/alert-with-custom-icon'
export { AlertWithCustomization as WithCustomization } from './examples/alert-with-customization'
export { AlertWithDescription as WithDescription } from './examples/alert-with-description'
export { AlertWithSpinner as WithSpinner } from './examples/alert-with-spinner'
export { AlertWithStatus as WithStatus } from './examples/alert-with-status'
export { AlertWithVariants as WithVariants } from './examples/alert-with-variants'
