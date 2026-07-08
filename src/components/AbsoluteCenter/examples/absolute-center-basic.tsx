import { AbsoluteCenter, Box } from '@chakra-ui/react'

export const AbsoluteCenterBasic = () => {
  return (
    <Box bg="bg.muted" borderRadius="md" h="100px" position="relative">
      <AbsoluteCenter>
        <Box bg="bg.emphasized" borderRadius="md" color="fg" px="4" py="2">
          Centered Content
        </Box>
      </AbsoluteCenter>
    </Box>
  )
}
