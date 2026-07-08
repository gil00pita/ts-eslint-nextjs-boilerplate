import { Center, For, HStack, Stack, Text } from '@chakra-ui/react'

const items = [
  ['Fill', ['fill.muted', 'fill.subtle', 'fill.surface', 'fill.solid']],
  ['Outline', ['outline.subtle', 'outline.solid']],
  ['Indicator', ['indicator.top', 'indicator.bottom', 'indicator.start', 'indicator.end']],
] as const

export const TokensLayerStyle = () => {
  return (
    <Stack gap="20" mb="20" mt="10">
      <For each={items}>
        {([title, styles]) => (
          <Stack gap="4">
            <Text color="fg.muted" fontWeight="medium">
              layerStyle: {title.toLowerCase()}.*
            </Text>
            <HStack gap="10" wrap="wrap">
              <For each={styles}>
                {(layerStyle) => (
                  <Center
                    colorPalette="teal"
                    flex="1"
                    fontWeight="medium"
                    height="10"
                    key={layerStyle}
                    layerStyle={layerStyle}
                  >
                    {layerStyle}
                  </Center>
                )}
              </For>
            </HStack>
          </Stack>
        )}
      </For>
    </Stack>
  )
}
