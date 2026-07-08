import type { Meta } from '@storybook/react-vite'

import { Box } from '@chakra-ui/react'

import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'

export default {
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
  title: 'Disclosure / Breadcrumb',
} satisfies Meta

export const Playground = createComponentPlayground('Breadcrumb')

export { BreadcrumbBasic as Basic } from './examples/breadcrumb-basic'
export { BreadcrumbSizeTable as Sizes } from './examples/breadcrumb-size-table'
export { BreadcrumbVariantTable as Variants } from './examples/breadcrumb-variant-table'
export { BreadcrumbWithEllipsis as Ellipsis } from './examples/breadcrumb-with-ellipsis'
export { BreadcrumbWithIcon as Icon } from './examples/breadcrumb-with-icon'
export { BreadcrumbWithMenu as Menu } from './examples/breadcrumb-with-menu'
export { BreadcrumbWithSeparator as Separator } from './examples/breadcrumb-with-separator'
