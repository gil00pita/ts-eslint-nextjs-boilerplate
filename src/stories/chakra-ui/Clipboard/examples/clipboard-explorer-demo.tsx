'use client'

import { Button, Clipboard, Input, Stack, Text } from '@chakra-ui/react'

export const ClipboardExplorerDemo = () => {
  return (
    <Stack gap="6" maxW="sm">
      <Clipboard.Root value="https://chakra-ui.com">
        <Clipboard.Label mb="2">Copy link</Clipboard.Label>

        <Stack align="center" direction="row" gap="2" mt="2">
          <Clipboard.Input asChild>
            <Input readOnly />
          </Clipboard.Input>

          <Clipboard.Control>
            <Clipboard.Trigger asChild>
              <Button size="sm" variant="outline">
                Copy
                <Clipboard.Indicator ml="2" />
              </Button>
            </Clipboard.Trigger>
          </Clipboard.Control>
        </Stack>

        <Clipboard.ValueText as={Text} color="gray.600" fontSize="sm" />
      </Clipboard.Root>
    </Stack>
  )
}
