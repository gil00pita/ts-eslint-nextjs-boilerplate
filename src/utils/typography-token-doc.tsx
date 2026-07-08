'use client'

import { Box, defaultSystem, For, HStack, Stack, Text } from '@chakra-ui/react'

import { TokenDoc } from './token-doc'

const { _config, tokens } = defaultSystem

const fonts = Object.keys(_config.theme?.tokens?.fonts ?? {})
const fontSizes = Object.keys(_config.theme?.tokens?.fontSizes ?? {})
const fontWeights = Object.keys(_config.theme?.tokens?.fontWeights ?? {})
const lineHeights = Object.keys(_config.theme?.tokens?.lineHeights ?? {})
const letterSpacings = Object.keys(_config.theme?.tokens?.letterSpacings ?? {})

export const FontTokenDoc = () => {
  return (
    <TokenDoc mt="8" title="theme.tokens.fonts">
      <Stack gap="8">
        <For each={fonts}>
          {(font) => {
            const token = tokens.getByName(`fonts.${font}`)
            return (
              <Stack flex="1" key={font}>
                <Text fontFamily={font} fontSize="3xl">
                  Ag
                </Text>
                <Box>{font}</Box>
                <Box as="pre" color="fg.muted" fontSize="xs" whiteSpace="balance">
                  {token?.originalValue}
                </Box>
              </Stack>
            )
          }}
        </For>
      </Stack>
    </TokenDoc>
  )
}

export const FontSizeTokenDoc = () => {
  return (
    <TokenDoc mt="8" title="theme.tokens.fontSizes">
      <Stack gap="4">
        {fontSizes.map((fontSize) => {
          const token = tokens.getByName(`fontSizes.${fontSize}`)!
          return (
            <Stack align="center" direction="row" key={fontSize}>
              <Text width="4rem">{token.extensions.prop}</Text>
              <Text color="fg.muted" width="6rem">
                {token.value}
              </Text>
              <Text fontSize={token.value}>Ag</Text>
            </Stack>
          )
        })}
      </Stack>
    </TokenDoc>
  )
}

export const FontWeightTokenDoc = () => {
  return (
    <TokenDoc mt="8" title="theme.tokens.fontWeights">
      <Stack gap="4">
        {fontWeights.map((fontWeight) => {
          const token = tokens.getByName(`fontWeights.${fontWeight}`)!
          return (
            <Stack align="center" direction="row" key={fontWeight}>
              <Text width="6rem">{token.extensions.prop}</Text>
              <Text color="fg.muted" width="6rem">
                {token.value}
              </Text>
              <Text fontSize="2xl" fontWeight={token.value}>
                Ag
              </Text>
            </Stack>
          )
        })}
      </Stack>
    </TokenDoc>
  )
}

export const LineHeightTokenDoc = () => {
  return (
    <TokenDoc mt="8" title="theme.tokens.lineHeights">
      <Stack gap="8">
        {lineHeights.map((lineHeight) => {
          const token = tokens.getByName(`lineHeights.${lineHeight}`)!
          return (
            <Stack key={lineHeight}>
              <HStack color="fg.muted">
                <Text>
                  {token.extensions.prop} / {token.value}
                </Text>
              </HStack>
              <Text fontSize="2xl" lineHeight={token.value}>
                Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It
                tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his
                peers and dreams of becoming the Hokage, the leader of his village.
              </Text>
            </Stack>
          )
        })}
      </Stack>
    </TokenDoc>
  )
}

export const LetterSpacingTokenDoc = () => {
  return (
    <TokenDoc mt="8" title="theme.tokens.letterSpacings">
      <Stack gap="4">
        {letterSpacings.map((letterSpacing) => {
          const token = tokens.getByName(`letterSpacings.${letterSpacing}`)!
          return (
            <Stack key={letterSpacing}>
              <Text color="fg.muted">
                {token.extensions.prop} / {token.value}
              </Text>
              <Text fontSize="2xl" letterSpacing={token.value}>
                Naruto Uzumaki
              </Text>
            </Stack>
          )
        })}
      </Stack>
    </TokenDoc>
  )
}
