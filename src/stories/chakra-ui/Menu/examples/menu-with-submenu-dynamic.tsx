'use client'

import { Button, Menu, Portal } from '@chakra-ui/react'
import { LuChevronRight } from 'react-icons/lu'

interface Item {
  value: string
  label: string
  children?: Item[]
}

const items: Item[] = [
  { label: 'New Text File', value: 'new-txt' },
  { label: 'New File...', value: 'new-file' },
  {
    children: [
      { label: 'Panda', value: 'panda' },
      { label: 'Ark UI', value: 'ark' },
      {
        children: [
          { label: 'Chakra v3.1', value: 'chakra-1' },
          { label: 'Chakra v3.2', value: 'chakra-2' },
        ],
        label: 'Chakra v3',
        value: 'chakra',
      },
    ],
    label: 'Open Recent',
    value: 'open-recent',
  },
  { label: 'Open File...', value: 'open-file' },
  { label: 'Export', value: 'export' },
]

const MenuItem = ({ item }: { item: Item }) => {
  if (!item.children) {
    return <Menu.Item value={item.value}>{item.label}</Menu.Item>
  }

  return (
    <Menu.Root positioning={{ gutter: 2, placement: 'right-start' }}>
      <Menu.TriggerItem>
        {item.label} <LuChevronRight />
      </Menu.TriggerItem>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {item.children.map((child) => (
              <MenuItem item={child} key={child.value} />
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export const MenuWithSubmenuDynamic = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">Nested</Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {items.map((item) => (
              <MenuItem item={item} key={item.value} />
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
