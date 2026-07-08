import { AbsoluteCenter, Box } from '@chakra-ui/react'
import { LuHeart } from 'react-icons/lu'

export const AbsoluteCenterWithContent = () => {
  return (
    <Box bg="bg.muted" borderRadius="md" h="100px" position="relative" w="100px">
      <AbsoluteCenter>
        <Box bg="red.solid" borderRadius="full" color="white" fontSize="xl" p="3">
          <LuHeart />
        </Box>
      </AbsoluteCenter>
    </Box>
  )
}
