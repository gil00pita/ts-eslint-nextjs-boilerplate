'use client'

import { Extension } from '@tiptap/core'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import TextAlign from '@tiptap/extension-text-align'
import { TextStyle } from '@tiptap/extension-text-style'
import { PluginKey } from '@tiptap/pm/state'
import { ReactRenderer, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Suggestion } from '@tiptap/suggestion'
import { LuCode, LuHash, LuList, LuListOrdered, LuQuote } from 'react-icons/lu'

import { Control, RichTextEditor } from '@/ui/rich-text-editor'
import { type FloatingMenuProps, SuggestionMenu } from '@/ui/rich-text-editor-menu'

export const RichTextEditorWithSlashCommands = () => {
  const editor = useEditor({
    content: `<h1>Slash Commands Editor</h1><p>Type <strong>/</strong> to see commands</p>`,
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
      SlashCommandsExtension,
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

interface SlashCommand {
  id: string
  label: string
  description: string
  icon: any
  command: (props: { editor: any; range: any }) => void
}

const SLASH_COMMANDS: SlashCommand[] = [
  {
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).setNode('heading', { level: 1 }).run()
    },
    description: 'Large section heading',
    icon: LuHash,
    id: 'heading1',
    label: 'Heading 1',
  },
  {
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).setNode('heading', { level: 2 }).run()
    },
    description: 'Medium section heading',
    icon: LuHash,
    id: 'heading2',
    label: 'Heading 2',
  },
  {
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).setNode('heading', { level: 3 }).run()
    },
    description: 'Small section heading',
    icon: LuHash,
    id: 'heading3',
    label: 'Heading 3',
  },
  {
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleBulletList().run()
    },
    description: 'Create a bullet list',
    icon: LuList,
    id: 'bullet',
    label: 'Bullet List',
  },
  {
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleOrderedList().run()
    },
    description: 'Create a numbered list',
    icon: LuListOrdered,
    id: 'numbered',
    label: 'Numbered List',
  },
  {
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleBlockquote().run()
    },
    description: 'Add a blockquote',
    icon: LuQuote,
    id: 'quote',
    label: 'Quote',
  },
  {
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleCodeBlock().run()
    },
    description: 'Add a code block',
    icon: LuCode,
    id: 'code',
    label: 'Code Block',
  },
]

const SlashCommandsExtension = Extension.create({
  addProseMirrorPlugins() {
    return [
      Suggestion({
        char: '/',
        command: ({ editor, props, range }: { editor: any; range: any; props: SlashCommand }) => {
          props.command({ editor, range })
        },
        editor: this.editor,

        items: ({ query }: { query: string }) =>
          SLASH_COMMANDS.filter((command) =>
            command.label.toLowerCase().includes(query.toLowerCase())
          ),

        pluginKey: new PluginKey('slashCommands'),

        render: () => {
          let component: ReactRenderer<HTMLDivElement, FloatingMenuProps> | null = null
          let container: HTMLDivElement | null = null
          let selectedIndex = 0

          return {
            onExit() {
              if (container) container.remove()
              container = null
              if (component) component.destroy()
              component = null
            },

            onKeyDown({ event }) {
              if (!component) return false

              if (event.key === 'ArrowUp') {
                selectedIndex =
                  (selectedIndex - 1 + component.props.items.length) % component.props.items.length
                component.updateProps({ ...component.props, selectedIndex })
                return true
              }

              if (event.key === 'ArrowDown') {
                selectedIndex = (selectedIndex + 1) % component.props.items.length
                component.updateProps({ ...component.props, selectedIndex })
                return true
              }

              if (event.key === 'Enter') {
                const item = component.props.items[selectedIndex]
                if (item) component.props.onSelect(item)
                return true
              }

              if (event.key === 'Escape') return true

              return false
            },

            onStart(props) {
              selectedIndex = 0
              container = document.createElement('div')
              document.body.appendChild(container)

              component = new ReactRenderer(SuggestionMenu, {
                editor: props.editor,
                props: {
                  clientRect: props.clientRect,
                  items: props.items,
                  onSelect: (item: SlashCommand) => props.command(item),
                  selectedIndex,
                },
              })

              container.appendChild(component.element)
            },

            onUpdate(props) {
              if (!component) return
              component.updateProps({
                clientRect: props.clientRect,
                items: props.items,
                onSelect: (item: SlashCommand) => props.command(item),
                selectedIndex,
              })
            },
          }
        },
      }),
    ]
  },

  name: 'slashCommands',
})
