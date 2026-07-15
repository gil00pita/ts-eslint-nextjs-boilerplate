'use client'

import { ActionBar, Button, Checkbox, CloseButton, Portal } from '@chakra-ui/react'
import { useState } from 'react'
import { LuShare, LuTrash2 } from 'react-icons/lu'

export const ActionBarWithCloseTrigger = () => {
  const [checked, setChecked] = useState(false)
  return (
    <>
      <Checkbox.Root checked={checked} onCheckedChange={(e) => setChecked(!!e.checked)}>
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label>Show Action bar</Checkbox.Label>
      </Checkbox.Root>

      <ActionBar.Root
        closeOnInteractOutside={false}
        onOpenChange={(e) => setChecked(e.open)}
        open={checked}
      >
        <Portal>
          <ActionBar.Positioner>
            <ActionBar.Content>
              <ActionBar.SelectionTrigger>2 selected</ActionBar.SelectionTrigger>
              <ActionBar.Separator />
              <Button size="sm" variant="outline">
                <LuTrash2 />
                Delete
              </Button>
              <Button size="sm" variant="outline">
                <LuShare />
                Share
              </Button>
              <ActionBar.CloseTrigger asChild>
                <CloseButton size="sm" />
              </ActionBar.CloseTrigger>
            </ActionBar.Content>
          </ActionBar.Positioner>
        </Portal>
      </ActionBar.Root>
    </>
  )
}
