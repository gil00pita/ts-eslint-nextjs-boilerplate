import { For, Stack, VStack } from '@chakra-ui/react'
import { LuBox } from 'react-icons/lu'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

export const ForWithFallback = () => {
  return (
    <Stack gap="4">
      <For
        each={[]}
        fallback={
          <VStack fontWeight="medium" textAlign="center">
            <LuBox />
            No items to show
          </VStack>
        }
      >
        {(item, index) => (
          <DecorativeBox h="10" key={index}>
            {item}
          </DecorativeBox>
        )}
      </For>
    </Stack>
  )
}
