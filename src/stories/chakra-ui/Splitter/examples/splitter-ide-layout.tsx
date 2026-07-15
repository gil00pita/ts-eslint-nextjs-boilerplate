'use client'

import type { HighlighterGeneric } from 'shiki'

import { CodeBlock, createShikiAdapter, HStack, Span, Splitter, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { LuFile, LuFolder } from 'react-icons/lu'

type FileNode = {
  name: string
  type: 'file' | 'folder'
  id?: string
  children?: FileNode[]
}

const fileTree: FileNode[] = [
  {
    children: [
      { id: 'app', name: 'App.tsx', type: 'file' },
      { id: 'index', name: 'index.tsx', type: 'file' },
    ],
    name: 'src',
    type: 'folder',
  },
  { id: 'package', name: 'package.json', type: 'file' },
]

export const SplitterIdeLayout = () => {
  const [activeFileId, setActiveFileId] = useState<string>('app')
  const activeFile = fileContents[activeFileId] || fileContents.app

  return (
    <CodeBlockAdapter>
      <Splitter.Root
        borderWidth="1px"
        className="dark"
        colorPalette="gray"
        defaultSize={[20, 80]}
        minH="600px"
        panels={[
          { collapsedSize: 0, collapsible: true, id: 'explorer', minSize: 10 },
          { id: 'editor-terminal', minSize: 50 },
        ]}
      >
        {/* File Explorer */}
        <Splitter.Panel bg="bg" color="fg" id="explorer">
          <Stack gap="1" h="full" overflowX="hidden" overflowY="auto" p="2" width="full">
            <FileTree activeFileId={activeFileId} nodes={fileTree} onFileClick={setActiveFileId} />
          </Stack>
        </Splitter.Panel>

        <Splitter.ResizeTrigger id="explorer:editor-terminal" />

        {/* Editor + Terminal Container */}
        <Splitter.Panel id="editor-terminal">
          <Splitter.Root
            defaultSize={[70, 30]}
            h="full"
            orientation="vertical"
            panels={[
              { id: 'editor', minSize: 30 },
              {
                collapsedSize: 5,
                collapsible: true,
                id: 'terminal',
                minSize: 15,
              },
            ]}
          >
            {/* Editor */}
            <Splitter.Panel id="editor">
              <Editor activeFile={activeFile} activeFileId={activeFileId} fileTree={fileTree} />
            </Splitter.Panel>

            <Splitter.ResizeTrigger id="editor:terminal" />

            {/* Terminal */}
            <Splitter.Panel id="terminal">
              <Terminal output={terminalOutput} />
            </Splitter.Panel>
          </Splitter.Root>
        </Splitter.Panel>
      </Splitter.Root>
    </CodeBlockAdapter>
  )
}

////////////////////////////////////////////////////////////////////////////////

type FileTreeProps = {
  nodes: FileNode[]
  activeFileId: string
  onFileClick: (fileId: string) => void
}

const FileTree = ({ activeFileId, nodes, onFileClick }: FileTreeProps) => {
  const renderFileTree = (fileNodes: FileNode[], level = 0) => {
    return fileNodes.map((node) => {
      if (node.type === 'folder') {
        return (
          <Stack gap="0.5" key={node.name} ps={level > 0 ? '4' : '0'} width="full">
            <HStack flexShrink="0" gap="2" px="2" py="1" textStyle="sm">
              <LuFolder style={{ flexShrink: 0 }} />
              <Span truncate>{node.name}</Span>
            </HStack>
            {node.children && <Stack gap="0.5">{renderFileTree(node.children, level + 1)}</Stack>}
          </Stack>
        )
      }

      const isActive = node.id === activeFileId
      return (
        <HStack
          _current={{ bg: 'bg.emphasized', color: 'yellow.solid' }}
          cursor="pointer"
          data-current={isActive || undefined}
          flexShrink="0"
          gap="2"
          key={node.id}
          onClick={() => node.id && onFileClick(node.id)}
          pe="2"
          ps={level * 4 + 2}
          py="1"
          rounded="l2"
          textStyle="sm"
          width="full"
        >
          <LuFile style={{ flexShrink: 0 }} />
          <Span truncate>{node.name}</Span>
        </HStack>
      )
    })
  }

  return (
    <Stack gap="0.5" width="full">
      {renderFileTree(nodes)}
    </Stack>
  )
}

////////////////////////////////////////////////////////////////////////////////

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import('shiki')
    return createHighlighter({
      langs: ['tsx', 'ts', 'js', 'json', 'bash'],
      themes: ['github-dark'],
    })
  },
  theme: 'github-dark',
})

const CodeBlockAdapter = (props: React.PropsWithChildren) => (
  <CodeBlock.AdapterProvider value={shikiAdapter}>{props.children}</CodeBlock.AdapterProvider>
)

type EditorProps = {
  activeFileId: string
  activeFile: { code: string; language: string }
  fileTree: FileNode[]
}

const Editor = ({ activeFile, activeFileId, fileTree }: EditorProps) => {
  const fileName =
    fileTree
      .flatMap((node) => (node.type === 'folder' ? node.children || [] : [node]))
      .find((node) => node.id === activeFileId)?.name || 'App.tsx'

  return (
    <CodeBlock.Root
      code={activeFile.code}
      h="full"
      language={activeFile.language}
      rounded="none"
      size="sm"
    >
      <CodeBlock.Header>
        <CodeBlock.Title>{fileName}</CodeBlock.Title>
      </CodeBlock.Header>
      <CodeBlock.Content>
        <CodeBlock.Code>
          <CodeBlock.CodeText />
        </CodeBlock.Code>
      </CodeBlock.Content>
    </CodeBlock.Root>
  )
}

////////////////////////////////////////////////////////////////////////////////

type TerminalProps = {
  output: string
}

const Terminal = ({ output }: TerminalProps) => {
  return (
    <CodeBlock.Root code={output} h="full" language="bash" rounded="none" size="sm">
      <CodeBlock.Header>
        <CodeBlock.Title>Terminal</CodeBlock.Title>
      </CodeBlock.Header>
      <CodeBlock.Content>
        <CodeBlock.Code>
          <CodeBlock.CodeText />
        </CodeBlock.Code>
      </CodeBlock.Content>
    </CodeBlock.Root>
  )
}

////////////////////////////////////////////////////////////////////////////////

const fileContents: Record<string, { code: string; language: string }> = {
  app: {
    code: `import { useState } from "react"
  
  export const Counter = () => {
    const [count, setCount] = useState(0)
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
    )
  }`,
    language: 'tsx',
  },
  index: {
    code: `import React from "react"
  import ReactDOM from "react-dom/client"
  import App from "./App"
  
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )`,
    language: 'tsx',
  },
  package: {
    code: `{
    "name": "my-app",
    "version": "1.0.0",
    "scripts": {
      "dev": "vite",
      "build": "vite build"
    },
    "dependencies": {
      "react": "^18.2.0",
      "react-dom": "^18.2.0"
    }
  }`,
    language: 'json',
  },
}

const terminalOutput = `$ npm run dev
  
  > dev@1.0.0 dev
  > vite
  
    VITE v5.0.0  ready in 234 ms
  
    ➜  Local:   http://localhost:5173/
    ➜  Network: use --host to expose
    ➜  press h + enter to show help`
