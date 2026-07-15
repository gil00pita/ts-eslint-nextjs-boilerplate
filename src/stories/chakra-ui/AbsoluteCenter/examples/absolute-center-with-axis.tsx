import { AbsoluteCenter, Box, For, Text, VStack } from '@chakra-ui/react'

export const AbsoluteCenterWithAxis = () => {
  return (
    <VStack align="stretch" gap="6">
      <For each={['horizontal', 'vertical', 'both']}>
        {(axis) => (
          <VStack gap="2" key={axis}>
            <Text fontWeight="medium">{`<AbsoluteCenter axis="${axis}" />`}</Text>
            <Box h="80px" outline="1px solid red" position="relative">
              <AbsoluteCenter axis={axis}>
                <Box bg="blue.solid" borderRadius="sm" color="white" px="3" py="1">
                  {axis}
                </Box>
              </AbsoluteCenter>
            </Box>
          </VStack>
        )}
      </For>
    </VStack>
  )
}
