import { Button, Clipboard } from '@chakra-ui/react'

export const ClipboardWithTimeout = () => {
  return (
    <Clipboard.Root timeout={1000} value="https://chakra-ui.com">
      <Clipboard.Trigger asChild>
        <Button size="sm" variant="surface">
          <Clipboard.Indicator />
          <Clipboard.CopyText />
        </Button>
      </Clipboard.Trigger>
    </Clipboard.Root>
  )
}
