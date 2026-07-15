'use client'

import {
  createTreeCollection,
  Menu,
  Portal,
  TreeView,
  useTreeViewContext,
  useTreeViewNodeContext,
  useTreeViewStyles,
} from '@chakra-ui/react'
import { useId } from 'react'
import { LuFile, LuFolder } from 'react-icons/lu'

interface TreeNodeContextMenuProps extends Menu.RootProps {
  uid: string
  node: Node
  children: React.ReactNode
}

const TreeNodeContextMenu = (props: TreeNodeContextMenuProps) => {
  const { children, node, uid, ...rest } = props

  const treeView = useTreeViewContext()
  const treeStyles = useTreeViewStyles()
  const nodeState = useTreeViewNodeContext()

  const attrs = nodeState.isBranch
    ? treeView.getBranchControlProps({ indexPath: nodeState.indexPath, node })
    : treeView.getItemProps({ indexPath: nodeState.indexPath, node })

  const styles = nodeState.isBranch ? treeStyles.branchControl : treeStyles.item

  return (
    <Menu.Root {...rest} ids={{ contextTrigger: getNodeId(uid, node.id) }}>
      <Menu.ContextTrigger as="div" {...attrs} css={styles}>
        {children}
      </Menu.ContextTrigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="rename">Rename</Menu.Item>
            <Menu.Item value="delete">Delete</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

const getNodeId = (uid: string, node: string) => `${uid}/${node}`

export const TreeViewContextMenu = () => {
  const uid = useId()
  return (
    <TreeView.Root
      collection={collection}
      ids={{ node: (value) => getNodeId(uid, value) }}
      maxW="sm"
    >
      <TreeView.Label>Tree</TreeView.Label>
      <TreeView.Tree>
        <TreeView.Node
          indentGuide={<TreeView.BranchIndentGuide />}
          render={({ node, nodeState }) =>
            nodeState.isBranch ? (
              <TreeNodeContextMenu node={node} uid={uid}>
                <LuFolder />
                <TreeView.BranchText>{node.name}</TreeView.BranchText>
              </TreeNodeContextMenu>
            ) : (
              <TreeNodeContextMenu node={node} uid={uid}>
                <LuFile />
                <TreeView.ItemText>{node.name}</TreeView.ItemText>
              </TreeNodeContextMenu>
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
}

const collection = createTreeCollection<Node>({
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
