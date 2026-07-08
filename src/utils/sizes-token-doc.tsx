'use client'

import { Box, Flex, For, Stack, Text, defaultSystem } from '@chakra-ui/react'

import { TokenDoc } from './token-doc'

const { tokens } = defaultSystem

const allSizes = tokens.categoryMap.get('sizes')!.values()
export const defaultSizes = Array.from(allSizes)

const fractionalSizes = defaultSizes.filter((token) => token.name.includes('/'))
const namedSizes = defaultSizes.filter((token) => token.name.match(/v(h|w)|min|max|fit|prose|full/))
const breakpointSizes = defaultSizes.filter((token) => token.name.match(/breakpoint/))
const largeSizes = defaultSizes.filter(
  (token) => token.name.match(/sm|xl|xs|lg|md/) && !breakpointSizes.includes(token)
)

const tokenSizes = defaultSizes
  .filter(
    (token) =>
      !fractionalSizes.includes(token) &&
      !namedSizes.includes(token) &&
      !breakpointSizes.includes(token) &&
      !largeSizes.includes(token)
  )
  .sort((a, b) => parseInt(a.extensions.pixelValue!) - parseInt(b.extensions.pixelValue!))

export const SizesTokenDoc = () => {
  return (
    <Stack gap="8" mt="8">
      <For
        each={[
          { name: 'tokenSizes', tokens: tokenSizes },
          { name: 'namedSizes', tokens: namedSizes },
          { name: 'fractionalSizes', tokens: fractionalSizes },
          { name: 'breakpointSizes', tokens: breakpointSizes },
          { name: 'largeSizes', tokens: largeSizes },
        ]}
      >
        {(item) => (
          <TokenDoc title={item.name}>
            <Flex borderBottomWidth="1px" fontSize="sm" fontWeight="medium" px="3" py="1">
              <Text width="160px">Name</Text>
              <Text width="100px">Value</Text>
              {item.name === 'tokenSizes' && <Text width="100px">Pixel</Text>}
            </Flex>

            <Stack pt="2" px="3">
              {item.tokens.map((token) => (
                <Flex fontSize="sm" key={token.name} py="1">
                  <Text fontWeight="medium" width="160px">
                    {token.extensions.prop}
                  </Text>
                  <Text color="fg.muted" width="100px">
                    {token.value}
                  </Text>
                  {item.name === 'tokenSizes' && (
                    <Text color="fg.muted" width="100px">
                      {token.extensions.pixelValue}
                    </Text>
                  )}
                  {item.name === 'tokenSizes' && (
                    <Box bg="pink.200" height="4" width={`min(${token.originalValue}, 60%)`} />
                  )}
                </Flex>
              ))}
            </Stack>
          </TokenDoc>
        )}
      </For>
    </Stack>
  )
}
