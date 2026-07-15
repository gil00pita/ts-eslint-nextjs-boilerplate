import { Heading, Link, LinkBox, LinkOverlay, Span, Text } from '@chakra-ui/react'

export const LinkOverlayArticle = () => {
  return (
    <LinkBox as="article" borderWidth="1px" maxW="sm" p="5" rounded="md">
      <Span asChild color="fg.muted" textStyle="sm">
        <time dateTime="2021-01-15 15:30:00 +0000 UTC">13 days ago</time>
      </Span>
      <Heading my="2" size="lg">
        <LinkOverlay href="#">Chakra V3 Workshop</LinkOverlay>
      </Heading>
      <Text color="fg.muted" mb="3">
        Catch up on whats been cooking at Chakra UI and explore some of the popular community
        resources.
      </Text>
      <Link colorPalette="teal" href="#inner-link" variant="underline">
        Inner Link
      </Link>
    </LinkBox>
  )
}
