import { Box, Tabs } from '@chakra-ui/react'

const items = [
  {
    content: 'Dolore ex esse laboris elit magna esse sunt',
    title: '1',
  },
  {
    content:
      'Pariatur in veniam Lorem est occaecat do magna nisi mollit ipsum sit adipisicing fugiat ex.',
    title: '2',
  },
]

export const TabsWithAnimation = () => {
  return (
    <Tabs.Root defaultValue="1" width="full">
      <Tabs.List>
        {items.map((item, index) => (
          <Tabs.Trigger key={index} value={item.title}>
            Tab {item.title}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <Box minH="200px" pos="relative" width="full">
        {items.map((item, index) => (
          <Tabs.Content
            _closed={{
              animationDuration: '120ms',
              animationName: 'fade-out, scale-out',
            }}
            _open={{
              animationDuration: '300ms',
              animationName: 'fade-in, scale-in',
            }}
            inset="0"
            key={index}
            position="absolute"
            value={item.title}
          >
            {item.content}
          </Tabs.Content>
        ))}
      </Box>
    </Tabs.Root>
  )
}
