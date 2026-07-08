'use client'

import { Avatar, createListCollection, HStack, Select, useSelectContext } from '@chakra-ui/react'

const SelectValue = () => {
  const select = useSelectContext()
  const items = select.selectedItems as Array<{ name: string; avatar: string }>
  const { avatar, name } = items[0]
  return (
    <Select.ValueText placeholder="Select member">
      <HStack>
        <Avatar.Root shape="rounded" size="2xs">
          <Avatar.Image alt={name} src={avatar} />
          <Avatar.Fallback name={name} />
        </Avatar.Root>
        {name}
      </HStack>
    </Select.ValueText>
  )
}

export const SelectWithAvatar = () => {
  return (
    <Select.Root
      collection={members}
      defaultValue={['jessica_jones']}
      positioning={{ sameWidth: true }}
      size="sm"
      width="240px"
    >
      <Select.HiddenSelect />
      <Select.Label>Select member</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <SelectValue />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          {members.items.map((item) => (
            <Select.Item item={item} justifyContent="flex-start" key={item.id}>
              <Avatar.Root shape="rounded" size="2xs">
                <Avatar.Image alt={item.name} src={item.avatar} />
                <Avatar.Fallback name={item.name} />
              </Avatar.Root>
              {item.name}
              <Select.ItemIndicator />
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  )
}

const members = createListCollection({
  items: [
    {
      avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100',
      id: 'jessica_jones',
      name: 'Jessica Jones',
    },
    {
      avatar: 'https://images.unsplash.com/photo-1523477800337-966dbabe060b?w=100',
      id: 'kenneth_johnson',
      name: 'Kenneth Johnson',
    },
    {
      avatar: 'https://images.unsplash.com/photo-1609712409631-dbbb050746d1?w=100',
      id: 'kate_wilson',
      name: 'Kate Wilson',
    },
  ],
  itemToString: (item) => item.name,
  itemToValue: (item) => item.id,
})
