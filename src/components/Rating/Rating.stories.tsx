import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Forms / Rating',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Rating')

export { RatingBasic as Basic } from './examples/rating-basic'
export { RatingControlled as Controlled } from './examples/rating-controlled'
export { RatingEmoji as Emoji } from './examples/rating-emoji'
export { RatingInTestimonial as Testimonial } from './examples/rating-in-testimonial'
export { RatingSizeTable as Sizes } from './examples/rating-size-table'
export { RatingWithColors as Colors } from './examples/rating-with-colors'
export { RatingWithCustomIcon as CustomIcon } from './examples/rating-with-custom-icon'
export { RatingWithHalf as Half } from './examples/rating-with-half'
export { RatingWithHookForm as HookForm } from './examples/rating-with-hook-form'
export { RatingWithReadonly as ReadOnly } from './examples/rating-with-readonly'
export { RatingWithStore as Store } from './examples/rating-with-store'
export { RatingWithLabel as Label } from './examples/rating-with-label'
