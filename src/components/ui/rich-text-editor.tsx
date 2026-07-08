'use client'

import type { BoxProps, ButtonProps, StackProps } from '@chakra-ui/react'
import type { Editor } from '@tiptap/react'

import { Box, Button, HStack } from '@chakra-ui/react'
import { EditorContent } from '@tiptap/react'
import * as React from 'react'

type RichTextEditorContextValue = {
  disabled?: boolean
  editor: Editor
}

const RichTextEditorContext = React.createContext<RichTextEditorContextValue | null>(null)

export function useRichTextEditorContext() {
  const context = React.useContext(RichTextEditorContext)
  if (!context) throw new Error('RichTextEditor components must be used inside RichTextEditor.Root')
  return context
}

export interface RichTextEditorRootProps extends BoxProps {
  disabled?: boolean
  editor: Editor
}

function Root(props: RichTextEditorRootProps) {
  const { children, disabled, editor, ...rest } = props

  return (
    <RichTextEditorContext.Provider value={{ disabled, editor }}>
      <Box
        borderColor="border"
        borderWidth="1px"
        data-disabled={disabled ? '' : undefined}
        overflow="hidden"
        rounded="l2"
        {...rest}
      >
        {children}
      </Box>
    </RichTextEditorContext.Provider>
  )
}

function Toolbar(props: StackProps) {
  return (
    <HStack bg="bg.subtle" borderBottomWidth="1px" borderColor="border" gap="1" p="2" {...props} />
  )
}

interface ControlGroupProps extends StackProps {
  variant?: string
}

function ControlGroup(props: ControlGroupProps) {
  return <HStack gap="1" {...props} />
}

function Footer(props: StackProps) {
  return (
    <HStack
      bg="bg.subtle"
      borderColor="border"
      borderTopWidth="1px"
      gap="2"
      justify="space-between"
      p="2"
      {...props}
    />
  )
}

function Content(props: BoxProps) {
  const { editor } = useRichTextEditorContext()

  return (
    <Box
      css={{
        '& .tiptap': {
          outline: 'none',
        },
      }}
      minH="32"
      p="3"
      {...props}
    >
      <EditorContent editor={editor} />
    </Box>
  )
}

export interface ButtonControlProps extends ButtonProps {
  icon?: React.ElementType | React.ReactNode
  label?: string
}

function ButtonControlBase(props: ButtonControlProps) {
  const { children, icon, label = 'Control', ...rest } = props
  const iconNode = typeof icon === 'function' ? React.createElement(icon) : icon

  return (
    <Button size="xs" variant="ghost" {...rest}>
      {iconNode}
      {children ?? label}
    </Button>
  )
}

const createControl = (label: string) =>
  function RichTextEditorControl(props: ButtonControlProps) {
    return <ButtonControlBase label={label} {...props} />
  }

export const Control = {
  AlignCenter: createControl('Center'),
  AlignLeft: createControl('Left'),
  AlignRight: createControl('Right'),
  Blockquote: createControl('Quote'),
  Bold: createControl('B'),
  BulletList: createControl('Bullet list'),
  ButtonControl: ButtonControlBase,
  Code: createControl('Code'),
  FontFamily: createControl('Font'),
  FontSize: createControl('Size'),
  H1: createControl('H1'),
  H2: createControl('H2'),
  H3: createControl('H3'),
  H4: createControl('H4'),
  Highlight: createControl('Highlight'),
  Hr: createControl('Rule'),
  Italic: createControl('I'),
  OrderedList: createControl('Ordered list'),
  Redo: createControl('Redo'),
  Strikethrough: createControl('S'),
  Underline: createControl('U'),
  Undo: createControl('Undo'),
}

type BooleanControlOptions = {
  action?: (...args: unknown[]) => unknown
  icon?: React.ElementType | React.ReactNode
  isActive?: (...args: unknown[]) => boolean
  label: string
}

export function createBooleanControl(options: BooleanControlOptions) {
  return function BooleanControl(props: ButtonControlProps) {
    return <ButtonControlBase icon={options.icon} label={options.label} {...props} />
  }
}

type SelectControlOptions = {
  label: string
  onChange?: (...args: unknown[]) => unknown
  options?: Array<{ label: string; value: string }>
  value?: (...args: unknown[]) => unknown
}

export function createSelectControl(options: SelectControlOptions) {
  return function SelectControl(props: ButtonControlProps) {
    return <ButtonControlBase label={options.label} {...props} />
  }
}

export const RichTextEditor = {
  Content,
  ControlGroup,
  Footer,
  Root,
  Toolbar,
}
