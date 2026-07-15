import { Clipboard, IconButton } from '@chakra-ui/react'

export const ClipboardBasic = () => {
  return (
    <Clipboard.Root value="https://chakra-ui.com">
      <Clipboard.Trigger asChild>
        <IconButton size="xs" variant="surface">
          <Clipboard.Indicator />
        </IconButton>
      </Clipboard.Trigger>
    </Clipboard.Root>
  )
}
