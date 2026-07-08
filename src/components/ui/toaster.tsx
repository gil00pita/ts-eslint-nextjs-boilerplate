'use client'

import { Toaster as ChakraToaster, createToaster, Portal, Stack, Toast } from '@chakra-ui/react'

export const toaster = createToaster({
  pauseOnPageIdle: true,
  placement: 'bottom-end',
})

export function Toaster() {
  return (
    <Portal>
      <ChakraToaster toaster={toaster}>
        {(toast) => (
          <Toast.Root>
            <Toast.Indicator />
            <Stack flex="1" gap="1">
              {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
              {toast.description && <Toast.Description>{toast.description}</Toast.Description>}
            </Stack>
            <Toast.CloseTrigger />
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  )
}
