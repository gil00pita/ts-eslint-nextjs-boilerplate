import { Button, Menu, Portal } from '@chakra-ui/react'

export const MenuWithGroupDynamic = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">Window</Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {items.map((group) => (
              <Menu.ItemGroup key={group.name}>
                <Menu.ItemGroupLabel>{group.name}</Menu.ItemGroupLabel>
                {group.children.map((item) => (
                  <Menu.Item key={item.value} value={item.value}>
                    {item.name}
                  </Menu.Item>
                ))}
              </Menu.ItemGroup>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

const items = [
  {
    children: [
      { name: 'index.html', value: '5' },
      { name: 'styles.css', value: '6' },
    ],
    name: 'Top Panel',
    value: 'top',
  },
  {
    children: [
      { name: 'script.js', value: '7' },
      { name: 'assets', value: '8' },
    ],
    name: 'Bottom Panel',
    value: 'bottom',
  },
]
