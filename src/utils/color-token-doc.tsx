'use client'

import {
  Center,
  defaultSystem,
  SimpleGrid,
  type SimpleGridProps,
  Stack,
  Text,
  type TokenInterface,
  VStack,
} from '@chakra-ui/react'

import { TokenDoc } from './token-doc'

const { tokens } = defaultSystem

const colors = tokens.categoryMap.get('colors')!
const allColors = Array.from(colors.values())

const keys = ['gray', 'red', 'pink', 'purple', 'cyan', 'blue', 'teal', 'green', 'yellow', 'orange']

export const ColorTokenDoc = () => {
  return (
    <Stack gap="8" my="8">
      {keys.map((key) => (
        <TokenDoc key={key} title={key}>
          <ColorGrid
            tokens={allColors.filter(
              (token) => token.name.startsWith(`colors.${key}`) && !token.extensions.conditions
            )}
          />
        </TokenDoc>
      ))}
    </Stack>
  )
}

export const ColorSemanticTokenDoc = () => {
  return (
    <Stack gap="8" my="8">
      <TokenDoc title="background">
        <ColorGrid tokens={allColors.filter((token) => token.name.startsWith('colors.bg'))} />
      </TokenDoc>

      <TokenDoc title="border">
        <ColorGrid
          tokens={allColors.filter((token) => token.name.startsWith('colors.border'))}
          variant="border"
        />
      </TokenDoc>

      <TokenDoc title="text">
        <ColorGrid
          tokens={allColors.filter((token) => token.name.startsWith('colors.fg'))}
          variant="text"
        />
      </TokenDoc>

      {keys.map((key) => (
        <TokenDoc key={key} title={key}>
          <ColorGrid
            tokens={allColors.filter(
              (token) => token.name.startsWith(`colors.${key}`) && token.extensions.conditions
            )}
          />
        </TokenDoc>
      ))}
    </Stack>
  )
}

interface VariantProps {
  variant?: 'border' | 'background' | 'text'
}

interface ColorGridItemProps extends VariantProps {
  token: TokenInterface
}

const ColorGridItem = (props: ColorGridItemProps) => {
  const { token, variant = 'background' } = props
  const value = token.extensions.cssVar!.ref
  const conditions = token.extensions.conditions
  return (
    <VStack flex="1">
      <Center
        bg={(() => {
          if (variant === 'text' && token.name.includes('inverted')) return 'bg.inverted'
          return variant === 'background' ? value : undefined
        })()}
        borderColor={variant === 'border' ? value : undefined}
        borderWidth="1px"
        color={variant === 'text' ? value : undefined}
        h="20"
        rounded="lg"
        w="full"
      >
        {variant === 'text' && <Text fontSize="lg">Ag</Text>}
      </Center>
      <Text textStyle="xs">{token.name.replace('colors.', '')}</Text>
      {conditions && (
        <Stack mt="1">
          {Object.entries(conditions).map(([key, value]) => (
            <Text color="fg.muted" fontSize="xs" key={key} mt="-1">
              {key.replace('_', '')}: {value.replace('colors.', '')}
            </Text>
          ))}
        </Stack>
      )}
      {!conditions && (
        <Text color="fg.muted" fontSize="xs" mt="-1">
          {token.originalValue}
        </Text>
      )}
    </VStack>
  )
}

interface ColorGridProps extends VariantProps, SimpleGridProps {
  tokens: TokenInterface[]
}

export const ColorGrid = (props: ColorGridProps) => {
  const { tokens, variant = 'background', ...rest } = props
  return (
    <SimpleGrid gap="4" minChildWidth="120px" {...rest}>
      {tokens.map((token) => (
        <ColorGridItem key={token.name} token={token} variant={variant} />
      ))}
    </SimpleGrid>
  )
}
