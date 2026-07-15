import { Heading, Highlight, Stack, Text } from '@chakra-ui/react'

export const HeadingWithHighlight = () => {
  return (
    <Stack>
      <Heading letterSpacing="tight" size="3xl">
        <Highlight query="with speed" styles={{ color: 'teal.600' }}>
          Create accessible React apps with speed
        </Highlight>
      </Heading>
      <Text color="fg.muted" fontSize="md">
        Chakra UI is a simple, modular and accessible component library that gives you the building
        blocks you need.
      </Text>
    </Stack>
  )
}
