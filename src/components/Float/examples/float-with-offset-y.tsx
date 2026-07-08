import { Box, Circle, Float } from '@chakra-ui/react'

export const FloatWithOffsetY = () => (
  <Box bg="bg.emphasized" h="80px" position="relative" w="80px">
    <Float offsetY="-4">
      <Circle bg="red" color="white" size="5">
        3
      </Circle>
    </Float>
  </Box>
)
