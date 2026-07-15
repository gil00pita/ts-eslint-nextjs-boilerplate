'use client'

import { Box, Button, Collapsible, Icon, Stack, useCollapsible } from '@chakra-ui/react'
import { LuChevronDown, LuChevronRight } from 'react-icons/lu'

export const CollapsibleWithStore = () => {
  const collapsible = useCollapsible()

  return (
    <Stack align="flex-start" gap="4">
      <Box fontWeight="medium">State: {collapsible.visible ? 'Expanded' : 'Collapsed'}</Box>

      <Button onClick={() => collapsible.setOpen(!collapsible.open)} size="sm" variant="subtle">
        Toggle
        <Icon>{collapsible.open ? <LuChevronRight /> : <LuChevronDown />}</Icon>
      </Button>

      <Collapsible.RootProvider value={collapsible}>
        <Collapsible.Content>
          <Box borderWidth="1px" padding="4" rounded="l3">
            Using the <code>useCollapsible</code> hook and <code>RootProvider</code> allows you to
            access the collapsible store and control the state from anywhere in your component.
          </Box>
        </Collapsible.Content>
      </Collapsible.RootProvider>
    </Stack>
  )
}
