import { Box, Center, HStack } from '@chakra-ui/react'
import { LuPhone } from 'react-icons/lu'

export const CenterWithIcons = () => {
  return (
    <HStack>
      <Center bg="tomato" color="white" h="40px" w="40px">
        <LuPhone />
      </Center>

      <Center bg="tomato" color="white" h="40px" w="40px">
        <Box as="span" fontSize="lg" fontWeight="bold">
          1
        </Box>
      </Center>
    </HStack>
  )
}
