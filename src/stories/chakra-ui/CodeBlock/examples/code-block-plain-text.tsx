'use client'

import { CodeBlock, Float, IconButton, Span } from '@chakra-ui/react'

const file = {
  code: 'npm install @chakra-ui/react',
  language: 'bash',
  title: 'npm install @chakra-ui/react',
}

export const CodeBlockPlainText = () => {
  return (
    <CodeBlock.Root code={file.code} display="inline-flex" language={file.language}>
      <CodeBlock.Content>
        <Float offsetX="6" placement="middle-end" zIndex="1">
          <CodeBlock.CopyTrigger asChild>
            <IconButton size="2xs" variant="ghost">
              <CodeBlock.CopyIndicator />
            </IconButton>
          </CodeBlock.CopyTrigger>
        </Float>
        <CodeBlock.Code pe="10">
          <Span color="fg.muted" ms="4" userSelect="none">
            $
          </Span>
          <CodeBlock.CodeText display="inline-block" />
        </CodeBlock.Code>
      </CodeBlock.Content>
    </CodeBlock.Root>
  )
}
