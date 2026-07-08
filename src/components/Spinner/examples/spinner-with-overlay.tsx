import { Box, Center, Heading, Spinner, Text } from '@chakra-ui/react'

export const SpinnerWithOverlay = () => {
  return (
    <Box aria-busy="true" position="relative" userSelect="none">
      <Heading>Some heading text</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac consectetur libero, id
        ultricies urna. Sed ac consectetur libero, id fames ac ante ipsum primis in faucibus.
      </Text>
      <Box bg="bg/80" inset="0" pos="absolute">
        <Center h="full">
          <Spinner color="teal.500" />
        </Center>
      </Box>
    </Box>
  )
}
