'use client'

import {
  Combobox,
  TagsInput,
  useCombobox,
  useFilter,
  useListCollection,
  useTagsInput,
} from '@chakra-ui/react'
import { useId, useRef } from 'react'

export const TagsInputWithCombobox = () => {
  const { contains } = useFilter({ sensitivity: 'base' })

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: ['React', 'Chakra', 'TypeScript', 'Next.js', 'Ark UI', 'Zag.js'],
  })

  const uid = useId()
  const controlRef = useRef<HTMLDivElement | null>(null)

  const tags = useTagsInput({
    ids: { control: `control_${uid}`, input: `input_${uid}` },
  })

  const comobobox = useCombobox({
    allowCustomValue: true,
    collection,
    ids: { control: `control_${uid}`, input: `input_${uid}` },
    onInputValueChange(e) {
      filter(e.inputValue)
    },
    onValueChange: (e) => tags.addValue(e.value[0]),
    selectionBehavior: 'clear',
    value: [],
  })

  return (
    <Combobox.RootProvider value={comobobox}>
      <TagsInput.RootProvider value={tags}>
        <TagsInput.Label>Tags</TagsInput.Label>

        <TagsInput.Control ref={controlRef}>
          {tags.value.map((tag, index) => (
            <TagsInput.Item index={index} key={index} value={tag}>
              <TagsInput.ItemPreview>
                <TagsInput.ItemText>{tag}</TagsInput.ItemText>
                <TagsInput.ItemDeleteTrigger />
              </TagsInput.ItemPreview>
            </TagsInput.Item>
          ))}

          <Combobox.Input asChild unstyled>
            <TagsInput.Input placeholder="Add tag..." />
          </Combobox.Input>
        </TagsInput.Control>

        <Combobox.Positioner>
          <Combobox.Content>
            {collection.items.map((item) => (
              <Combobox.Item item={item} key={item}>
                <Combobox.ItemText>{item}</Combobox.ItemText>
                <Combobox.ItemIndicator />
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      </TagsInput.RootProvider>
    </Combobox.RootProvider>
  )
}
