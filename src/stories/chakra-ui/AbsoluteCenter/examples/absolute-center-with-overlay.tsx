import { AbsoluteCenter, Box, HStack, Spinner, Text } from '@chakra-ui/react'

const Overlay = () => (
  <AbsoluteCenter backdropFilter="blur(2px)" bg="bg/80" p="4" rounded="md">
    <HStack gap="3">
      <Spinner colorPalette="blue" size="sm" />
      <Text color="fg.muted" fontSize="sm">
        Loading...
      </Text>
    </HStack>
  </AbsoluteCenter>
)

export const AbsoluteCenterWithOverlay = () => {
  return (
    <Box bg="bg.muted" h="120px" p="10" position="relative" rounded="md">
      <Box aria-busy="true" opacity="0.5">
        Some content that is being loaded...
      </Box>
      <Overlay />
    </Box>
  )
}
