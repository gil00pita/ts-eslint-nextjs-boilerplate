import { Button, CloseButton, Dialog, For, HStack, Portal } from '@chakra-ui/react'

export const DialogWithPlacement = () => {
  return (
    <HStack gap="4" wrap="wrap">
      <For each={['top', 'center', 'bottom']}>
        {(placement) => (
          <Dialog.Root key={placement} motionPreset="slide-in-bottom" placement={placement}>
            <Dialog.Trigger asChild>
              <Button variant="outline">Open Dialog ({placement}) </Button>
            </Dialog.Trigger>
            <Portal>
              <Dialog.Backdrop />
              <Dialog.Positioner>
                <Dialog.Content>
                  <Dialog.Header>
                    <Dialog.Title>Dialog Title</Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Body>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p>
                  </Dialog.Body>
                  <Dialog.Footer>
                    <Dialog.ActionTrigger asChild>
                      <Button variant="outline">Cancel</Button>
                    </Dialog.ActionTrigger>
                    <Button>Save</Button>
                  </Dialog.Footer>
                  <Dialog.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Dialog.CloseTrigger>
                </Dialog.Content>
              </Dialog.Positioner>
            </Portal>
          </Dialog.Root>
        )}
      </For>
    </HStack>
  )
}
