'use client'

import type { HighlighterGeneric } from 'shiki'

import { CodeBlock, createShikiAdapter, IconButton } from '@chakra-ui/react'
import { RxCodesandboxLogo } from 'react-icons/rx'

const file = {
  code: `
<div class="container">
  <h1>Hello, world!</h1>
</div>
`,
  language: 'html',
  title: 'index.html',
}

export const CodeBlockWithCustomAction = () => {
  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      <CodeBlock.Root code={file.code} language={file.language}>
        <CodeBlock.Header>
          <CodeBlock.Title>{file.title}</CodeBlock.Title>
          <CodeBlock.CopyTrigger asChild>
            <IconButton size="2xs" variant="ghost">
              <CodeBlock.CopyIndicator />
            </IconButton>
          </CodeBlock.CopyTrigger>
          <IconButton
            aria-label="Open in CodeSandbox"
            onClick={() => {
              alert('Open in CodeSandbox')
            }}
            size="2xs"
            variant="ghost"
          >
            <RxCodesandboxLogo />
          </IconButton>
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
