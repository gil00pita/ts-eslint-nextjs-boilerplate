import { For, HStack, IconButton } from '@chakra-ui/react'
import { LuSearch } from 'react-icons/lu'

import { colorPalettes } from '@/utils/storybook/color-palettes'

export const IconButtonWithColors = () => {
  return (
    <HStack wrap="wrap">
      <For each={colorPalettes}>
        {(c) => (
          <IconButton aria-label="Search database" colorPalette={c} key={c}>
            <LuSearch />
          </IconButton>
        )}
      </For>
    </HStack>
  )
}
