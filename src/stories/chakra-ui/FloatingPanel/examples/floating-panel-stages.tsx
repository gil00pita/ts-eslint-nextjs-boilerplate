'use client'

import { Button, FloatingPanel, IconButton, Portal, Text } from '@chakra-ui/react'
import { LuGripHorizontal, LuMaximize2, LuMinus, LuSquare, LuX } from 'react-icons/lu'

export const FloatingPanelStages = () => {
  return (
    <FloatingPanel.Root
      defaultSize={{ height: 220, width: 320 }}
      minSize={{ height: 160, width: 280 }}
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
                <FloatingPanel.Title>Stages</FloatingPanel.Title>
              </FloatingPanel.DragTrigger>
              <FloatingPanel.Control>
                <FloatingPanel.StageTrigger asChild stage="minimized">
                  <IconButton size="2xs" variant="ghost">
                    <LuMinus />
                  </IconButton>
                </FloatingPanel.StageTrigger>
                <FloatingPanel.StageTrigger asChild stage="maximized">
                  <IconButton size="2xs" variant="ghost">
                    <LuSquare />
                  </IconButton>
                </FloatingPanel.StageTrigger>
                <FloatingPanel.StageTrigger asChild stage="default">
                  <IconButton size="2xs" variant="ghost">
                    <LuMaximize2 />
                  </IconButton>
                </FloatingPanel.StageTrigger>
                <FloatingPanel.CloseTrigger asChild>
                  <IconButton size="2xs" variant="ghost">
                    <LuX />
                  </IconButton>
                </FloatingPanel.CloseTrigger>
              </FloatingPanel.Control>
            </FloatingPanel.Header>
            <FloatingPanel.Body>
              <Text textStyle="sm">
                Use the header controls to minimize, maximize, or restore the panel.
              </Text>
            </FloatingPanel.Body>
            <FloatingPanel.ResizeTriggers />
          </FloatingPanel.Content>
        </FloatingPanel.Positioner>
      </Portal>
    </FloatingPanel.Root>
  )
}
