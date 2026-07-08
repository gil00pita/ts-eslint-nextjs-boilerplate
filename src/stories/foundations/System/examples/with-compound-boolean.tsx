'use client'

import { chakra, Stack } from '@chakra-ui/react'

const Badge = chakra('div', {
  compoundVariants: [
    {
      css: { bg: 'gray.700', color: 'white' },
      pressed: true,
      variant: 'solid',
    },
    { css: { bg: 'gray.300' }, pressed: true, variant: 'subtle' },
  ],
  defaultVariants: {
    variant: 'subtle',
  },
  variants: {
    pressed: {
      false: {},
      true: {},
    },
    variant: {
      solid: {},
      subtle: {},
    },
  },
  base: {
    px: '4',
    py: '2',
  },
})

export const WithCompoundBoolean = () => {
  return (
    <Stack>
      <Badge colorPalette="gray" variant="solid">
        Hello
      </Badge>
      <Badge colorPalette="gray" pressed variant="solid">
        Hello
      </Badge>
    </Stack>
  )
}
