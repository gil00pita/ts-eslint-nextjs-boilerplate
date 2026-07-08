import { Box, Flex, Spacer } from '@chakra-ui/react'

export const FlexWithSpacer = () => {
  return (
    <Flex>
      <Box bg="red.400" color="white" p="4">
        Box 1
      </Box>
      <Spacer />
      <Box bg="green.400" color="white" p="4">
        Box 2
      </Box>
    </Flex>
  )
}
