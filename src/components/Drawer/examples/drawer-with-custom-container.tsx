'use client'

import { Button, CloseButton, Drawer, Portal, Stack, type StackProps, Text } from '@chakra-ui/react'
import { forwardRef, useRef } from 'react'

const DrawerContainer = forwardRef<HTMLDivElement, StackProps>(
  function DrawerContainer(props, ref) {
    return (
      <Stack
        align="flex-start"
        layerStyle="fill.subtle"
        minH="400px"
        outline="2px solid gray"
        overflow="hidden"
        p="8"
        pos="relative"
        ref={ref}
        {...props}
      />
    )
  }
)

export const DrawerWithCustomContainer = () => {
  const portalRef = useRef<HTMLDivElement | null>(null)
  return (
    <Drawer.Root closeOnInteractOutside={false}>
      <DrawerContainer ref={portalRef}>
        <Text>Render drawer here</Text>
        <Drawer.Trigger asChild>
          <Button bg="bg" size="sm" variant="outline">
            Open Drawer
          </Button>
        </Drawer.Trigger>
      </DrawerContainer>
      <Portal container={portalRef}>
        <Drawer.Backdrop boxSize="full" pos="absolute" />
        <Drawer.Positioner boxSize="full" pos="absolute">
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Drawer Title</Drawer.Title>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Header>
            <Drawer.Body>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </Drawer.Body>
            <Drawer.Footer>
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
