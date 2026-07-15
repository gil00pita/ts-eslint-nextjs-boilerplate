'use client'

import { Button, Menu, Portal, useCheckboxGroup } from '@chakra-ui/react'
import { HiCog } from 'react-icons/hi'

export const MenuWithCheckboxItems = () => {
  const group = useCheckboxGroup({ defaultValue: ['autosave'] })
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          <HiCog /> Features
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.ItemGroup>
              <Menu.ItemGroupLabel>Features</Menu.ItemGroupLabel>
              {items.map(({ title, value }) => (
                <Menu.CheckboxItem
                  checked={group.isChecked(value)}
                  key={value}
                  onCheckedChange={() => group.toggleValue(value)}
                  value={value}
                >
                  {title}
                  <Menu.ItemIndicator />
                </Menu.CheckboxItem>
              ))}
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

const items = [
  { title: 'Autosave', value: 'autosave' },
  { title: 'Detect Language', value: 'detect-language' },
  { title: 'Spellcheck', value: 'spellcheck' },
]
