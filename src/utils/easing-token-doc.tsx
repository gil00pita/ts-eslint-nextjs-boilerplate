'use client'

import { Box, SimpleGrid, Stack, Text, defaultSystem } from '@chakra-ui/react'

import { TokenDoc } from './token-doc'

const { tokens } = defaultSystem

const easings = tokens.categoryMap.get('easings')!
const allEasings = Array.from(easings.values())

export const EasingTokenDoc = () => {
  return (
    <TokenDoc mt="8" title="theme.tokens.easings">
      <SimpleGrid columns={2} fontSize="sm" gap="8">
        {allEasings.map((token) => {
          return (
            <Stack key={token.name}>
              <Box
                animationDirection="alternate"
                animationDuration="1s"
                animationIterationCount="infinite"
                animationName="slide-to-right-full"
                animationTimingFunction={token.value}
                bg="pink.200"
                boxSize="200px"
              />
              <Text fontWeight="medium">{token.name}</Text>
            </Stack>
          )
        })}
      </SimpleGrid>
    </TokenDoc>
  )
}
