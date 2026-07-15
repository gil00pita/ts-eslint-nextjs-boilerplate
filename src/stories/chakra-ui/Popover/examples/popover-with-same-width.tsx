import { Button, Popover, Portal } from '@chakra-ui/react'

export const PopoverWithSameWidth = () => {
  return (
    <Popover.Root positioning={{ sameWidth: true }}>
      <Popover.Trigger asChild>
        <Button minW="xs" size="sm" variant="outline">
          Click me
        </Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content width="auto">
            <Popover.Arrow />
            <Popover.Body>This is a popover with the same width as the trigger button</Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}
