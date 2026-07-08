'use client'

import {
  createTreeCollection,
  HStack,
  IconButton,
  TreeView,
  useTreeViewContext,
} from '@chakra-ui/react'
import { useState } from 'react'
import { LuFile, LuFolder, LuPlus, LuTrash } from 'react-icons/lu'

export const TreeViewMutation = () => {
  const [collection, setCollection] = useState(initialCollection)

  const removeNode = (props: TreeNodeProps) => {
    setCollection(collection.remove([props.indexPath]))
  }

  const addNode = (props: TreeNodeProps) => {
    const { indexPath, node } = props
    if (!collection.isBranchNode(node)) return
    const children = [
      {
        id: `untitled-${Date.now()}`,
        name: `untitled-${node.children?.length}.tsx`,
      },
      ...(node.children || []),
    ]
    setCollection(collection.replace(indexPath, { ...node, children }))
  }

  return (
    <TreeView.Root collection={collection} maxW="sm">
      <TreeView.Label>Tree</TreeView.Label>
      <TreeView.Tree>
        <TreeView.Node
          indentGuide={<TreeView.BranchIndentGuide />}
          render={({ indexPath, node, nodeState }) =>
            nodeState.isBranch ? (
              <TreeView.BranchControl role="">
                <LuFolder />
                <TreeView.BranchText>{node.name}</TreeView.BranchText>
                <TreeNodeActions
                  indexPath={indexPath}
                  node={node}
                  onAdd={addNode}
                  onRemove={removeNode}
                />
              </TreeView.BranchControl>
            ) : (
              <TreeView.Item>
                <LuFile />
                <TreeView.ItemText>{node.name}</TreeView.ItemText>
                <TreeNodeActions
                  indexPath={indexPath}
                  node={node}
                  onAdd={addNode}
                  onRemove={removeNode}
                />
              </TreeView.Item>
            )
          }
        />
      </TreeView.Tree>
    </TreeView.Root>
  )
}

interface TreeNodeProps extends TreeView.NodeProviderProps<Node> {
  onRemove?: (props: TreeView.NodeProviderProps<Node>) => void
  onAdd?: (props: TreeView.NodeProviderProps<Node>) => void
}

const TreeNodeActions = (props: TreeNodeProps) => {
  const { node, onAdd, onRemove } = props
  const tree = useTreeViewContext()
  const isBranch = tree.collection.isBranchNode(node)
  return (
    <HStack
      css={{
        '[role=treeitem]:hover &': { opacity: 1 },
        opacity: 0,
      }}
      gap="0.5"
      position="absolute"
      right="0"
      scale="0.8"
      top="0"
    >
      <IconButton
        aria-label="Remove node"
        onClick={(e) => {
          e.stopPropagation()
          onRemove?.(props)
        }}
        size="xs"
        variant="ghost"
      >
        <LuTrash />
      </IconButton>
      {isBranch && (
        <IconButton
          aria-label="Add node"
          onClick={(e) => {
            e.stopPropagation()
            onAdd?.(props)
            tree.expand([node.id])
          }}
          size="xs"
          variant="ghost"
        >
          <LuPlus />
        </IconButton>
      )}
    </HStack>
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
      {
        children: [
          { id: 'node_modules/zag-js', name: 'zag-js' },
          { id: 'node_modules/pandacss', name: 'panda' },
          {
            children: [
              { id: 'node_modules/@types/react', name: 'react' },
              { id: 'node_modules/@types/react-dom', name: 'react-dom' },
            ],
            id: 'node_modules/@types',
            name: '@types',
          },
        ],
        id: 'node_modules',
        name: 'node_modules',
      },
      {
        children: [
          { id: 'src/app.tsx', name: 'app.tsx' },
          { id: 'src/index.ts', name: 'index.ts' },
        ],
        id: 'src',
        name: 'src',
      },
      { id: 'panda.config', name: 'panda.config.ts' },
      { id: 'package.json', name: 'package.json' },
      { id: 'renovate.json', name: 'renovate.json' },
      { id: 'readme.md', name: 'README.md' },
    ],
    id: 'ROOT',
    name: '',
  },
})
