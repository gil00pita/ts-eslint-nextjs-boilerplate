'use client'

import { Button, FloatingPanel, HStack, IconButton, Portal } from '@chakra-ui/react'
import { useState } from 'react'
import { LuGripHorizontal, LuX } from 'react-icons/lu'

export const FloatingPanelControlledOpen = () => {
  const [open, setOpen] = useState(false)

  return (
    <FloatingPanel.Root
      defaultSize={{ height: 200, width: 320 }}
      minSize={{ height: 200, width: 320 }}
      onOpenChange={(details) => setOpen(details.open)}
      open={open}
      persistRect
    >
      <HStack>
        <FloatingPanel.Trigger asChild>
          <Button size="sm" variant="outline">
            {open ? 'Close Panel' : 'Open Panel'}
          </Button>
        </FloatingPanel.Trigger>
      </HStack>
      <Portal>
        <FloatingPanel.Positioner>
          <FloatingPanel.Content>
            <FloatingPanel.Header>
              <FloatingPanel.DragTrigger>
                <LuGripHorizontal />
                <FloatingPanel.Title>Controlled Open</FloatingPanel.Title>
              </FloatingPanel.DragTrigger>
              <FloatingPanel.Control>
                <FloatingPanel.CloseTrigger asChild>
                  <IconButton size="2xs" variant="ghost">
                    <LuX />
                  </IconButton>
                </FloatingPanel.CloseTrigger>
              </FloatingPanel.Control>
            </FloatingPanel.Header>
            <FloatingPanel.Body>
              The open state is fully controlled externally. Closing via the × button or the trigger
              both update the same state.
            </FloatingPanel.Body>
            <FloatingPanel.ResizeTriggers />
          </FloatingPanel.Content>
        </FloatingPanel.Positioner>
      </Portal>
    </FloatingPanel.Root>
  )
}
