'use client'

import type { CheckmarkProps, FlexProps } from '@chakra-ui/react'

import {
  Box,
  Checkmark,
  createListCollection,
  Flex,
  Listbox,
  useListboxContext,
  useListboxItemContext,
} from '@chakra-ui/react'

export const ListboxSelectAll = () => {
  return (
    <Box maxW="320px">
      <Listbox.Root collection={frameworks} gap="0" selectionMode="multiple">
        <ListboxHeader />
        <Listbox.Content maxH="300px" roundedTop="0">
          {frameworks.items.map((framework) => (
            <Listbox.Item item={framework} key={framework.value}>
              <ListboxItemCheckmark />
              <Listbox.ItemText>{framework.label}</Listbox.ItemText>
            </Listbox.Item>
          ))}
        </Listbox.Content>
      </Listbox.Root>
    </Box>
  )
}

const ListboxHeader = (props: FlexProps) => {
  const listbox = useListboxContext()
  const isAllSelected = listbox.value.length === frameworks.items.length
  const isSomeSelected = listbox.value.length > 0 && listbox.value.length < frameworks.items.length

  const handleSelectAll = () => {
    if (isAllSelected) {
      listbox.setValue([])
    } else {
      listbox.setValue(frameworks.items.map((item) => item.value))
    }
  }

  return (
    <Flex
      align="center"
      as="button"
      borderWidth="1px"
      cursor="pointer"
      gap="2"
      mb="-1px"
      minH="10"
      onClick={handleSelectAll}
      px="3"
      roundedTop="l2"
      {...props}
    >
      <Checkmark checked={isAllSelected} filled indeterminate={isSomeSelected} size="sm" />
      <Listbox.Label>Select Frameworks</Listbox.Label>
    </Flex>
  )
}

const ListboxItemCheckmark = (props: CheckmarkProps) => {
  const itemState = useListboxItemContext()
  return (
    <Checkmark
      checked={itemState.selected}
      disabled={itemState.disabled}
      filled
      size="sm"
      {...props}
    />
  )
}

const frameworks = createListCollection({
  items: [
    { label: 'React.js', value: 'react' },
    { label: 'Vue.js', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Next.js', value: 'nextjs' },
    { label: 'Nuxt.js', value: 'nuxtjs' },
    { label: 'Remix', value: 'remix' },
    { label: 'Gatsby', value: 'gatsby' },
    { label: 'Ember.js', value: 'ember' },
    { label: 'Preact', value: 'preact' },
  ],
})
