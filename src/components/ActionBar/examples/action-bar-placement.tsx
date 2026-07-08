'use client'

import { ActionBar, Button, Portal, SegmentGroup, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { LuShare, LuTrash2 } from 'react-icons/lu'

export const ActionBarPlacement = () => {
  const [placement, setPlacement] = useState<'bottom' | 'bottom-start' | 'bottom-end'>('bottom')
  const [open, setOpen] = useState(false)

  return (
    <VStack align="flex-start" gap="6">
      <VStack align="flex-start" gap="3">
        <Text fontWeight="medium">Placement:</Text>
        <SegmentGroup.Root
          onValueChange={(e) => setPlacement(e.value as 'bottom' | 'bottom-start' | 'bottom-end')}
          size="sm"
          value={placement}
        >
          <SegmentGroup.Indicator />
          <SegmentGroup.Items
            items={[
              { label: 'Bottom Start', value: 'bottom-start' },
              { label: 'Bottom', value: 'bottom' },
              { label: 'Bottom End', value: 'bottom-end' },
            ]}
          />
        </SegmentGroup.Root>
      </VStack>

      <Button onClick={() => setOpen(!open)}>{open ? 'Hide' : 'Show'} Action Bar</Button>

      <ActionBar.Root open={open} placement={placement}>
        <Portal>
          <ActionBar.Positioner>
            <ActionBar.Content>
              <ActionBar.SelectionTrigger>3 selected</ActionBar.SelectionTrigger>
              <ActionBar.Separator />
              <Button size="sm" variant="outline">
                <LuTrash2 />
                Delete
              </Button>
              <Button size="sm" variant="outline">
                <LuShare />
                Share
              </Button>
            </ActionBar.Content>
          </ActionBar.Positioner>
        </Portal>
      </ActionBar.Root>
    </VStack>
  )
}
