'use client'

import {
  createGridCollection,
  Input,
  Listbox,
  Square,
  useFilter,
  useListboxContext,
} from '@chakra-ui/react'
import emojibase from 'emojibase-data/en/compact.json'
import { useCallback, useMemo, useState } from 'react'
import { LuSmile } from 'react-icons/lu'

type Emoji = (typeof emojibase)[number]
const emojis = emojibase
  .filter((e) => !e.label.startsWith('regional indicator'))
  .slice(0, 200) as Emoji[]

export const ListboxWithEmojiGrid = () => {
  const { contains } = useFilter({ sensitivity: 'base' })

  const [items, setItems] = useState(emojis)

  const collection = useMemo(
    () =>
      createGridCollection({
        columnCount: 8,
        items: items,
        itemToString(item) {
          return `${item.label} (${item.shortcodes})`
        },
        itemToValue(item) {
          return item.hexcode
        },
      }),
    [items]
  )

  const filter = useCallback(
    (value: string) => {
      setItems(emojis.filter((e) => contains(e.label, value)))
    },
    [contains]
  )

  return (
    <Listbox.Root collection={collection} maxW="min-content">
      <SelectedEmoji />
      <Listbox.Input
        as={Input}
        onChange={(e) => filter(e.target.value)}
        placeholder="Type to filter frameworks..."
      />
      <Listbox.Content display="grid" gap="1" gridTemplateColumns="repeat(8, 1fr)" w="374px">
        {collection.items.map((item, index) => (
          <Listbox.Item
            css={{
              alignItems: 'center',
              borderRadius: 'md',
              display: 'flex',
              fontSize: '22px',
              height: '40px',
              justifyContent: 'center',
              width: '40px',
            }}
            item={item}
            key={index}
          >
            {item.unicode}
          </Listbox.Item>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  )
}

const SelectedEmoji = () => {
  const listbox = useListboxContext()
  const [item] = listbox.selectedItems as Emoji[]
  return (
    <Square bg="bg.muted" rounded="sm" size="40px" textStyle="lg">
      {item ? item.unicode : <LuSmile />}
    </Square>
  )
}
