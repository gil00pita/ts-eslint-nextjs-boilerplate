'use client'

import { Button, createOverlay, Dialog, Menu, Portal } from '@chakra-ui/react'

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

export const OverlayWithMenuItem = () => {
  return (
    <>
      <dialog.Viewport />
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button size="sm" variant="outline">
            Menu
          </Button>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item
              onClick={() =>
                dialog.open('more', {
                  content: <ActionsMenu />,
                  description: 'Choose an action from the menu below.',
                  title: 'Welcome',
                })
              }
              value="more"
            >
              Show More
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </>
  )
}

const ActionsMenu = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          More Actions
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="new-txt">New Text File</Menu.Item>
          <Menu.Item value="new-file">New File...</Menu.Item>
          <Menu.Item value="new-win">New Window</Menu.Item>
          <Menu.Item value="open-file">Open File...</Menu.Item>
          <Menu.Item value="export">Export</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}
