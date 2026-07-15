'use client'

import {
  Button,
  FloatingPanel,
  HStack,
  IconButton,
  Portal,
  Span,
  Stack,
  Text,
} from '@chakra-ui/react'
import { LuGripHorizontal, LuMouse, LuMoveHorizontal, LuX } from 'react-icons/lu'

export const FloatingPanelMinMax = () => {
  return (
    <Stack align="flex-start" gap="4">
      <HStack gap="2" textStyle="sm">
        <LuMouse />
        <LuMoveHorizontal />
        <Span>Drag the resize handles — size is clamped between min and max.</Span>
      </HStack>

      <FloatingPanel.Root
        defaultSize={{ height: 220, width: 320 }}
        maxSize={{ height: 320, width: 480 }}
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
                  <FloatingPanel.Title>Min/Max</FloatingPanel.Title>
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
                  Resize the panel with the resize handles. Size is constrained between 280x160px
                  (min) and 480x320px (max).
                </Text>
              </FloatingPanel.Body>
              <FloatingPanel.ResizeTriggers />
            </FloatingPanel.Content>
          </FloatingPanel.Positioner>
        </Portal>
      </FloatingPanel.Root>
    </Stack>
  )
}
