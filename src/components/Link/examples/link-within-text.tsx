import { Link, Text } from '@chakra-ui/react'

export const LinkWithinText = () => {
  return (
    <Text>
      Visit the{' '}
      <Link colorPalette="teal" href="https://chakra-ui.com" variant="underline">
        Chakra UI
      </Link>{' '}
      website
    </Text>
  )
}
