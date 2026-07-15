'use client'

import { createTreeCollection, For, TreeView, Wrap } from '@chakra-ui/react'
import { LuFile, LuFolder } from 'react-icons/lu'

import { colorPalettes } from '@/utils/storybook/color-palettes'

export const TreeViewWithColors = () => {
  return (
    <Wrap gap="8">
      <For each={colorPalettes}>
        {(colorPalette) => (
          <TreeView.Root
            collection={collection}
            colorPalette={colorPalette}
            defaultSelectedValue={['node_modules']}
            key={colorPalette}
            maxW="xs"
            size="sm"
          >
            <TreeView.Label>Tree (colorPalette={colorPalette})</TreeView.Label>
            <TreeView.Tree>
              <TreeView.Node
                render={({ node, nodeState }) =>
                  nodeState.isBranch ? (
                    <TreeView.BranchControl>
                      <LuFolder />
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
        )}
      </For>
    </Wrap>
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
