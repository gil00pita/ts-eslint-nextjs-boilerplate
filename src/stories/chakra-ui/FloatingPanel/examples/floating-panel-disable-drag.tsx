'use client'

import { Button, FloatingPanel, IconButton, Portal, Text } from '@chakra-ui/react'
import { LuGripHorizontal, LuX } from 'react-icons/lu'

export const FloatingPanelDisableDrag = () => {
  return (
    <FloatingPanel.Root
      defaultSize={{ height: 200, width: 320 }}
      draggable={false}
      minSize={{ height: 200, width: 320 }}
      persistRect
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
                <FloatingPanel.Title>Disable Drag</FloatingPanel.Title>
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
              <Text textStyle="sm">
                This panel cannot be dragged. The position is fixed. Resizing is still enabled.
              </Text>
            </FloatingPanel.Body>
            <FloatingPanel.ResizeTriggers />
          </FloatingPanel.Content>
        </FloatingPanel.Positioner>
      </Portal>
    </FloatingPanel.Root>
  )
}
