'use client'

import { Button, Collapsible, Stack } from '@chakra-ui/react'
import { LuChevronDown } from 'react-icons/lu'
import { LoremIpsum } from 'react-lorem-ipsum'

export const CollapsiblePartialHeight = () => (
  <Collapsible.Root collapsedHeight="100px">
    <Collapsible.Content
      _closed={{
        shadow: 'inset 0 -12px 12px -12px var(--shadow-color)',
        shadowColor: 'blackAlpha.500',
      }}
    >
      <Stack borderWidth="1px" padding="4" rounded="l2">
        <LoremIpsum p={1} />
        <LoremIpsum p={1} />
      </Stack>
    </Collapsible.Content>
    <Collapsible.Trigger asChild mt="4">
      <Button size="sm" variant="outline">
        <Collapsible.Context>{(api) => (api.open ? 'Show Less' : 'Show More')}</Collapsible.Context>
        <Collapsible.Indicator _open={{ transform: 'rotate(180deg)' }} transition="transform 0.2s">
          <LuChevronDown />
        </Collapsible.Indicator>
      </Button>
    </Collapsible.Trigger>
  </Collapsible.Root>
)
