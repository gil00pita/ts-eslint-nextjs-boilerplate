'use client'

import { Box, For, SimpleGrid, Square, Stack, defaultSystem } from '@chakra-ui/react'

import { TokenDoc } from './token-doc'

const { _config, tokens } = defaultSystem
const keys = Object.keys(_config.theme?.tokens?.radii ?? {})

export const BorderRadiusTokenDoc = () => {
  return (
    <TokenDoc mt="8" title="theme.tokens.radii">
      <SimpleGrid gap="4" minChildWidth="120px">
        <For each={keys}>
          {(radius) => {
            const token = tokens.getByName(`radii.${radius}`)
            return (
              <Stack flex="1" key={radius}>
                <Square
                  bg="bg.subtle"
                  borderRadius={radius}
                  borderWidth="1px"
                  color="fg.muted"
                  size="20"
                />
                <Box lineHeight="1">{radius}</Box>
                <Box as="pre" color="fg.subtle" fontSize="xs">
                  {token?.originalValue}
                </Box>
              </Stack>
            )
          }}
        </For>
      </SimpleGrid>
    </TokenDoc>
  )
}
