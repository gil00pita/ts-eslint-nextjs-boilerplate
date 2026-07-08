'use client'

import { Box, Center, defaultSystem, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'

import { TokenDoc } from './token-doc'

const { _config: config, tokens } = defaultSystem

const allKeyframes = Object.keys(config.theme?.keyframes || {}).filter(
  (keyframe) => !keyframe.match(/expand|collapse|bg-|position|circular/)
)

export const KeyframeDoc = () => {
  return (
    <TokenDoc mt="8" title="theme.keyframes">
      <SimpleGrid fontSize="sm" gap="20" minChildWidth="160px">
        {allKeyframes.map((animationName) => {
          return (
            <Stack key={animationName}>
              <Box
                animation={`${animationName} 1s ease-in-out infinite alternate`}
                bg="pink.200"
                boxSize="12"
              />
              <Text fontWeight="medium">{animationName}</Text>
            </Stack>
          )
        })}
      </SimpleGrid>
    </TokenDoc>
  )
}

const allDurations = Array.from(tokens.categoryMap.get('durations')!.entries())
  .sort(([, a], [, b]) => parseFloat(b.originalValue) - parseFloat(a.originalValue))
  .map(([key]) => key)

export const DurationTokenDoc = () => {
  return (
    <TokenDoc mt="8" title="theme.tokens.durations">
      <SimpleGrid fontSize="sm" gap="20" minChildWidth="160px">
        {allDurations.map((durationName) => {
          return (
            <VStack key={durationName}>
              <Center h="20">
                <Box
                  animationDirection="alternate"
                  animationDuration={durationName}
                  animationIterationCount="infinite"
                  animationName="spin"
                  animationTimingFunction="ease-in-out"
                  bg="pink.200"
                  height="1"
                  width="20"
                />
              </Center>
              <Text fontWeight="medium">{durationName}</Text>
            </VStack>
          )
        })}
      </SimpleGrid>
    </TokenDoc>
  )
}
