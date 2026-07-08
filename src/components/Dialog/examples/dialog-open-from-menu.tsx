'use client'

import { Button, CloseButton, Dialog, Menu, Portal, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { LuChevronDown } from 'react-icons/lu'

export const DialogOpenFromMenu = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline">
            Actions <LuChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="edit">Edit</Menu.Item>
              <Menu.Item value="duplicate">Duplicate</Menu.Item>
              <Menu.Separator />
              <Menu.Item onClick={() => setOpen(true)} value="delete">
                Delete...
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>

      <Dialog.Root onOpenChange={(e) => setOpen(e.open)} open={open} role="alertdialog" size="sm">
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.CloseTrigger asChild>
                <CloseButton />
              </Dialog.CloseTrigger>
              <Dialog.Header>
                <Dialog.Title>Confirm Delete</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <Text>
                  Are you sure you want to delete this item? This action cannot be undone.
                </Text>
              </Dialog.Body>
              <Dialog.Footer>
                <Button onClick={() => setOpen(false)} variant="outline">
                  Cancel
                </Button>
                <Button colorPalette="red">Delete</Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  )
}
