'use client'

import type { HighlighterGeneric } from 'shiki'

import { CodeBlock, createShikiAdapter, IconButton } from '@chakra-ui/react'

const file = {
  code: `
const greeting = "Hello, World! I am a long line of text that will wrap to the next line."

function sayHello() {
  console.log(greeting)
}

sayHello()
`,
  language: 'tsx',
  title: 'index.tsx',
}

export const CodeBlockWithWordWrap = () => {
  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      <CodeBlock.Root code={file.code} language={file.language} maxW="md" meta={{ wordWrap: true }}>
        <CodeBlock.Header>
          <CodeBlock.Title>{file.title}</CodeBlock.Title>
          <CodeBlock.CopyTrigger asChild>
            <IconButton size="2xs" variant="ghost">
              <CodeBlock.CopyIndicator />
            </IconButton>
          </CodeBlock.CopyTrigger>
        </CodeBlock.Header>
        <CodeBlock.Content>
          <CodeBlock.Code>
            <CodeBlock.CodeText />
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </CodeBlock.AdapterProvider>
  )
}

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import('shiki')
    return createHighlighter({
      langs: ['tsx', 'scss', 'html', 'bash', 'json'],
      themes: ['github-dark'],
    })
  },
  theme: 'github-dark',
})
