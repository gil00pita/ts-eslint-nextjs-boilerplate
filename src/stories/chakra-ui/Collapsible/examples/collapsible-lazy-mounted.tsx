import { Box, Collapsible } from '@chakra-ui/react'

export const CollapsibleLazyMounted = () => (
  <Collapsible.Root unmountOnExit>
    <Collapsible.Trigger paddingY="3">Toggle Collapse (Unmount on exit)</Collapsible.Trigger>
    <Collapsible.Content>
      <Box borderWidth="1px" padding="4">
        If you inspect the DOM, you'll notice that the content is unmounted when collapsed. This is
        useful for performance reasons when you have a lot of collapsible content.
      </Box>
    </Collapsible.Content>
  </Collapsible.Root>
)
