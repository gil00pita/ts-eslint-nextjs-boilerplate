'use client'

import { Box, Button, CheckboxCard, Text } from '@chakra-ui/react'

export const CheckboxCardExplorerDemo = () => {
  return (
    <CheckboxCard.Root
      _checked={{ border: '1px solid', borderColor: 'fg.subtle' }}
      border="none"
      defaultChecked
      maxW="280px"
      px="3"
      py="2"
      rounded="lg"
      shadow="none"
    >
      <CheckboxCard.HiddenInput />

      <CheckboxCard.Control>
        <CheckboxCard.Addon border="none">
          <Box
            alignItems="center"
            bg="blue.500"
            color="white"
            display="flex"
            fontSize="xs"
            fontWeight="bold"
            h="6"
            justifyContent="center"
            rounded="full"
            w="6"
          >
            N
          </Box>
        </CheckboxCard.Addon>

        <Box flex="1">
          <CheckboxCard.Label fontWeight="medium">Next.js</CheckboxCard.Label>
          <CheckboxCard.Description color="fg.muted" fontSize="sm">
            A React framework for building web apps.
          </CheckboxCard.Description>
        </Box>

        <CheckboxCard.Indicator />
      </CheckboxCard.Control>

      <CheckboxCard.Content>
        <Text color="fg.muted" fontSize="sm" mb="2">
          Includes features like server-side rendering, API routes, and internationalization.
        </Text>
        <Button colorScheme="blue" size="sm" variant="outline">
          Learn More
        </Button>
      </CheckboxCard.Content>
    </CheckboxCard.Root>
  )
}
