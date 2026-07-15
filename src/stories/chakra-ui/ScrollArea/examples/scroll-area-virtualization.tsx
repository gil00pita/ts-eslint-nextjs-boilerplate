'use client'

import { Box, ScrollArea } from '@chakra-ui/react'
import { useVirtualizer, type VirtualItem } from '@tanstack/react-virtual'
import React, { useCallback, useMemo, useRef } from 'react'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

export const ScrollAreaVirtualization = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const items = useMemo(
    () =>
      Array.from({ length: 1000 }, (_, i) => ({
        id: i,
        name: `Item ${i + 1}`,
      })),
    []
  )

  const virtualizer = useVirtualizer({
    count: items.length,
    estimateSize: () => 80,
    getScrollElement: () => scrollRef.current,
    overscan: 5,
  })

  const contentProps = useMemo(
    (): React.ComponentProps<'div'> => ({
      style: {
        height: `${virtualizer.getTotalSize()}px`,
        position: 'relative',
        width: '100%',
      },
    }),
    [virtualizer]
  )

  const getItemProps = useCallback(
    (item: VirtualItem): React.ComponentProps<'div'> => ({
      style: {
        height: `${item.size}px`,
        left: 0,
        paddingBottom: 4,
        position: 'absolute',
        top: 0,
        transform: `translateY(${item.start}px)`,
        width: '100%',
      },
    }),
    []
  )

  return (
    <ScrollArea.Root height="20rem" maxWidth="xl">
      <ScrollArea.Viewport ref={scrollRef}>
        <ScrollArea.Content>
          <Box {...contentProps}>
            {virtualizer.getVirtualItems().map((virtualItem) => {
              const item = items[virtualItem.index]
              return (
                <div key={virtualItem.key} {...getItemProps(virtualItem)}>
                  <DecorativeBox w="full">{item.name}</DecorativeBox>
                </div>
              )
            })}
          </Box>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar bg="transparent" />
    </ScrollArea.Root>
  )
}
