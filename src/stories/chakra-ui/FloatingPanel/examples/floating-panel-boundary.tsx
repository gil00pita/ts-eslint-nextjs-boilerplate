'use client'

import { Box, Button, FloatingPanel, IconButton, Portal, Text } from '@chakra-ui/react'
import { useRef } from 'react'
import { LuGripHorizontal, LuX } from 'react-icons/lu'

export const FloatingPanelBoundary = () => {
  const boundaryRef = useRef<HTMLDivElement>(null)

  return (
    <Box
      borderColor="border.emphasized"
      borderRadius="l2"
      borderStyle="dashed"
      borderWidth="2px"
      h="400px"
      p="4"
      position="relative"
      ref={boundaryRef}
      w="full"
    >
      <Text color="fg.muted" mb="2" textStyle="xs">
        Drag boundary
      </Text>
      <FloatingPanel.Root
        allowOverflow={false}
        defaultSize={{ height: 180, width: 280 }}
        getBoundaryEl={() => boundaryRef.current}
        minSize={{ height: 180, width: 280 }}
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
                  <FloatingPanel.Title>Bounded Panel</FloatingPanel.Title>
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
                  This panel cannot be dragged outside the dashed boundary box.
                </Text>
              </FloatingPanel.Body>
              <FloatingPanel.ResizeTriggers />
            </FloatingPanel.Content>
          </FloatingPanel.Positioner>
        </Portal>
      </FloatingPanel.Root>
    </Box>
  )
}
