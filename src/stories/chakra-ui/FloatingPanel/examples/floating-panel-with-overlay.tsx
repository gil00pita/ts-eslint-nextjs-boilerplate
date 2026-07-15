'use client'

import {
  Button,
  createOverlay,
  Field,
  FloatingPanel,
  IconButton,
  Input,
  Portal,
  Stack,
} from '@chakra-ui/react'
import { useState } from 'react'
import { LuGripHorizontal, LuX } from 'react-icons/lu'

interface FloatingPanelOverlayProps extends Omit<FloatingPanel.RootProps, 'children'> {
  title: string
  content?: React.ReactNode
}

const floatingPanel = createOverlay<FloatingPanelOverlayProps>((props) => {
  const { content, title, ...rest } = props
  return (
    <FloatingPanel.Root {...rest}>
      <Portal>
        <FloatingPanel.Positioner>
          <FloatingPanel.Content>
            <FloatingPanel.Header>
              <FloatingPanel.DragTrigger>
                <LuGripHorizontal />
                <FloatingPanel.Title>{title}</FloatingPanel.Title>
              </FloatingPanel.DragTrigger>
              <FloatingPanel.Control>
                <FloatingPanel.CloseTrigger asChild>
                  <IconButton size="2xs" variant="ghost">
                    <LuX />
                  </IconButton>
                </FloatingPanel.CloseTrigger>
              </FloatingPanel.Control>
            </FloatingPanel.Header>
            <FloatingPanel.Body>{content}</FloatingPanel.Body>
            <FloatingPanel.ResizeTriggers />
          </FloatingPanel.Content>
        </FloatingPanel.Positioner>
      </Portal>
    </FloatingPanel.Root>
  )
})

const PanelForm = (props: { onClose: () => void }) => {
  const [name, setName] = useState('')

  return (
    <Stack
      as="form"
      gap="4"
      onSubmit={(e) => {
        e.preventDefault()
        alert(`Hello ${name || 'there'}!`)
        props.onClose()
        setName('')
      }}
    >
      <Field.Root>
        <Field.Label>Name</Field.Label>
        <Input
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          value={name}
        />
      </Field.Root>
      <Button alignSelf="flex-start" size="sm" type="submit">
        Submit
      </Button>
    </Stack>
  )
}

export const FloatingPanelWithOverlay = () => {
  return (
    <>
      <Button
        onClick={() => {
          floatingPanel.open('panel', {
            content: <PanelForm onClose={() => floatingPanel.close('panel')} />,
            title: 'Contact',
          })
        }}
        size="sm"
        variant="outline"
      >
        Open Panel
      </Button>
      <floatingPanel.Viewport />
    </>
  )
}
