'use client'

import { Box, HStack, Stack, Text, defaultSystem } from '@chakra-ui/react'

import { TokenDoc } from './token-doc'

const { _config: config } = defaultSystem

const breakpoints = config.theme?.breakpoints || {}
const allBreakpoints = Object.entries(breakpoints)
  .sort((a, b) => parseFloat(a[1]) - parseFloat(b[1]))
  .map(([key]) => key)

export const BreakpointDoc = () => {
  return (
    <TokenDoc mt="8" title="theme.breakpoints">
      <Stack gap="8">
        {allBreakpoints.map((key, index) => {
          const width = (index + 1) * 2
          return (
            <HStack key={key}>
              <Box minWidth="200px">
                <Box
                  borderBottomWidth="12px"
                  borderInlineWidth="4px"
                  borderTopWidth="4px"
                  height="12"
                  rounded="sm"
                  width={`${width}rem`}
                />
              </Box>
              <Box minWidth="80px">
                <Text fontWeight="medium" py="2">
                  {key}
                </Text>
              </Box>
              <Text opacity="0.6" py="2">
                {`@media screen (min-width >= ${breakpoints[key]})`}
              </Text>
            </HStack>
          )
        })}
      </Stack>
    </TokenDoc>
  )
}
