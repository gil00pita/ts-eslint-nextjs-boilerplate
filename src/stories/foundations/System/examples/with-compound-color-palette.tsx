'use client'

import { chakra } from '@chakra-ui/react'

const Badge = chakra('div', {
  compoundVariants: [
    { colorPalette: 'gray', css: { bg: 'gray.700' }, variant: 'solid' },
    { colorPalette: 'gray', css: { bg: 'gray.300' }, variant: 'subtle' },
    {
      colorPalette: 'gray',
      css: { borderColor: 'gray.700', color: 'gray.700' },
      variant: 'outline',
    },
  ],
  defaultVariants: {
    variant: 'subtle',
  },
  variants: {
    variant: {
      outline: {},
      solid: {},
      subtle: {},
    },
  },
  base: {
    px: '4',
    py: '2',
  },
})

export const WithCompoundColorPalette = () => {
  return (
    <Badge colorPalette="gray" variant="solid">
      Hello
    </Badge>
  )
}
