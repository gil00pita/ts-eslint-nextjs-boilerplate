'use client'

import { chakra } from '@chakra-ui/react'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

const Flex = chakra('div', {
  variants: {
    align: {
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' },
      start: { alignItems: 'flex-start' },
    },
    direction: {
      column: { flexDirection: 'column' },
      row: { flexDirection: 'row' },
    },
    justify: {
      center: { justifyContent: 'center' },
      end: { justifyContent: 'flex-end' },
      start: { justifyContent: 'flex-start' },
    },
  },
  base: {
    display: 'flex',
    gap: '4',
  },
})

export const SystemFlexRecipe = () => {
  return (
    <Flex align="center" direction="row" justify="center">
      <DecorativeBox height="10">Item 1</DecorativeBox>
      <DecorativeBox height="20">Item 2</DecorativeBox>
    </Flex>
  )
}
