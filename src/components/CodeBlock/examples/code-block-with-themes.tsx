'use client'

import type { HighlighterGeneric } from 'shiki'

import { ClientOnly, CodeBlock, createShikiAdapter } from '@chakra-ui/react'

import { useColorMode } from '@/ui/color-mode'

const file = {
  code: `
<div class="container">
  <h1>Hello, world!</h1>
</div>
`,
  language: 'html',
  title: 'index.html',
}

export const CodeBlockWithThemes = () => {
  const { colorMode } = useColorMode()

  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      <ClientOnly fallback={<div>Loading...</div>}>
        {() => (
          <CodeBlock.Root
            code={file.code}
            language={file.language}
            meta={{ colorScheme: colorMode }}
          >
            <CodeBlock.Content bg="bg">
              <CodeBlock.Code>
                <CodeBlock.CodeText />
              </CodeBlock.Code>
            </CodeBlock.Content>
          </CodeBlock.Root>
        )}
      </ClientOnly>
    </CodeBlock.AdapterProvider>
  )
}

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import('shiki')
    return createHighlighter({
      langs: ['tsx', 'scss', 'html', 'bash', 'json'],
      themes: ['github-dark', 'github-light'],
    })
  },
  theme: {
    dark: 'github-dark',
    light: 'github-light',
  },
})
