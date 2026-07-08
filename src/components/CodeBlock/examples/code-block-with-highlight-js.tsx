'use client'

import { CodeBlock, createHighlightJsAdapter } from '@chakra-ui/react'
import hljs from 'highlight.js/lib/core'

const file = {
  code: `
<div class="container">
  <h1>Hello, world!</h1>
</div>
`,
  language: 'html',
  title: 'index.html',
}

export const CodeBlockWithHighlightJs = () => {
  return (
    <CodeBlock.AdapterProvider value={highlightJsAdapter}>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css"
        rel="stylesheet"
      />
      <CodeBlock.Root code={file.code} language={file.language}>
        <CodeBlock.Header>
          <CodeBlock.Title>{file.title}</CodeBlock.Title>
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

const highlightJsAdapter = createHighlightJsAdapter<typeof hljs>({
  async load() {
    const languages = {
      html: () => import('highlight.js/lib/languages/xml'),
      tsx: () => import('highlight.js/lib/languages/typescript'),
    }
    await Promise.all(
      Object.entries(languages).map(async ([language, file]) => {
        const { default: langModule } = await file()
        hljs.registerLanguage(language, langModule)
      })
    )
    return hljs
  },
})
