'use client'

import { createTreeCollection, TreeView } from '@chakra-ui/react'
import { useState } from 'react'
import { LuFile, LuFolder, LuLoaderCircle } from 'react-icons/lu'

// mock api result
const response: Record<string, Node[]> = {
  node_modules: [
    { id: 'zag-js', name: 'zag-js' },
    { id: 'pandacss', name: 'panda' },
    { childrenCount: 2, id: '@types', name: '@types' },
  ],
  'node_modules/@types': [
    { id: 'react', name: 'react' },
    { id: 'react-dom', name: 'react-dom' },
  ],
  src: [
    { id: 'app.tsx', name: 'app.tsx' },
    { id: 'index.ts', name: 'index.ts' },
  ],
}

// function to load children of a node
function loadChildren(details: TreeView.LoadChildrenDetails<Node>): Promise<Node[]> {
  const value = details.valuePath.join('/')
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response[value] ?? [])
    }, 1200)
  })
}

export const TreeViewAsync = () => {
  const [collection, setCollection] = useState(initialCollection)
  return (
    <TreeView.Root
      collection={collection}
      loadChildren={loadChildren}
      onLoadChildrenComplete={(e) => setCollection(e.collection)}
    >
      <TreeView.Label>Tree</TreeView.Label>
      <TreeView.Tree>
        <TreeView.Node<Node>
          indentGuide={<TreeView.BranchIndentGuide />}
          render={({ node, nodeState }) =>
            nodeState.isBranch ? (
              <TreeView.BranchControl>
                {nodeState.loading ? (
                  <LuLoaderCircle style={{ animation: 'spin 1s infinite' }} />
                ) : (
                  <LuFolder />
                )}
                <TreeView.BranchText>{node.name}</TreeView.BranchText>
              </TreeView.BranchControl>
            ) : (
              <TreeView.Item>
                <LuFile />
                <TreeView.ItemText>{node.name}</TreeView.ItemText>
              </TreeView.Item>
            )
          }
        />
      </TreeView.Tree>
    </TreeView.Root>
  )
}

interface Node {
  id: string
  name: string
  children?: Node[]
  childrenCount?: number
}

const initialCollection = createTreeCollection<Node>({
  nodeToString: (node) => node.name,
  nodeToValue: (node) => node.id,
  rootNode: {
    children: [
      { childrenCount: 3, id: 'node_modules', name: 'node_modules' },
      { childrenCount: 2, id: 'src', name: 'src' },
      { id: 'panda.config', name: 'panda.config.ts' },
      { id: 'package.json', name: 'package.json' },
      { id: 'renovate.json', name: 'renovate.json' },
      { id: 'readme.md', name: 'README.md' },
    ],
    id: 'ROOT',
    name: '',
  },
})
