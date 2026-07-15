'use client'

import type { HighlighterGeneric } from 'shiki'

import { CodeBlock, createShikiAdapter, IconButton, Stack, Tabs, useTabs } from '@chakra-ui/react'
import { useEffect } from 'react'

const files = [
  { code: 'npm install @chakra-ui/react', language: 'bash', title: 'npm' },
  {
    code: 'yarn add @chakra-ui/react',
    language: 'bash',
    title: 'yarn',
  },
  {
    code: 'bun install @chakra-ui/react',
    language: 'bash',
    title: 'bun',
  },
]

export const CodeBlockWithTabsSync = () => {
  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      <Stack gap="8">
        <CodeTabs />
        <CodeTabs />
      </Stack>
    </CodeBlock.AdapterProvider>
  )
}

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import('shiki')
    return createHighlighter({
      langs: ['bash'],
      themes: ['github-dark'],
    })
  },
  theme: 'github-dark',
})

const CodeTabs = () => {
  const tabs = useTabsSync({
    defaultValue: files[0].title,
    storageKey: 'code-tabs-sync',
  })

  const activeTab = files.find((file) => file.title === tabs.value) || files[0]
  const otherTabs = files.filter((file) => file.title !== tabs.value)

  return (
    <Tabs.RootProvider size="sm" value={tabs} variant="line">
      <CodeBlock.Root code={activeTab.code} language={activeTab.language}>
        <CodeBlock.Header borderBottomWidth="1px">
          <Tabs.List border="0" ms="-1" w="full">
            {files.map((file) => (
              <Tabs.Trigger colorPalette="teal" key={file.title} textStyle="xs" value={file.title}>
                {file.title}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          <CodeBlock.CopyTrigger asChild>
            <IconButton size="2xs" variant="ghost">
              <CodeBlock.CopyIndicator />
            </IconButton>
          </CodeBlock.CopyTrigger>
        </CodeBlock.Header>
        <CodeBlock.Content>
          {otherTabs.map((file) => (
            <Tabs.Content key={file.title} value={file.title} />
          ))}
          <Tabs.Content pt="1" value={activeTab.title}>
            <CodeBlock.Code>
              <CodeBlock.CodeText />
            </CodeBlock.Code>
          </Tabs.Content>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </Tabs.RootProvider>
  )
}

function useTabsSync(props: { defaultValue: string; storageKey: string }) {
  const { defaultValue, storageKey } = props

  const tabs = useTabs({
    defaultValue,
    onValueChange(details) {
      if (details.value) {
        localStorage.setItem(storageKey, details.value)
        dispatchEvent(
          new StorageEvent('storage', {
            key: storageKey,
            newValue: details.value,
          })
        )
      }
    },
  })

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      requestAnimationFrame(() => {
        if (e.key === storageKey && e.newValue) {
          tabs.setValue(e.newValue)
        }
      })
    }
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [storageKey, tabs])

  return tabs
}
