'use client'

import {
  Button,
  FloatingPanel,
  HStack,
  IconButton,
  Portal,
  Text,
  useFloatingPanelContext,
} from '@chakra-ui/react'
import { LuGripHorizontal, LuX } from 'react-icons/lu'

const PanelActions = () => {
  const api = useFloatingPanelContext()
  return (
    <HStack gap="2">
      <Button onClick={() => api.minimize()} size="sm" variant="outline">
        Minimize
      </Button>
      <Button onClick={() => api.maximize()} size="sm" variant="outline">
        Maximize
      </Button>
      <Button onClick={() => api.restore()} size="sm" variant="outline">
        Restore
      </Button>
    </HStack>
  )
}

export const FloatingPanelContext = () => {
  return (
    <FloatingPanel.Root
      defaultSize={{ height: 200, width: 320 }}
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
                <FloatingPanel.Title>Context</FloatingPanel.Title>
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
              <Text mb="3" textStyle="sm">
                Control the panel from inside the body using <code>useFloatingPanelContext</code>.
              </Text>
              <PanelActions />
            </FloatingPanel.Body>
            <FloatingPanel.ResizeTriggers />
          </FloatingPanel.Content>
        </FloatingPanel.Positioner>
      </Portal>
    </FloatingPanel.Root>
  )
}
