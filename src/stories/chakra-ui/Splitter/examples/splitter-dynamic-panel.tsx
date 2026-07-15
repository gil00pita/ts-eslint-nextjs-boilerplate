'use client'

import { Button, Center, HStack, IconButton, Splitter, Stack, useSplitter } from '@chakra-ui/react'
import { Fragment, useState } from 'react'
import { LuMinus, LuPlus } from 'react-icons/lu'

const MAX_PANELS = 5

export const SplitterDynamicPanel = () => {
  const [panelIds, setPanelIds] = useState<string[]>(['a', 'b'])
  const [sizes, setSizes] = useState<number[]>(distributeSizes(2))

  const splitter = useSplitter({
    onResize: (details) => setSizes(details.size),
    panels: panelIds.map((id: string) => ({ id, minSize: 15 })),
    size: sizes,
  })

  const items = splitter.getItems()
  const panelCount = items.filter((item) => item.type === 'panel').length

  const addPanel = () => {
    if (panelIds.length >= MAX_PANELS) return // Prevent adding more than MAX_PANELS
    const newId = uuid()
    const newSizes = redistributeSizesForNewPanel(sizes, panelIds.length + 1)
    setSizes(newSizes)
    setPanelIds([...panelIds, newId])
  }

  const removePanel = (id: string) => {
    if (panelIds.length <= 1) return

    const indexToRemove = panelIds.indexOf(id)
    const newSizes = redistributeSizesAfterRemoval(sizes, indexToRemove)
    setSizes(newSizes)
    setPanelIds(panelIds.filter((panelId: string) => panelId !== id))
  }

  return (
    <Stack gap="4">
      <HStack gap="2" justify="space-between">
        <Button
          disabled={panelIds.length >= MAX_PANELS}
          onClick={addPanel}
          size="sm"
          variant="outline"
        >
          <LuPlus /> Add Panel
        </Button>
        <HStack color="fg.muted" gap="1" textStyle="sm">
          <span>
            {panelCount} panel{panelCount !== 1 ? 's' : ''}
          </span>
        </HStack>
      </HStack>

      <Splitter.RootProvider borderWidth="1px" minH="60" value={splitter}>
        {items.map((item) => (
          <Fragment key={item.id}>
            {item.type === 'panel' && (
              <Splitter.Panel id={item.id}>
                <Center boxSize="full" position="relative" textStyle="2xl">
                  {item.id}
                  <IconButton
                    disabled={panelCount === 1}
                    onClick={() => removePanel(item.id)}
                    position="absolute"
                    right="2"
                    size="xs"
                    top="2"
                    variant="ghost"
                  >
                    <LuMinus />
                  </IconButton>
                </Center>
              </Splitter.Panel>
            )}
            {item.type === 'handle' && <Splitter.ResizeTrigger id={item.id} />}
          </Fragment>
        ))}
      </Splitter.RootProvider>
    </Stack>
  )
}

const uuid = () => {
  // Generate a single random lowercase letter
  const letters = 'cdefghijklmnopqrstuvwxyz'
  return letters[Math.floor(Math.random() * letters.length)]
}

const distributeSizes = (count: number): number[] => Array(count).fill(100 / count)

const calculateTotalSize = (sizes: number[]): number => sizes.reduce((sum, size) => sum + size, 0)

const redistributeSizesForNewPanel = (currentSizes: number[], newPanelCount: number): number[] => {
  const totalSize = calculateTotalSize(currentSizes)
  const newPanelSize = totalSize / newPanelCount

  // Reduce existing panels proportionally to make room for the new panel
  const adjustedSizes = currentSizes.map((size) => {
    const proportion = size / totalSize
    return size - newPanelSize * proportion
  })

  adjustedSizes.push(newPanelSize)
  return adjustedSizes
}

const redistributeSizesAfterRemoval = (currentSizes: number[], indexToRemove: number): number[] => {
  const removedSize = currentSizes[indexToRemove] || 0
  const remainingSizes = currentSizes.filter((_, i) => i !== indexToRemove)
  const totalRemainingSize = calculateTotalSize(remainingSizes)

  // Distribute removed panel's size proportionally to remaining panels
  return remainingSizes.map((size) => size + (removedSize * size) / totalRemainingSize)
}
