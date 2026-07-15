'use client'

import { Button, FloatingPanel, HStack, IconButton, Portal, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { LuGripHorizontal, LuX } from 'react-icons/lu'

export const FloatingPanelControlledSize = () => {
  const [size, setSize] = useState({ height: 260, width: 360 })

  return (
    <FloatingPanel.Root onSizeChange={(details) => setSize(details.size)} size={size}>
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
                <FloatingPanel.Title>Controlled Size</FloatingPanel.Title>
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
              <Stack gap="3">
                <HStack gap="2">
                  <Button
                    onClick={() => setSize({ height: 180, width: 240 })}
                    size="sm"
                    variant="outline"
                  >
                    S
                  </Button>
                  <Button
                    onClick={() => setSize({ height: 260, width: 360 })}
                    size="sm"
                    variant="outline"
                  >
                    M
                  </Button>
                  <Button
                    onClick={() => setSize({ height: 360, width: 520 })}
                    size="sm"
                    variant="outline"
                  >
                    L
                  </Button>
                </HStack>
                <Text color="fg.muted" textStyle="sm">
                  {Number(size.width.toFixed(2))} x {Number(size.height.toFixed(2))}px
                </Text>
              </Stack>
            </FloatingPanel.Body>
            <FloatingPanel.ResizeTriggers />
          </FloatingPanel.Content>
        </FloatingPanel.Positioner>
      </Portal>
    </FloatingPanel.Root>
  )
}
