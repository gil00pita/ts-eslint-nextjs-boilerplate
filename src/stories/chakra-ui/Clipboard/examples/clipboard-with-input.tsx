import { Clipboard, IconButton, Input, InputGroup } from '@chakra-ui/react'

export const ClipboardWithInput = () => {
  return (
    <Clipboard.Root maxW="300px" value="https://chakra-ui.com">
      <Clipboard.Label textStyle="label">Document Link</Clipboard.Label>
      <InputGroup endElement={<ClipboardIconButton />}>
        <Clipboard.Input asChild>
          <Input />
        </Clipboard.Input>
      </InputGroup>
    </Clipboard.Root>
  )
}

const ClipboardIconButton = () => {
  return (
    <Clipboard.Trigger asChild>
      <IconButton me="-2" size="xs" variant="surface">
        <Clipboard.Indicator />
      </IconButton>
    </Clipboard.Trigger>
  )
}
