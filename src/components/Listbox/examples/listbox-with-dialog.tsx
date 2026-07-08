'use client'

import {
  Button,
  Dialog,
  HStack,
  Kbd,
  Listbox,
  Portal,
  Span,
  Text,
  useFilter,
  useListCollection,
} from '@chakra-ui/react'
import { useState } from 'react'

export const ListboxWithDialog = () => {
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const { contains } = useFilter({ sensitivity: 'base' })

  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.type,
    groupSort: ['applications', 'commands'],
    initialItems: [
      { label: 'Linear.app', type: 'applications', value: 'linear' },
      { label: 'Notion', type: 'applications', value: 'notion' },
      { label: 'Figma', type: 'applications', value: 'figma' },
      { label: 'Slack', type: 'applications', value: 'slack' },
      { label: 'Cursor', type: 'applications', value: 'cursor' },

      { label: 'Open Terminal', type: 'commands', value: 'terminal' },
      { label: 'Search Files', type: 'commands', value: 'search' },
      { label: 'Git Status', type: 'commands', value: 'git-status' },
      { label: 'Run Tests', type: 'commands', value: 'run-tests' },
      { label: 'Deploy App', type: 'commands', value: 'deploy' },
    ],
  })

  const handleSelectionChange = (details: any) => {
    setSelectedFrameworks(details.value)
    setIsOpen(false)
    filter('')
  }

  return (
    <>
      <Dialog.Root onOpenChange={(e) => setIsOpen(e.open)} open={isOpen}>
        <Dialog.Trigger asChild>
          <Button variant="outline">Open Search</Button>
        </Dialog.Trigger>

        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Listbox.Root
                collection={collection}
                onValueChange={handleSelectionChange}
                value={selectedFrameworks}
                variant="plain"
              >
                <Dialog.Header>
                  <Listbox.Input
                    autoHighlight
                    minH="6"
                    onChange={(e) => filter(e.currentTarget.value)}
                    outline="0"
                    placeholder="Search for apps or command..."
                    width="full"
                  />
                </Dialog.Header>

                <Listbox.Content maxH="300px" px="3">
                  {collection.group().map(([group, items]) => (
                    <Listbox.ItemGroup key={group}>
                      <Listbox.ItemGroupLabel textTransform="capitalize">
                        {group}
                      </Listbox.ItemGroupLabel>
                      {items.map((item) => (
                        <Listbox.Item item={item} justifyContent="space-between" key={item.value}>
                          <Listbox.ItemText>{item.label}</Listbox.ItemText>
                          <Span color="fg.muted" fontSize="xs">
                            {item.type}
                          </Span>
                        </Listbox.Item>
                      ))}
                    </Listbox.ItemGroup>
                  ))}
                </Listbox.Content>

                <Dialog.Footer borderTopWidth="1px" textStyle="xs">
                  <CommandItem keys={['Esc']} label="Press Esc to close" />
                  <CommandItem keys={['⏎']} label="Open Application" />
                  <CommandItem keys={['⌘', 'K']} label="Actions" />
                </Dialog.Footer>
              </Listbox.Root>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>

      {selectedFrameworks.length > 0 && (
        <Text mt="3" textStyle="sm">
          Selected: {JSON.stringify(selectedFrameworks, null, 2)}
        </Text>
      )}
    </>
  )
}

const CommandItem = (props: { label: string; keys: string[] }) => {
  return (
    <HStack>
      {props.label} <Kbd size="sm">{props.keys.join(' ')}</Kbd>
    </HStack>
  )
}
