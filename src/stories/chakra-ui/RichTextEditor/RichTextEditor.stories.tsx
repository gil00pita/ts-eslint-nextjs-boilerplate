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
  title: 'Typography / Rich Text Editor / Tiptap',
} satisfies Meta

export const Playground = createComponentPlayground('RichTextEditor')

export { RichTextEditorBasic as Basic } from './examples/rich-text-editor-basic'
export { RichTextEditorComposition as Composition } from './examples/rich-text-editor-composition'
export { RichTextEditorControlled as Controlled } from './examples/rich-text-editor-controlled'
export { RichTextEditorWithAutosave as Autosave } from './examples/rich-text-editor-with-autosave'
export { RichTextEditorWithBubbleMenu as BubbleMenu } from './examples/rich-text-editor-with-bubble-menu'
export { RichTextEditorWithCharacterCount as CharacterCount } from './examples/rich-text-editor-with-character-count'
export { RichTextEditorWithCode as Code } from './examples/rich-text-editor-with-code'
export { RichTextEditorWithDragHandle as DragHandle } from './examples/rich-text-editor-with-drag-handle'
export { RichTextEditorWithEmoji as Emoji } from './examples/rich-text-editor-with-emoji'
export { RichTextEditorWithHashtags as Hashtags } from './examples/rich-text-editor-with-hashtags'
export { RichTextEditorWithHighlight as Highlight } from './examples/rich-text-editor-with-highlight'
export { RichTextEditorWithImage as Image } from './examples/rich-text-editor-with-image'
export { RichTextEditorWithMentions as Mentions } from './examples/rich-text-editor-with-mentions'
export { RichTextEditorWithMode as Mode } from './examples/rich-text-editor-with-mode'
export { RichTextEditorWithPasteHandling as PasteHandling } from './examples/rich-text-editor-with-paste-handling'
export { RichTextEditorWithPlaceholder as Placeholder } from './examples/rich-text-editor-with-placeholder'
export { RichTextEditorWithPreview as Preview } from './examples/rich-text-editor-with-preview'
export { RichTextEditorWithSlashCommands as SlashCommands } from './examples/rich-text-editor-with-slash-commands'
export { RichTextEditorWithTask as Task } from './examples/rich-text-editor-with-task'
