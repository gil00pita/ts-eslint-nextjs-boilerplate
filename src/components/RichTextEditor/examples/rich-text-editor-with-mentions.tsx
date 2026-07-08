'use client'

import Mention from '@tiptap/extension-mention'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import TextAlign from '@tiptap/extension-text-align'
import { TextStyle } from '@tiptap/extension-text-style'
import {
  NodeViewWrapper,
  type ReactNodeViewProps,
  ReactNodeViewRenderer,
  useEditor,
} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import { Control, RichTextEditor } from '@/ui/rich-text-editor'
import {
  createMentionConfig,
  createSuggestionConfig,
  type HashtagItem,
  type MentionItem,
} from '@/ui/rich-text-editor-menu'
import { Tag } from '@/ui/tag'

export const RichTextEditorWithMentions = () => {
  const editor = useEditor({
    content: `<h1>Rich Text Editor with Mentions</h1><p>Type <strong>@</strong> for mentions or <strong>#</strong> for hashtags</p>`,
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Subscript,
      Superscript,
      TextAlign.configure({ types: ['paragraph', 'heading'] }),
      TextStyle,
      CustomMention.configure({
        HTMLAttributes: {
          class: 'mention',
        },
        suggestion: createMentionConfig(MENTION_USERS),
      }),
      HashtagMention.configure({
        HTMLAttributes: {
          class: 'hashtag',
        },
        suggestion: createSuggestionConfig('#', (query) =>
          HASHTAGS.filter((hashtag) => hashtag.label.toLowerCase().includes(query.toLowerCase()))
        ),
      }),
    ],
    immediatelyRender: false,
    shouldRerenderOnTransaction: true,
  })

  if (!editor) return null

  return (
    <RichTextEditor.Root borderWidth="1px" editor={editor} rounded="sm">
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlGroup>
          <Control.Bold />
          <Control.Italic />
          <Control.Strikethrough />
          <Control.Code />
        </RichTextEditor.ControlGroup>

        <RichTextEditor.ControlGroup>
          <Control.H1 />
          <Control.H2 />
          <Control.H3 />
        </RichTextEditor.ControlGroup>

        <RichTextEditor.ControlGroup>
          <Control.BulletList />
          <Control.OrderedList />
          <Control.Blockquote />
        </RichTextEditor.ControlGroup>

        <RichTextEditor.ControlGroup>
          <Control.Undo />
          <Control.Redo />
        </RichTextEditor.ControlGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor.Root>
  )
}

const MentionComponent = (props: ReactNodeViewProps) => {
  return (
    <NodeViewWrapper as="span">
      <Tag colorPalette="orange" mr="1" size="lg">
        @{props.node.attrs.label ?? props.node.attrs.id}
      </Tag>
    </NodeViewWrapper>
  )
}

const CustomMention = Mention.extend({
  addNodeView() {
    return ReactNodeViewRenderer(MentionComponent)
  },
})

const HashtagMention = Mention.extend({
  addNodeView() {
    return ReactNodeViewRenderer((props) => (
      <NodeViewWrapper as="span">#{props.node.attrs.label ?? props.node.attrs.id}</NodeViewWrapper>
    ))
  },
  name: 'hashtag',
})

const MENTION_USERS: MentionItem[] = [
  { email: 'alice@example.com', id: '1', label: 'Alice Johnson' },
  { email: 'bob@example.com', id: '2', label: 'Bob Smith' },
  { email: 'charlie@example.com', id: '3', label: 'Charlie Davis' },
  { email: 'diana@example.com', id: '4', label: 'Diana Wilson' },
  { email: 'ethan@example.com', id: '5', label: 'Ethan Brown' },
  { email: 'fiona@example.com', id: '6', label: 'Fiona Martinez' },
  { email: 'george@example.com', id: '7', label: 'George Anderson' },
  { email: 'hannah@example.com', id: '8', label: 'Hannah Taylor' },
]

const HASHTAGS: HashtagItem[] = [
  { description: 'React.js framework', id: 'react', label: 'react' },
  { description: 'TypeScript language', id: 'typescript', label: 'typescript' },
  { description: 'Next.js framework', id: 'nextjs', label: 'nextjs' },
  { description: 'Chakra UI library', id: 'chakra', label: 'chakra' },
  { description: 'JavaScript language', id: 'javascript', label: 'javascript' },
  { description: 'CSS styling', id: 'css', label: 'css' },
]
