'use client'

import { Box, Flex, Stack, Text, defaultSystem } from '@chakra-ui/react'

import { TokenDoc } from './token-doc'

const { tokens } = defaultSystem

const allSpacing = tokens.categoryMap.get('spacing')!.values()
export const defaultSpacings = Array.from(allSpacing)
  .filter((token) => token.extensions.category === 'spacing' && !token.extensions.negative)
  .sort((a, b) => parseFloat(a.value) - parseFloat(b.value))

export const SpacingTokenDoc = () => {
  return (
    <TokenDoc mt="8" title="theme.tokens.spacing">
      <Flex borderBottomWidth="1px" fontSize="sm" fontWeight="medium" px="3" py="1">
        <Text width="100px">Name</Text>
        <Text width="100px">Value</Text>
        <Text width="100px">Pixel</Text>
      </Flex>

      <Stack pt="2" px="3">
        {defaultSpacings.map((token) => (
          <Flex fontSize="sm" key={token.name} py="1">
            <Text fontWeight="medium" width="100px">
              {token.extensions.prop}
            </Text>
            <Text color="fg.muted" width="100px">
              {token.value}
            </Text>
            <Text color="fg.muted" width="100px">
              {token.extensions.pixelValue}
            </Text>
            <Box flex="1">
              <Box bg="pink.200" height="4" width={token.extensions.cssVar!.ref} />
            </Box>
          </Flex>
        ))}
      </Stack>
    </TokenDoc>
  )
}
