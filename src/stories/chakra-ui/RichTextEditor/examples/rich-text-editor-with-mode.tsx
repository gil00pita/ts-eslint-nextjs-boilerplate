'use client'

import { HStack } from '@chakra-ui/react'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useState } from 'react'

import { Control, createSelectControl, RichTextEditor } from '@/ui/rich-text-editor'

export const RichTextEditorWithMode = () => {
  const [editable, setEditable] = useState(true)

  const editor = useEditor({
    content: `<p>Edit this text...</p>`,
    editable,
    extensions: [StarterKit],
    immediatelyRender: false,
    shouldRerenderOnTransaction: true,
  })

  if (!editor) return null

  const handleModeChange = (newMode: string) => {
    setEditable(newMode === 'edit')
    editor.setEditable(newMode === 'edit')
  }

  return (
    <RichTextEditor.Root borderWidth="1px" editor={editor} rounded="md">
      <HStack borderBottomWidth="1px" justify="space-between" p="2">
        <RichTextEditor.ControlGroup inert={!editable} opacity={!editable ? 0.5 : 1}>
          <Control.Bold />
          <Control.Italic />
          <Control.Underline />
          <Control.Strikethrough />
          <Control.Code />
        </RichTextEditor.ControlGroup>
        <RichTextEditor.ControlGroup>
          <ModePicker
            currentMode={editable ? 'edit' : 'view'}
            onModeChange={handleModeChange}
            width="120px"
          />
        </RichTextEditor.ControlGroup>
      </HStack>

      <RichTextEditor.Content />
    </RichTextEditor.Root>
  )
}

interface ModePickerProps {
  currentMode: string
  onModeChange: (mode: string) => void
  width?: string
}

const ModePicker = (props: ModePickerProps) => {
  const { currentMode, onModeChange, ...rest } = props

  const SelectControl = createSelectControl({
    command: (_editor, value) => {
      onModeChange(value)
    },
    getValue: () => currentMode,
    label: 'Mode',
    options: [
      { label: 'Editing', value: 'edit' },
      { label: 'Viewing', value: 'view' },
    ],
  })

  return <SelectControl {...rest} />
}
