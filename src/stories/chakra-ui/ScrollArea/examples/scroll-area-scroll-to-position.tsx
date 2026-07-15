'use client'

import { Button, ScrollArea, Stack, useScrollArea } from '@chakra-ui/react'
import LoremIpsum from 'react-lorem-ipsum'

export const ScrollAreaScrollToPosition = () => {
  const scrollArea = useScrollArea()
  return (
    <Stack align="flex-start" gap="8" maxW="xl">
      <Button
        onClick={() => scrollArea.scrollTo({ behavior: 'smooth', top: 200 })}
        size="sm"
        variant="outline"
      >
        Scroll to 100px
      </Button>
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
