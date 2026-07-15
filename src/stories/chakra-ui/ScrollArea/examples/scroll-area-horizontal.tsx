import { Flex, ScrollArea } from '@chakra-ui/react'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

export const ScrollAreaHorizontal = () => (
  <ScrollArea.Root size="xs" width="24rem">
    <ScrollArea.Viewport>
      <ScrollArea.Content py="4">
        <Flex flexWrap="nowrap" gap="4">
          {Array.from({ length: 12 }, (_, i) => (
            <DecorativeBox flexShrink="0" h="20" key={i} rounded="sm" w="40">
              Item {i + 1}
            </DecorativeBox>
          ))}
        </Flex>
      </ScrollArea.Content>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar orientation="horizontal" />
    <ScrollArea.Corner />
  </ScrollArea.Root>
)
