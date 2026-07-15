import { Box } from '@chakra-ui/react'

export const BoxWithPseudoProps = () => {
  return (
    <Box _hover={{ bg: 'green' }} bg="tomato" color="white" p="4" w="100%">
      This is the Box
    </Box>
  )
}
