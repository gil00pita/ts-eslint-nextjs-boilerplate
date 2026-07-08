'use client'

import { Box, Center, For, SimpleGrid, VStack } from '@chakra-ui/react'

import { TokenDoc } from './token-doc'

export const ShadowTokenDoc = () => {
  return (
    <TokenDoc my="8" title="theme.semanticTokens.shadows">
      <SimpleGrid gap="4" minChildWidth="240px">
        <For each={['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'inner', 'inset']}>
          {(shadow) => (
            <VStack flex="1" key={shadow}>
              <Center borderRadius="md" color="fg.muted" height="20" shadow={shadow} width="full" />
              <Box>{shadow}</Box>
            </VStack>
          )}
        </For>
      </SimpleGrid>
    </TokenDoc>
  )
}
