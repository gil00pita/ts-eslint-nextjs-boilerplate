'use client'

import { Button, FloatingPanel, IconButton, Portal, Text } from '@chakra-ui/react'
import { LuGripHorizontal, LuX } from 'react-icons/lu'

export const FloatingPanelResizeAxes = () => {
  return (
    <FloatingPanel.Root
      defaultSize={{ height: 200, width: 320 }}
      minSize={{ height: 160, width: 240 }}
    >
      <FloatingPanel.Trigger asChild>
        <Button size="sm" variant="outline">
          Open Panel
        </Button>
      </FloatingPanel.Trigger>
      <Portal>
        <FloatingPanel.Positioner>
          <FloatingPanel.Content>
            <FloatingPanel.Header>
              <FloatingPanel.DragTrigger>
                <LuGripHorizontal />
                <FloatingPanel.Title>Resize Axes</FloatingPanel.Title>
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
              <Text textStyle="sm">Only the south, east, and southeast handles are enabled.</Text>
            </FloatingPanel.Body>
            <FloatingPanel.ResizeTriggers axes={['s', 'e', 'se']} />
          </FloatingPanel.Content>
        </FloatingPanel.Positioner>
      </Portal>
    </FloatingPanel.Root>
  )
}
