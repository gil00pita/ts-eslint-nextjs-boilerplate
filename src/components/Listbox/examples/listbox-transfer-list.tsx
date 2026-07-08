'use client'

import {
  Center,
  type CollectionOptions,
  createListCollection,
  Flex,
  IconButton,
  Listbox,
  VStack,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

interface ListboxRenderProps<T> extends Listbox.RootProps<T> {
  contentRef: React.RefObject<HTMLDivElement | null>
}

function ListboxRender<T>(props: ListboxRenderProps<T>) {
  const { collection, contentRef, ...rest } = props
  return (
    <Listbox.Root {...rest} collection={collection} selectionMode="multiple">
      <Listbox.Content minH="96" ref={contentRef}>
        {collection.items.length > 0 ? (
          collection.items.map((item) => {
            const itemValue = collection.getItemValue(item)
            const itemLabel = collection.stringifyItem(item)
            return (
              <Listbox.Item flex="0" item={item} key={itemValue}>
                <Listbox.ItemText>{itemLabel}</Listbox.ItemText>
                <Listbox.ItemIndicator />
              </Listbox.Item>
            )
          })
        ) : (
          <Center boxSize="full" color="fg.muted" p="4" textStyle="sm">
            No items available
          </Center>
        )}
      </Listbox.Content>
    </Listbox.Root>
  )
}

export const ListboxTransferList = () => {
  const state = useTransferListState<Item>({ items: animeCharacters })

  return (
    <Flex align="stretch" gap="4" maxW="600px">
      <ListboxRender
        collection={state.source}
        contentRef={state.sourceContentRef}
        onValueChange={(e) => state.setSelectedSource(e.items)}
        value={state.selectedSource.map((item) => item.value)}
      />
      <VStack gap="2" justify="center" py="8">
        <IconButton
          disabled={state.selectedSource.length === 0}
          onClick={() => {
            state.moveToTarget(state.selectedSource)
          }}
          size="xs"
          variant="subtle"
        >
          <LuChevronRight />
        </IconButton>
        <IconButton
          disabled={state.selectedTarget.length === 0}
          onClick={() => {
            state.moveToSource(state.selectedTarget)
          }}
          size="xs"
          variant="subtle"
        >
          <LuChevronLeft />
        </IconButton>
      </VStack>
      <ListboxRender
        collection={state.target}
        contentRef={state.targetContentRef}
        onValueChange={(e) => state.setSelectedTarget(e.items)}
        value={state.selectedTarget.map((item) => item.value)}
      />
    </Flex>
  )
}

function useTransferListState<T>(options: CollectionOptions<T>) {
  const sourceContentRef = useRef<HTMLDivElement | null>(null)
  const targetContentRef = useRef<HTMLDivElement | null>(null)

  const [source, setSource] = useState(createListCollection<T>(options))
  const [target, setTarget] = useState(createListCollection<T>({ ...options, items: [] }))
  const [selectedSource, setSelectedSource] = useState<T[]>([])
  const [selectedTarget, setSelectedTarget] = useState<T[]>([])

  const scrollToItem = (container: HTMLDivElement | null, item: T) => {
    if (!container) return
    requestAnimationFrame(() => {
      const itemValue = target.getItemValue(item)
      const itemElement = container.querySelector(`[data-value="${itemValue}"]`)
      itemElement?.scrollIntoView({ block: 'nearest' })
    })
  }

  const moveToTarget = (items: T[]) => {
    setSource(source.remove(...items))
    setTarget(target.append(...items))
    setSelectedSource([])
    scrollToItem(targetContentRef.current, items[items.length - 1])
  }

  const moveToSource = (items: T[]) => {
    setSource(source.append(...items))
    setTarget(target.remove(...items))
    setSelectedTarget([])
    scrollToItem(sourceContentRef.current, items[items.length - 1])
  }

  return {
    moveToSource,
    moveToTarget,
    selectedSource,
    selectedTarget,
    setSelectedSource,
    setSelectedTarget,
    source,
    sourceContentRef,
    target,
    targetContentRef,
  }
}

interface Item {
  label: string
  value: string
}

const animeCharacters = [
  { label: 'Naruto', value: 'naruto' },
  { label: 'Sasuke', value: 'sasuke' },
  { label: 'Sakura', value: 'sakura' },
  { label: 'Kakashi', value: 'kakashi' },
  { label: 'Shisui', value: 'shisui' },
  { label: 'Itachi', value: 'itachi' },
  { label: 'Gaara', value: 'gaara' },
  { label: 'Rock Lee', value: 'rock-lee' },
  { label: 'Neji', value: 'neji' },
  { label: 'Tenten', value: 'tenten' },
  { label: 'Hinata', value: 'hinata' },
  { label: 'Kiba', value: 'kiba' },
  { label: 'Shino', value: 'shino' },
  { label: 'Choji', value: 'choji' },
  { label: 'Ino', value: 'ino' },
]
