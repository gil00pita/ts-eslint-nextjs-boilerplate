'use client'

import { Button, createOverlay, Drawer, Portal } from '@chakra-ui/react'

interface DialogProps {
  title: string
  description?: string
  content?: React.ReactNode
  placement?: Drawer.RootProps['placement']
}

const drawer = createOverlay<DialogProps>((props) => {
  const { content, description, title, ...rest } = props
  return (
    <Drawer.Root {...rest}>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            {title && (
              <Drawer.Header>
                <Drawer.Title>{title}</Drawer.Title>
              </Drawer.Header>
            )}
            <Drawer.Body spaceY="4">
              {description && <Drawer.Description>{description}</Drawer.Description>}
              {content}
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
})

export const OverlayWithDrawer = () => {
  return (
    <>
      <Button
        onClick={() => {
          drawer.open('a', {
            description: 'Drawer Description',
            placement: 'end',
            title: 'Drawer Title',
          })
        }}
      >
        Open Drawer
      </Button>
      <drawer.Viewport />
    </>
  )
}
