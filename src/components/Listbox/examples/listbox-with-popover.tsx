'use client'

import {
  Button,
  Listbox,
  Popover,
  Portal,
  useFilter,
  useListbox,
  useListCollection,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { LuChevronDown } from 'react-icons/lu'

export const ListboxWithPopover = () => {
  const [inputValue, setInputValue] = useState('')
  const [open, setOpen] = useState(false)

  const { contains } = useFilter({ sensitivity: 'base' })
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: [
      { label: 'React.js', value: 'react' },
      { label: 'Vue.js', value: 'vue' },
      { label: 'Angular', value: 'angular' },
      { label: 'Svelte', value: 'svelte' },
      { label: 'Next.js', value: 'nextjs' },
      { label: 'Nuxt.js', value: 'nuxtjs' },
    ],
  })

  const listbox = useListbox({
    collection,
    onValueChange() {
      setOpen(false)
      setInputValueFn('')
      triggerRef.current?.focus()
    },
  })

  const setInputValueFn = (value: string) => {
    setInputValue(value)
    filter(value)
  }

  const selectedItem = listbox.selectedItems[0]

  return (
    <Popover.Root onOpenChange={(e) => setOpen(e.open)} open={open}>
      <Popover.Trigger asChild>
        <Button ref={triggerRef} size="sm" variant="outline">
          {selectedItem ? selectedItem.label : 'Select'} <LuChevronDown />
        </Button>
      </Popover.Trigger>

      <Portal>
        <Popover.Positioner>
          <Popover.Content _closed={{ animation: 'none' }}>
            <Popover.Body p="0">
              <Listbox.RootProvider gap="0" overflow="hidden" value={listbox}>
                <Listbox.Input
                  bg="transparent"
                  minH="10"
                  onChange={(e) => setInputValueFn(e.currentTarget.value)}
                  outline="0"
                  px="3"
                  roundedTop="l2"
                  value={inputValue}
                />
                <Listbox.Content borderTopWidth="1px" borderWidth="0" gap="0" roundedTop="0">
                  {collection.items.map((framework) => (
                    <Listbox.Item item={framework} key={framework.value}>
                      <Listbox.ItemText>{framework.label}</Listbox.ItemText>
                      <Listbox.ItemIndicator />
                    </Listbox.Item>
                  ))}
                </Listbox.Content>
              </Listbox.RootProvider>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}
