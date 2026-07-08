import type { Meta } from '@storybook/nextjs-vite'

import { Box } from '@chakra-ui/react'

import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'

const meta = {
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
  title: 'Components / Accordion',
} satisfies Meta

export default meta

export const Playground = createComponentPlayground('Accordion')

export { AccordionBasic as Basic } from './examples/accordion-basic'
export { AccordionControlled as Controlled } from './examples/accordion-controlled'
export { AccordionExplorerDemo as ExplorerDemo } from './examples/accordion-explorer-demo'
export { AccordionSizeTable as SizeTable } from './examples/accordion-size-table'
export { AccordionSizes as Sizes } from './examples/accordion-sizes'
export { AccordionVariantTable as VariantTable } from './examples/accordion-variant-table'
export { AccordionVariants as Variants } from './examples/accordion-variants'
export { AccordionWithActions as WithActions } from './examples/accordion-with-actions'
export { AccordionWithAvatar as WithAvatar } from './examples/accordion-with-avatar'
export { AccordionWithContext as WithContext } from './examples/accordion-with-context'
export { AccordionWithDisabledItem as WithDisabledItem } from './examples/accordion-with-disabled-item'
export { AccordionWithExpandedStyle as WithExpandedStyle } from './examples/accordion-with-expanded-style'
export { AccordionWithIcon as WithIcon } from './examples/accordion-with-icon'
export { AccordionWithMultiple as WithMultiple } from './examples/accordion-with-multiple'
export { AccordionWithSubtext as WithSubtext } from './examples/accordion-with-subtext'
