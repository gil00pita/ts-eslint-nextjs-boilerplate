import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Feedback / Skeleton',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Skeleton')

export { SkeletonBasic as Basic } from './examples/skeleton-basic'
export { SkeletonForFeed as Feed } from './examples/skeleton-for-feed'
export { SkeletonForText as Text } from './examples/skeleton-for-text'
export { SkeletonTextWithChildren as TextWithChildren } from './examples/skeleton-text-with-children'
export { SkeletonWithChildren as WithChildren } from './examples/skeleton-with-children'
export { SkeletonWithLoaded as WithLoaded } from './examples/skeleton-with-loaded'
export { SkeletonWithStartEndColor as StartEndColor } from './examples/skeleton-with-start-end-color'
export { SkeletonWithVariants as Variants } from './examples/skeleton-with-variants'
