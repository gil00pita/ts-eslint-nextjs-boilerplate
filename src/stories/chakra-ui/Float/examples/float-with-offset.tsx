import { Box, Circle, Float } from '@chakra-ui/react'

export const FloatWithOffset = () => (
  <Box bg="bg.emphasized" h="80px" position="relative" w="80px">
    <Float offset="4">
      <Circle bg="red" color="white" size="5">
        3
      </Circle>
    </Float>
  </Box>
)
