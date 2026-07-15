import type { ReactNode } from 'react'

import { Box } from '@chakra-ui/react'

type StoryComponent = () => ReactNode

export const chartStoryParameters = {
  layout: 'fullscreen',
}

export const chartStoryDecorators = [
  (Story: StoryComponent) => (
    <Box maxW="960px" minW="0" mx="auto" p={{ base: '4', md: '10' }} w="full">
      <Story />
    </Box>
  ),
]
