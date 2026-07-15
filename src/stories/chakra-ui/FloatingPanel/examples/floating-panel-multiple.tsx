'use client'

import { Button, FloatingPanel, HStack, IconButton, Portal, Text } from '@chakra-ui/react'
import { LuGripHorizontal, LuX } from 'react-icons/lu'

const panels = [
  {
    defaultPosition: { x: 80, y: 80 },
    description: 'Jot down quick ideas and reminders.',
    id: 'notes',
    label: 'Notes',
    title: 'Notes',
  },
  {
    defaultPosition: { x: 260, y: 120 },
    description: 'Track items you want to finish today.',
    id: 'tasks',
    label: 'Tasks',
    title: 'Tasks',
  },
  {
    defaultPosition: { x: 440, y: 160 },
    description: 'Keep a lightweight conversation panel open.',
    id: 'chat',
    label: 'Chat',
    title: 'Chat',
  },
] as const

export const FloatingPanelMultiple = () => {
  return (
    <HStack flexWrap="wrap" gap="2">
      {panels.map((panel) => (
        <FloatingPanel.Root
          defaultPosition={panel.defaultPosition}
          defaultSize={{ height: 200, width: 280 }}
          id={panel.id}
          key={panel.id}
          minSize={{ height: 160, width: 240 }}
          persistRect
        >
          <FloatingPanel.Trigger asChild>
            <Button size="sm" variant="outline">
              {panel.label}
            </Button>
          </FloatingPanel.Trigger>
          <Portal>
            <FloatingPanel.Positioner>
              <FloatingPanel.Content>
                <FloatingPanel.Header>
                  <FloatingPanel.DragTrigger>
                    <LuGripHorizontal />
                    <FloatingPanel.Title>{panel.title}</FloatingPanel.Title>
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
                  <Text textStyle="sm">{panel.description}</Text>
                </FloatingPanel.Body>
                <FloatingPanel.ResizeTriggers />
              </FloatingPanel.Content>
            </FloatingPanel.Positioner>
          </Portal>
        </FloatingPanel.Root>
      ))}
    </HStack>
  )
}
