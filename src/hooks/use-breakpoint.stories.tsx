import type { Meta } from '@storybook/react-vite'

import { Box, Flex, useBreakpointValue } from '@/ui'

export default {
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
  title: 'Hooks / useBreakpointValue',
} satisfies Meta

export const Basic = () => {
  const value = useBreakpointValue({ base: false, lg: true }, { ssr: false })
  return <Flex>{value ? 'true' : 'false'}</Flex>
}
