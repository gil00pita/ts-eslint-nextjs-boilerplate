import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Rich Text Editor / Tiptap',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('RichTextEditor')

export { RichTextEditorBasic as Basic } from './examples/rich-text-editor-basic'
export { RichTextEditorControlled as Controlled } from './examples/rich-text-editor-controlled'
export { RichTextEditorWithPreview as Preview } from './examples/rich-text-editor-with-preview'
export { RichTextEditorWithHighlight as Highlight } from './examples/rich-text-editor-with-highlight'
export { RichTextEditorWithPlaceholder as Placeholder } from './examples/rich-text-editor-with-placeholder'
export { RichTextEditorWithDragHandle as DragHandle } from './examples/rich-text-editor-with-drag-handle'
export { RichTextEditorWithPasteHandling as PasteHandling } from './examples/rich-text-editor-with-paste-handling'
export { RichTextEditorWithAutosave as Autosave } from './examples/rich-text-editor-with-autosave'
export { RichTextEditorWithBubbleMenu as BubbleMenu } from './examples/rich-text-editor-with-bubble-menu'
export { RichTextEditorWithTask as Task } from './examples/rich-text-editor-with-task'
export { RichTextEditorWithCharacterCount as CharacterCount } from './examples/rich-text-editor-with-character-count'
export { RichTextEditorWithImage as Image } from './examples/rich-text-editor-with-image'
export { RichTextEditorWithCode as Code } from './examples/rich-text-editor-with-code'
export { RichTextEditorWithHashtags as Hashtags } from './examples/rich-text-editor-with-hashtags'
export { RichTextEditorWithEmoji as Emoji } from './examples/rich-text-editor-with-emoji'
export { RichTextEditorWithSlashCommands as SlashCommands } from './examples/rich-text-editor-with-slash-commands'
export { RichTextEditorWithMentions as Mentions } from './examples/rich-text-editor-with-mentions'
export { RichTextEditorWithMode as Mode } from './examples/rich-text-editor-with-mode'
export { RichTextEditorComposition as Composition } from './examples/rich-text-editor-composition'
