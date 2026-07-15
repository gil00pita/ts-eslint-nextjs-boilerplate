'use client'

import { Button, FloatingPanel, Grid, HStack, IconButton, Portal, Text } from '@chakra-ui/react'
import { useState } from 'react'
import {
  LuArrowDown,
  LuArrowLeft,
  LuArrowRight,
  LuArrowUp,
  LuGripHorizontal,
  LuX,
} from 'react-icons/lu'

export const FloatingPanelControlledPosition = () => {
  const [position, setPosition] = useState({ x: 16, y: 100 })

  const move = (dx: number, dy: number) => setPosition((p) => ({ x: p.x + dx, y: p.y + dy }))

  return (
    <FloatingPanel.Root
      onPositionChange={(details) => setPosition(details.position)}
      position={position}
    >
      <HStack align="start" p="3">
        <FloatingPanel.Trigger asChild>
          <Button size="sm" variant="outline">
            Open Panel
          </Button>
        </FloatingPanel.Trigger>
        <Grid gap="1" templateColumns="repeat(3, 1fr)">
          <span />
          <IconButton aria-label="Move up" onClick={() => move(0, -50)} size="xs" variant="outline">
            <LuArrowUp />
          </IconButton>
          <span />
          <IconButton
            aria-label="Move left"
            onClick={() => move(-50, 0)}
            size="xs"
            variant="outline"
          >
            <LuArrowLeft />
          </IconButton>
          <span />
          <IconButton
            aria-label="Move right"
            onClick={() => move(50, 0)}
            size="xs"
            variant="outline"
          >
            <LuArrowRight />
          </IconButton>
          <span />
          <IconButton
            aria-label="Move down"
            onClick={() => move(0, 50)}
            size="xs"
            variant="outline"
          >
            <LuArrowDown />
          </IconButton>
          <span />
        </Grid>
        <Text color="fg.muted" fontFamily="mono" pt="1" textStyle="xs">
          x: {Math.round(position.x)}, y: {Math.round(position.y)}
        </Text>
      </HStack>
      <Portal>
        <FloatingPanel.Positioner>
          <FloatingPanel.Content>
            <FloatingPanel.Header>
              <FloatingPanel.DragTrigger>
                <LuGripHorizontal />
                <FloatingPanel.Title>Controlled Position</FloatingPanel.Title>
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
                Use the arrow pad above or drag the header to move this panel.
              </Text>
            </FloatingPanel.Body>
            <FloatingPanel.ResizeTriggers />
          </FloatingPanel.Content>
        </FloatingPanel.Positioner>
      </Portal>
    </FloatingPanel.Root>
  )
}
