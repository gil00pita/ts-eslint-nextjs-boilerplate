import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Disclosure / Tabs',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Tabs')

export { TabsBasic as Basic } from './examples/tabs-basic'
export { TabsControlled as Controlled } from './examples/tabs-controlled'
export { TabsLazyMounted as LazyMounted } from './examples/tabs-lazy-mounted'
export { TabsNested as Nested } from './examples/tabs-nested'
export { TabsSizeTable as Sizes } from './examples/tabs-size-table'
export { TabsVariantTable as Variants } from './examples/tabs-variant-table'
export { TabsWithAnimation as WithAnimation } from './examples/tabs-with-animation'
export { TabsWithCustomIndicator as CustomIndicator } from './examples/tabs-with-custom-indicator'
export { TabsWithDisabledTab as DisabledTab } from './examples/tabs-with-disabled-tab'
export { TabsWithDynamicAdd as DynamicAdd } from './examples/tabs-with-dynamic-add'
export { TabsWithFitted as Fitted } from './examples/tabs-with-fitted'
export { TabsWithIndicator as Indicator } from './examples/tabs-with-indicator'
export { TabsWithLinks as LinkTabs } from './examples/tabs-with-links'
export { TabsWithManualActivation as ManualActivation } from './examples/tabs-with-manual-activation'
export { TabsWithResponsiveOrientation as ResponsiveOrientation } from './examples/tabs-with-responsive-orientation'
export { TabsWithStore as Store } from './examples/tabs-with-store'
export { TabsWithVertical as Vertical } from './examples/tabs-with-vertical'
