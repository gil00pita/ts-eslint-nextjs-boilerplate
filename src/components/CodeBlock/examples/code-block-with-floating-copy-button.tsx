'use client'

import type { HighlighterGeneric } from 'shiki'

import { CodeBlock, createShikiAdapter, Float, IconButton } from '@chakra-ui/react'

const file = {
  code: `
<div class="container">
  <h1>Hello, world!</h1>
</div>
`,
  language: 'html',
  title: 'index.html',
}

export const CodeBlockWithFloatingCopyButton = () => {
  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      <CodeBlock.Root code={file.code} language={file.language}>
        <CodeBlock.Content>
          <Float offset="5" placement="top-end" zIndex="1">
            <CodeBlock.CopyTrigger asChild>
              <IconButton size="2xs" variant="ghost">
                <CodeBlock.CopyIndicator />
              </IconButton>
            </CodeBlock.CopyTrigger>
          </Float>
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
