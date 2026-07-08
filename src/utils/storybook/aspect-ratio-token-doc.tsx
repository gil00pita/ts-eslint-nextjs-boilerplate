'use client'

import { Center, defaultSystem, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'

import { TokenDoc } from './token-doc'

const { tokens } = defaultSystem

const aspectRatios = tokens.categoryMap.get('aspectRatios')!
const allAspectRatios = Array.from(aspectRatios.values())

export const AspectRatioTokenDoc = () => {
  return (
    <TokenDoc mt="8" title="theme.tokens.aspectRatios">
      <SimpleGrid fontSize="sm" gap="8" minChildWidth="160px">
        {allAspectRatios.map((token) => {
          return (
            <Stack flex="1" key={token.name}>
              <Center
                aspectRatio={token.value}
                bg="bg.subtle"
                borderWidth="1px"
                color="fg.muted"
                width="40"
              >
                <VStack gap="0">
                  <Text>{token.extensions.prop}</Text>
                  <Text color="fg.subtle">{token.value}</Text>
                </VStack>
              </Center>
            </Stack>
          )
        })}
      </SimpleGrid>
    </TokenDoc>
  )
}
