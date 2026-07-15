import type { Meta } from '@storybook/react-vite'

import { Box } from '@chakra-ui/react'

import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'

export default {
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
  title: 'Collections / TreeView',
} satisfies Meta

export const Playground = createComponentPlayground('TreeView')

export { TreeViewAsync as LazyLoad } from './examples/tree-view-async'
export { TreeViewBasic as Basic } from './examples/tree-view-basic'
export { TreeViewCheckbox as CheckboxTree } from './examples/tree-view-checkbox'
export { TreeViewCollapseAnimation as CollapseAnimation } from './examples/tree-view-collapse-animation'
export { TreeViewContextMenu as ContextMenu } from './examples/tree-view-context-menu'
export { TreeViewControlledExpansion as ControlledExpansion } from './examples/tree-view-controlled-expansion'
export { TreeViewCustomIcon as CustomIcon } from './examples/tree-view-custom-icon'
export { TreeViewDefaultExpanded as DefaultExpanded } from './examples/tree-view-default-expanded'
export { TreeViewDisabledNode as DisabledNode } from './examples/tree-view-disabled-node'
export { TreeViewExpandCollapseAll as ExpandCollapseAll } from './examples/tree-view-expand-collapse-all'
export { TreeViewExpandIcon as ExpandIcon } from './examples/tree-view-expand-icon'
export { TreeViewExpandedStyling as ExpandedStyling } from './examples/tree-view-expanded-styling'
export { TreeViewExplicitExpand as ExplicitExpand } from './examples/tree-view-explicit-expand'
export { TreeViewMultiSelect as MultiSelect } from './examples/tree-view-multi-select'
export { TreeViewMutation as Mutation } from './examples/tree-view-mutation'
export { TreeViewRemoveIndentation as RemoveIndentation } from './examples/tree-view-remove-indentation'
export { TreeViewWithColors as Colors } from './examples/tree-view-with-colors'
export { TreeViewWithFilter as Filter } from './examples/tree-view-with-filter'
export { TreeViewWithLinks as Links } from './examples/tree-view-with-links'
export { TreeViewWithSizes as Sizes } from './examples/tree-view-with-sizes'
export { TreeViewWithStore as Store } from './examples/tree-view-with-store'
export { TreeViewWithVariants as Variants } from './examples/tree-view-with-variants'
