'use client'

import { mergeAttributes, Node, nodeInputRule, nodePasteRule } from '@tiptap/core'
import { type NodeViewProps, ReactNodeViewRenderer, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import { RichTextEditor } from '@/ui/rich-text-editor'

export const RichTextEditorWithHashtags = () => {
  const initialContent = `<p>Type #chakra or #react and press space, it becomes a tag. Try pasting: #tiptap #awesome</p>`
  const preprocessedContent = preprocessContent(initialContent, '#')

  const editor = useEditor({
    content: preprocessedContent,
    extensions: [StarterKit, Hashtag],
    immediatelyRender: false,
    shouldRerenderOnTransaction: true,
  })

  if (!editor) return null
  return (
    <RichTextEditor.Root border="1px solid" borderColor="border" editor={editor} rounded="md">
      <RichTextEditor.Content />
    </RichTextEditor.Root>
  )
}

interface HashtagOptions {
  trigger: string
}
interface HashtagAttributes {
  tag: string
}

const Hashtag = Node.create<HashtagOptions>({
  addAttributes() {
    return {
      tag: {
        default: '',
        parseHTML: (element) => element.getAttribute('data-tag'),
        renderHTML: (attributes) => {
          return { 'data-tag': attributes.tag }
        },
      },
    }
  },
  addInputRules() {
    const trigger = this.options.trigger
    return [
      nodeInputRule({
        find: new RegExp(`(${trigger}[a-zA-Z0-9_]+)\\s$`),
        getAttributes: (match) => ({
          tag: match[1].substring(trigger.length),
        }),
        type: this.type,
      }),
    ]
  },
  addNodeView() {
    return ReactNodeViewRenderer(HashtagComponent)
  },
  addOptions() {
    return { trigger: '#' }
  },

  addPasteRules() {
    const trigger = this.options.trigger
    return [
      nodePasteRule({
        find: new RegExp(`${trigger}([a-zA-Z0-9_]+)`, 'g'),
        getAttributes: (match) => ({ tag: match[1] }),
        type: this.type,
      }),
    ]
  },

  atom: true,

  group: 'inline',

  inline: true,

  name: 'hashtag',

  parseHTML() {
    return [
      {
        getAttrs: (element) => {
          if (typeof element === 'string') return false
          return {
            tag: element.getAttribute('data-tag') || '',
          }
        },
        tag: "span[data-type='hashtag']",
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'span',
      mergeAttributes(HTMLAttributes, {
        'data-tag': HTMLAttributes.tag,
        'data-type': 'hashtag',
      }),
      `${this.options.trigger}${HTMLAttributes.tag}`,
    ]
  },
})

function HashtagComponent({ node }: NodeViewProps) {
  const { tag } = node.attrs as HashtagAttributes
  return `#${tag}`
}

function preprocessContent(content: string, trigger: string = '#'): string {
  const regex = new RegExp(`${trigger}([a-zA-Z0-9_]+)`, 'g')

  return content.replace(regex, (_match, tag) => {
    return `<span data-type="hashtag" data-tag="${tag}">${trigger}${tag}</span>`
  })
}
