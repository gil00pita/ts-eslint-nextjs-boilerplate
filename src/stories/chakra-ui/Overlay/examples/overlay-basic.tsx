'use client'

import { Button, createOverlay, Dialog, Portal } from '@chakra-ui/react'

interface DialogProps {
  title: string
  description?: string
  content?: React.ReactNode
}

const dialog = createOverlay<DialogProps>((props) => {
  const { content, description, title, ...rest } = props
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
            <Dialog.Body spaceY="4">
              {description && <Dialog.Description>{description}</Dialog.Description>}
              {content}
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
})

export const OverlayBasic = () => {
  return (
    <>
      <Button
        onClick={() => {
          dialog.open('a', {
            description: 'Dialog Description',
            title: 'Dialog Title',
          })
        }}
      >
        Open Modal
      </Button>
      <dialog.Viewport />
    </>
  )
}
