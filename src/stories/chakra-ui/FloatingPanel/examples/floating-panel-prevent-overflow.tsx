'use client'

import { Button, FloatingPanel, IconButton, Portal, Text } from '@chakra-ui/react'
import { LuGripHorizontal, LuX } from 'react-icons/lu'

export const FloatingPanelPreventOverflow = () => {
  return (
    <FloatingPanel.Root
      allowOverflow={false}
      defaultSize={{ height: 180, width: 300 }}
      minSize={{ height: 180, width: 300 }}
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
                <FloatingPanel.Title>Prevent Overflow</FloatingPanel.Title>
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
              <Text textStyle="sm">This panel cannot be dragged beyond the viewport edges.</Text>
            </FloatingPanel.Body>
            <FloatingPanel.ResizeTriggers />
          </FloatingPanel.Content>
        </FloatingPanel.Positioner>
      </Portal>
    </FloatingPanel.Root>
  )
}
