'use client'

import { Tabs } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export const TabsLazyMounted = () => {
  return (
    <Tabs.Root defaultValue="tab-1" lazyMount unmountOnExit>
      <Tabs.List>
        <Tabs.Trigger value="tab-1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab-2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab-3">Tab 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab-1">
        Tab 1: Content <TickValue />
      </Tabs.Content>
      <Tabs.Content value="tab-2">
        Tab 2: Content <TickValue />
      </Tabs.Content>
      <Tabs.Content value="tab-3">
        Tab 3: Content <TickValue />
      </Tabs.Content>
    </Tabs.Root>
  )
}

const TickValue = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setValue((v) => v + 1)
    }, 1000)
    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  return <span style={{ color: 'tomato', fontWeight: 'bold', padding: 4 }}>{value}</span>
}
