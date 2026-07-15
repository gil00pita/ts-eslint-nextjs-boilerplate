'use client'

import type { HighlighterGeneric } from 'shiki'

import { CodeBlock, createShikiAdapter, IconButton, Tabs, useTabs } from '@chakra-ui/react'

export const CodeBlockWithTabs = () => {
  const tabs = useTabs({
    defaultValue: 'python',
  })

  const activeTab = files.find((file) => file.language === tabs.value) || files[0]

  const otherTabs = files.filter((file) => file.language !== tabs.value)

  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      <Tabs.RootProvider size="sm" value={tabs} variant="line">
        <CodeBlock.Root code={activeTab.code} language={activeTab.language}>
          <CodeBlock.Header borderBottomWidth="1px">
            <Tabs.List border="0" ms="-1" w="full">
              {files.map((file) => (
                <Tabs.Trigger
                  colorPalette="teal"
                  key={file.language}
                  textStyle="xs"
                  value={file.language}
                >
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
              <Tabs.Content key={file.language} value={file.language} />
            ))}
            <Tabs.Content pt="1" value={activeTab.language}>
              <CodeBlock.Code>
                <CodeBlock.CodeText />
              </CodeBlock.Code>
            </Tabs.Content>
          </CodeBlock.Content>
        </CodeBlock.Root>
      </Tabs.RootProvider>
    </CodeBlock.AdapterProvider>
  )
}

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import('shiki')
    return createHighlighter({
      langs: ['python', 'typescript', 'java'],
      themes: ['github-dark'],
    })
  },
  theme: 'github-dark',
})

const files = [
  { code: "print('Hello, World!')", language: 'python', title: 'Python' },
  {
    code: "console.log('Hello, World!')",
    language: 'typescript',
    title: 'TypeScript',
  },
  {
    code: "System.out.println('Hello, World!');",
    language: 'java',
    title: 'Java',
  },
]
