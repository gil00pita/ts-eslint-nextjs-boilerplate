import { AbsoluteCenter, Box, For, HStack, Span, Text, VStack } from '@chakra-ui/react'

export const AbsoluteCenterWithRtl = () => {
  return (
    <VStack align="stretch" gap="6">
      <For each={['horizontal', 'vertical', 'both']}>
        {(axis) => (
          <VStack dir="rtl" gap="2" key={axis}>
            <Text fontWeight="medium">RTL ({axis})</Text>
            <Box
              bg="bg.muted"
              borderRadius="md"
              h="100px"
              outline="1px solid red"
              position="relative"
            >
              <AbsoluteCenter axis={axis}>
                <HStack bg="green.solid" borderRadius="md" color="white" gap="2" px="4" py="2">
                  <Span>البداية</Span>
                </HStack>
              </AbsoluteCenter>
            </Box>
          </VStack>
        )}
      </For>
    </VStack>
  )
}
