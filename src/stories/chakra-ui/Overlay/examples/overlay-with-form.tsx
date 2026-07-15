'use client'

import { Button, createOverlay, Dialog, Input, Portal, Stack } from '@chakra-ui/react'
import { useState } from 'react'

interface ContactFormProps {
  title?: string
}

const contactDialog = createOverlay<ContactFormProps>((props) => {
  const { title, ...rest } = props
  const [name, setName] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    alert(`Hello ${name}!`)

    // Close dialog using injected `onOpenChange` prop
    props.onOpenChange?.({ open: false })

    setName('')
  }

  return (
    <Dialog.Root {...rest}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            {title && (
              <Dialog.Header>
                <Dialog.Title>{title}</Dialog.Title>
              </Dialog.Header>
            )}
            <Dialog.Body>
              <form onSubmit={handleSubmit}>
                <Stack gap="4">
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    value={name}
                  />
                  <Button type="submit">Submit</Button>
                </Stack>
              </form>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
})

export const OverlayWithForm = () => {
  return (
    <>
      <Button
        onClick={() => {
          contactDialog.open('form', { title: 'Simple Form' })
        }}
      >
        Open Form
      </Button>
      <contactDialog.Viewport />
    </>
  )
}
