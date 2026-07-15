'use client'

import { HoverCard, Link, Portal, Stack, Text } from '@chakra-ui/react'

export const HoverCardWithDisabled = () => {
  return (
    <HoverCard.Root disabled size="sm">
      <HoverCard.Trigger asChild>
        <Link href="#">@chakra_ui</Link>
      </HoverCard.Trigger>
      <Portal>
        <HoverCard.Positioner>
          <HoverCard.Content>
            <HoverCard.Arrow />
            <Stack gap="1">
              <Text fontWeight="semibold" textStyle="sm">
                Chakra UI
              </Text>
              <Text color="fg.muted" textStyle="sm">
                The most powerful toolkit for building modern web applications.
              </Text>
            </Stack>
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Portal>
    </HoverCard.Root>
  )
}
