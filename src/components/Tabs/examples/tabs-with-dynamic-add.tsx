'use client'

import { Button, CloseButton, Heading, Tabs, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { LuPlus } from 'react-icons/lu'

interface Item {
  id: string
  title: string
  content: React.ReactNode
}

const items: Item[] = [
  { content: 'Tab Content', id: '1', title: 'Tab' },
  { content: 'Tab Content', id: '2', title: 'Tab' },
  { content: 'Tab Content', id: '3', title: 'Tab' },
  { content: 'Tab Content', id: '4', title: 'Tab' },
]

const uuid = () => {
  return Math.random().toString(36).substring(2, 15)
}

export const TabsWithDynamicAdd = () => {
  const [tabs, setTabs] = useState<Item[]>(items)
  const [selectedTab, setSelectedTab] = useState<string | null>(items[0].id)

  const addTab = () => {
    const newTabs = [...tabs]

    const uid = uuid()

    newTabs.push({
      content: `Tab Body`,
      id: uid,
      title: `Tab`,
    })

    setTabs(newTabs)
    setSelectedTab(newTabs[newTabs.length - 1].id)
  }

  const removeTab = (id: string) => {
    if (tabs.length > 1) {
      const newTabs = [...tabs].filter((tab) => tab.id !== id)
      setTabs(newTabs)
    }
  }

  return (
    <Tabs.Root
      onValueChange={(e) => setSelectedTab(e.value)}
      size="sm"
      value={selectedTab}
      variant="outline"
    >
      <Tabs.List flex="1 1 auto">
        {tabs.map((item) => (
          <Tabs.Trigger key={item.id} value={item.id}>
            {item.title}{' '}
            <CloseButton
              as="span"
              me="-2"
              onClick={(e) => {
                e.stopPropagation()
                removeTab(item.id)
              }}
              role="button"
              size="2xs"
            />
          </Tabs.Trigger>
        ))}
        <Button alignSelf="center" ms="2" onClick={addTab} size="2xs" variant="ghost">
          <LuPlus /> Add Tab
        </Button>
      </Tabs.List>

      <Tabs.ContentGroup>
        {tabs.map((item) => (
          <Tabs.Content key={item.id} value={item.id}>
            <Heading my="6" size="xl">
              {item.content} {item.id}
            </Heading>
            <Text>
              Dolore ex esse laboris elit magna esse sunt. Pariatur in veniam Lorem est occaecat do
              magna nisi mollit ipsum sit adipisicing fugiat ex. Pariatur ullamco exercitation ea
              qui adipisicing. Id cupidatat aute id ut excepteur exercitation magna pariatur. Mollit
              irure irure reprehenderit pariatur eiusmod proident Lorem deserunt duis cillum mollit.
            </Text>
          </Tabs.Content>
        ))}
      </Tabs.ContentGroup>
    </Tabs.Root>
  )
}
