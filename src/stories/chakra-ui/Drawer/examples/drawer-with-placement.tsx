import { Button, CloseButton, Drawer, For, HStack, Portal } from '@chakra-ui/react'

export const DrawerWithPlacement = () => {
  return (
    <HStack wrap="wrap">
      <For each={['bottom', 'top', 'start', 'end']}>
        {(placement) => (
          <Drawer.Root key={placement} placement={placement}>
            <Drawer.Trigger asChild>
              <Button size="sm" variant="outline">
                Open ({placement})
              </Button>
            </Drawer.Trigger>
            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content
                  roundedBottom={placement === 'top' ? 'l3' : undefined}
                  roundedTop={placement === 'bottom' ? 'l3' : undefined}
                >
                  <Drawer.Header>
                    <Drawer.Title>Drawer Title</Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </Drawer.Body>
                  <Drawer.Footer>
                    <Drawer.ActionTrigger asChild>
                      <Button variant="outline">Cancel</Button>
                    </Drawer.ActionTrigger>
                    <Button>Save</Button>
                  </Drawer.Footer>
                  <Drawer.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Drawer.CloseTrigger>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>
        )}
      </For>
    </HStack>
  )
}
