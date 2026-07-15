'use client'

import { Box, Button, CloseButton, Dialog, Portal, Stack } from '@chakra-ui/react'
import { useRef } from 'react'
import Lorem from 'react-lorem-ipsum'

export const DialogWithFinalFocus = () => {
  const finalRef = useRef<HTMLDivElement | null>(null)
  return (
    <Stack align="start">
      <Dialog.Root finalFocusEl={() => finalRef.current}>
        <Dialog.Trigger asChild>
          <Button variant="outline">Open</Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Dialog Title</Dialog.Title>
              </Dialog.Header>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
              <Dialog.Body>
                <Lorem p={1} />
              </Dialog.Body>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
      <Box
        _focus={{ outline: '2px solid red' }}
        aria-label="Focus moved to this box"
        borderStyle="dashed"
        borderWidth="2px"
        padding="4"
        ref={finalRef}
        tabIndex={-1}
      >
        Some other content that will receive focus on close.
      </Box>
    </Stack>
  )
}
