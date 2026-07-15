'use client'

import { ScrollArea, useScrollArea } from '@chakra-ui/react'
import LoremIpsum from 'react-lorem-ipsum'

export const ScrollAreaWithStore = () => {
  const scrollArea = useScrollArea()
  return (
    <ScrollArea.RootProvider height="8.5rem" value={scrollArea}>
      <ScrollArea.Viewport>
        <ScrollArea.Content spaceY="4">
          <LoremIpsum p={3} />
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar>
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea.RootProvider>
  )
}
