'use client'

import { defaultSystem, Flex, Stack, Text } from '@chakra-ui/react'

import { TokenDoc } from './token-doc'

const { tokens } = defaultSystem

const allZIndex = tokens.categoryMap.get('zIndex')!.values()
export const defaultZIndex = Array.from(allZIndex).sort(
  (a, b) => parseFloat(a.originalValue) - parseFloat(b.originalValue)
)

export const ZIndexTokenDoc = () => {
  return (
    <TokenDoc mt="8" title="theme.tokens.zIndex">
      <Flex borderBottomWidth="1px" fontSize="sm" fontWeight="medium" px="3" py="1">
        <Text width="100px">Name</Text>
        <Text width="100px">Value</Text>
      </Flex>

      <Stack pt="2" px="3">
        {defaultZIndex.map((token) => (
          <Flex fontSize="sm" key={token.name} py="1">
            <Text fontWeight="medium" width="100px">
              {token.extensions.prop}
            </Text>
            <Text color="fg.muted" width="100px">
              {token.originalValue}
            </Text>
          </Flex>
        ))}
      </Stack>
    </TokenDoc>
  )
}
