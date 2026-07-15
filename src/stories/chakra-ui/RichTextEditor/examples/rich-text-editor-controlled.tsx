'use client'

import { Box, Stack } from '@chakra-ui/react'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import TextAlign from '@tiptap/extension-text-align'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useState } from 'react'

import { Control, RichTextEditor } from '@/ui/rich-text-editor'

export const RichTextEditorControlled = () => {
  const [content, setContent] = useState<string>('<p>Edit here...</p>')

  const editor = useEditor({
    content,
    extensions: [
      StarterKit.configure({ link: { openOnClick: false } }),
      Subscript,
      Superscript,
      TextAlign.configure({ types: ['paragraph', 'heading'] }),
    ],
    immediatelyRender: false,
    onUpdate({ editor }) {
      setContent(editor.getHTML())
    },
    shouldRerenderOnTransaction: true,
  })

  if (!editor) return null

  return (
    <Stack maxW="3xl">
      <RichTextEditor.Root editor={editor} maxHeight="2xl">
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlGroup>
            <Control.Bold />
            <Control.Italic />
            <Control.Underline />
            <Control.Strikethrough />
            <Control.Code />
          </RichTextEditor.ControlGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor.Root>

      <Box bg="bg.muted" flex="1" p="4">
        <Box as="pre" textStyle="sm" whiteSpace="pre-wrap" wordWrap="break-word">
          {content}
        </Box>
      </Box>
    </Stack>
  )
}
