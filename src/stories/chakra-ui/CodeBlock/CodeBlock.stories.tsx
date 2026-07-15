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
  title: 'Typography / CodeBlock',
} satisfies Meta

export const Playground = createComponentPlayground('CodeBlock')

export { CodeBlockBasic as Basic } from './examples/code-block-basic'
export { CodeBlockPlainText as PlainText } from './examples/code-block-plain-text'
export { CodeBlockWithCopyButton as CopyButton } from './examples/code-block-with-copy-button'
export { CodeBlockWithCustomAction as CustomAction } from './examples/code-block-with-custom-action'
export { CodeBlockWithDiff as Diff } from './examples/code-block-with-diff'
export { CodeBlockWithFloatingCopyButton as FloatingCopyButton } from './examples/code-block-with-floating-copy-button'
export { CodeBlockWithHighlightJs as HighlightJs } from './examples/code-block-with-highlight-js'
export { CodeBlockWithHorizontalOverflow as HorizontalOverflow } from './examples/code-block-with-horizontal-overflow'
export { CodeBlockWithLanguageSwitcher as LanguageSwitcher } from './examples/code-block-with-language-switcher'
export { CodeBlockWithLineFocus as LineFocusing } from './examples/code-block-with-line-focus'
export { CodeBlockWithLineHighlight as LineHighlighting } from './examples/code-block-with-line-highlight'
export { CodeBlockWithLineNumbers as LineNumbers } from './examples/code-block-with-line-numbers'
export { CodeBlockWithLineNumbersWordWrap as LineNumbersWordWrap } from './examples/code-block-with-line-numbers-word-wrap'
export { CodeBlockWithMaxLines as MaxLines } from './examples/code-block-with-max-lines'
export { CodeBlockWithOverflowAndOverlay as OverflowAndOverlay } from './examples/code-block-with-overflow-and-overlay'
export { CodeBlockWithSizes as Sizes } from './examples/code-block-with-sizes'
export { CodeBlockWithTabs as Tabs } from './examples/code-block-with-tabs'
export { CodeBlockWithTabsSync as TabsSync } from './examples/code-block-with-tabs-sync'

export { CodeBlockWithThemes as Themes } from './examples/code-block-with-themes'

export { CodeBlockWithTitle as Title } from './examples/code-block-with-title'
export { CodeBlockWithWordWrap as WordWrap } from './examples/code-block-with-word-wrap'
