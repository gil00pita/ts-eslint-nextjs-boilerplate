'use client'

import {
  createListCollection,
  HStack,
  IconButton,
  Portal,
  Select,
  useSelectContext,
} from '@chakra-ui/react'
import {
  RiAngularjsLine,
  RiForbidLine,
  RiReactjsLine,
  RiSvelteLine,
  RiVuejsLine,
} from 'react-icons/ri'

const SelectTrigger = () => {
  const select = useSelectContext()
  const items = select.selectedItems as Framework[]
  return (
    <IconButton px="2" size="sm" variant="outline" {...select.getTriggerProps()}>
      {select.hasSelectedItems ? items[0].icon : <RiForbidLine />}
    </IconButton>
  )
}

export const SelectWithIconButton = () => {
  return (
    <Select.Root
      collection={frameworks}
      defaultValue={['react']}
      positioning={{ sameWidth: false }}
      size="sm"
      width="320px"
    >
      <Select.HiddenSelect />
      <Select.Control>
        <SelectTrigger />
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content minW="32">
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                <HStack>
                  {framework.icon}
                  {framework.label}
                </HStack>
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

const frameworks = createListCollection({
  items: [
    { icon: <RiReactjsLine />, label: 'React.js', value: 'react' },
    { icon: <RiVuejsLine />, label: 'Vue.js', value: 'vue' },
    { icon: <RiAngularjsLine />, label: 'Angular', value: 'angular' },
    { icon: <RiSvelteLine />, label: 'Svelte', value: 'svelte' },
  ],
})

interface Framework {
  label: string
  value: string
  icon: React.ReactNode
}
