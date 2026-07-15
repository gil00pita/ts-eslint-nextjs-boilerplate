'use client'

import { Button, Dialog, Portal } from '@chakra-ui/react'
import { createOverlay } from '@chakra-ui/react'
import { useRef } from 'react'

interface AlertProps {
  title?: string
  content?: React.ReactNode
  onConfirm?: () => void
}

const alert = createOverlay<AlertProps>((props) => {
  const { content, onConfirm, title = 'Are you sure?', ...rest } = props
  const cancelRef = useRef<HTMLButtonElement | null>(null)
  return (
    <Dialog.Root {...rest} initialFocusEl={() => cancelRef.current} role="alertdialog">
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{title}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body spaceY="4">{content}</Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild ref={cancelRef}>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button colorPalette="red" onClick={onConfirm}>
                Delete
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
})

export const OverlayWithAlert = () => {
  return (
    <>
      <Button
        onClick={async () => {
          alert.open('a', {
            content: 'Remove this item will clear all the data and cannot be undone.',
            onConfirm() {
              console.log('confirmed')
              alert.close('a')
            },
          })
        }}
      >
        Open Modal
      </Button>
      <alert.Viewport />
    </>
  )
}
