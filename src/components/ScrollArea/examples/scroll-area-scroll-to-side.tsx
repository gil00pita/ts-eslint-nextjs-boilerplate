'use client'

import { Button, ButtonGroup, ScrollArea, Stack, useScrollArea } from '@chakra-ui/react'
import LoremIpsum from 'react-lorem-ipsum'

export const ScrollAreaScrollToSide = () => {
  const scrollArea = useScrollArea()
  return (
    <Stack align="flex-start" gap="8" maxW="xl">
      <ButtonGroup justify="center" size="sm" variant="outline">
        <Button onClick={() => scrollArea.scrollToEdge({ behavior: 'smooth', edge: 'bottom' })}>
          Scroll to bottom
        </Button>
        <Button onClick={() => scrollArea.scrollToEdge({ behavior: 'smooth', edge: 'top' })}>
          Scroll to top
        </Button>
      </ButtonGroup>

      <ScrollArea.RootProvider height="8rem" value={scrollArea} width="24rem">
        <ScrollArea.Viewport>
          <ScrollArea.Content>
            <LoremIpsum p={3} />
          </ScrollArea.Content>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar />
      </ScrollArea.RootProvider>
    </Stack>
  )
}
