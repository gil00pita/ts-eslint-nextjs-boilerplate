'use client'

import { HStack } from '@chakra-ui/react'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { LuArrowLeft, LuArrowRight, LuListChecks, LuPlus } from 'react-icons/lu'

import { createBooleanControl, RichTextEditor } from '@/ui/rich-text-editor'

export const RichTextEditorWithTask = () => {
  const editor = useEditor({
    content: `
      <h2>Project Tasks</h2>
      <p>Use the toolbar to manage your tasks:</p>
      <ul data-type="taskList">
        <li data-type="taskItem" data-checked="false">Write introduction</li>
        <li data-type="taskItem" data-checked="true">Set up editor</li>
        <li data-type="taskItem" data-checked="false">Add toolbar controls</li>
      </ul>
      <p>Keep adding tasks to track your progress!</p>
    `,
    extensions: [StarterKit, TaskList, TaskItem.configure({ nested: true })],
    immediatelyRender: false,
    shouldRerenderOnTransaction: true,
  })

  if (!editor) return null

  return (
    <RichTextEditor.Root borderWidth="1px" editor={editor} rounded="md">
      <HStack borderBottomWidth="1px" gap="2" p="2">
        <RichTextEditor.ControlGroup>
          <ToggleTaskList />
          <IndentTask />
          <OutdentTask />
          <AddTask />
        </RichTextEditor.ControlGroup>
      </HStack>
      <RichTextEditor.Content />
    </RichTextEditor.Root>
  )
}

const ToggleTaskList = createBooleanControl({
  command: (editor) => editor.chain().focus().toggleTaskList().run(),
  getVariant: (editor) => (editor.isActive('taskList') ? 'subtle' : 'ghost'),
  icon: LuListChecks,
  label: 'Toggle Task List',
})

const IndentTask = createBooleanControl({
  command: (editor) => editor.chain().focus().sinkListItem('taskItem').run(),
  getVariant: (editor) => (editor.isActive('taskItem') ? 'subtle' : 'ghost'),
  icon: LuArrowRight,
  label: 'Indent Task',
})

const OutdentTask = createBooleanControl({
  command: (editor) => editor.chain().focus().liftListItem('taskItem').run(),
  getVariant: (editor) => (editor.isActive('taskItem') ? 'subtle' : 'ghost'),
  icon: LuArrowLeft,
  label: 'Outdent Task',
})

const AddTask = createBooleanControl({
  command: (editor) =>
    editor
      .chain()
      .focus()
      .insertContent(`<li data-type="taskItem" data-checked="false">New task</li>`)
      .run(),
  getVariant: (editor) => (editor.isActive('taskItem') ? 'subtle' : 'ghost'),
  icon: LuPlus,
  label: 'Add Task',
})
