import { Box, Circle, Float } from '@chakra-ui/react'

export const FloatBasic = () => (
  <Box bg="bg.emphasized" h="80px" position="relative" w="80px">
    <Float>
      <Circle bg="red" color="white" size="5">
        3
      </Circle>
    </Float>
  </Box>
)
