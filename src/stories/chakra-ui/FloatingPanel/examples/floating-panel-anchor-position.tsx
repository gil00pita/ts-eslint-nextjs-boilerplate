'use client'

import { Button, FloatingPanel, IconButton, Portal, Text } from '@chakra-ui/react'
import { useCallback, useRef } from 'react'
import { LuGripHorizontal, LuX } from 'react-icons/lu'

export const FloatingPanelAnchorPosition = () => {
  const anchorPos = useRef({ x: 0, y: 0 })

  const getAnchorPosition = useCallback(
    (details: { triggerRect: DOMRect | null; boundaryRect: DOMRect | null }) => {
      const rect = details.triggerRect
      if (!rect) return anchorPos.current
      anchorPos.current = { x: rect.left, y: rect.bottom + 8 }
      return anchorPos.current
    },
    []
  )

  return (
    <FloatingPanel.Root
      defaultSize={{ height: 200, width: 300 }}
      getAnchorPosition={getAnchorPosition}
      minSize={{ height: 160, width: 280 }}
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
                <FloatingPanel.Title>Anchor Position</FloatingPanel.Title>
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
              <Text textStyle="sm">Opens below the trigger. Drag the header to reposition.</Text>
            </FloatingPanel.Body>
            <FloatingPanel.ResizeTriggers />
          </FloatingPanel.Content>
        </FloatingPanel.Positioner>
      </Portal>
    </FloatingPanel.Root>
  )
}
