'use client'

import Placeholder from '@tiptap/extension-placeholder'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import { Control, RichTextEditor } from '@/ui/rich-text-editor'

export const RichTextEditorWithPlaceholder = () => {
  const editor = useEditor({
    content: '',
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Start typing your content here...',
      }),
    ],
    immediatelyRender: false,
    shouldRerenderOnTransaction: true,
  })

  if (!editor) return null

  return (
    <RichTextEditor.Root borderWidth="1px" editor={editor} rounded="l2">
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlGroup>
          <Control.Bold />
          <Control.Italic />
          <Control.Underline />
        </RichTextEditor.ControlGroup>

        <RichTextEditor.ControlGroup>
          <Control.BulletList />
          <Control.OrderedList />
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
