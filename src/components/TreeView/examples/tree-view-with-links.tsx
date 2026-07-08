'use client'

import { createTreeCollection, TreeView } from '@chakra-ui/react'
import { LuChevronRight, LuExternalLink, LuFile } from 'react-icons/lu'

export const TreeViewWithLinks = () => {
  return (
    <TreeView.Root collection={collection} maxW="2xs">
      <TreeView.Tree>
        <TreeView.Node
          render={({ node, nodeState }) =>
            nodeState.isBranch ? (
              <TreeView.BranchControl>
                <TreeView.BranchText>{node.name}</TreeView.BranchText>
                <TreeView.BranchIndicator>
                  <LuChevronRight />
                </TreeView.BranchIndicator>
              </TreeView.BranchControl>
            ) : (
              <TreeView.Item asChild>
                <a href={node.href}>
                  <LuFile />
                  <TreeView.ItemText>{node.name}</TreeView.ItemText>
                  {node.href?.startsWith('http') && <LuExternalLink size={12} />}
                </a>
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
  href?: string
  children?: Node[]
}

const collection = createTreeCollection<Node>({
  nodeToString: (node) => node.name,
  nodeToValue: (node) => node.id,
  rootNode: {
    children: [
      {
        children: [
          {
            href: '/docs/getting-started',
            id: 'docs/getting-started',
            name: 'Getting Started',
          },
          {
            href: '/docs/installation',
            id: 'docs/installation',
            name: 'Installation',
          },
          {
            children: [
              {
                href: '/docs/components/accordion',
                id: 'docs/components/accordion',
                name: 'Accordion',
              },
              {
                href: '/docs/components/dialog',
                id: 'docs/components/dialog',
                name: 'Dialog',
              },
              {
                href: '/docs/components/menu',
                id: 'docs/components/menu',
                name: 'Menu',
              },
            ],
            id: 'docs/components',
            name: 'Components',
          },
        ],
        id: 'docs',
        name: 'Documentation',
      },
      {
        children: [
          {
            href: '/examples/react',
            id: 'examples/react',
            name: 'React Examples',
          },
          { href: '/examples/vue', id: 'examples/vue', name: 'Vue Examples' },
          {
            href: '/examples/solid',
            id: 'examples/solid',
            name: 'Solid Examples',
          },
        ],
        id: 'examples',
        name: 'Examples',
      },
      {
        children: [
          {
            href: 'https://github.com/chakra-ui/zag',
            id: 'external/github',
            name: 'GitHub Repository',
          },
          {
            href: 'https://www.npmjs.com/package/@zag-js/core',
            id: 'external/npm',
            name: 'NPM Package',
          },
          {
            href: 'https://zagjs.com',
            id: 'external/docs',
            name: 'Official Docs',
          },
        ],
        id: 'external',
        name: 'External Links',
      },
      { href: '/readme', id: 'readme.md', name: 'README.md' },
      { href: '/license', id: 'license', name: 'LICENSE' },
    ],
    id: 'ROOT',
    name: '',
  },
})
