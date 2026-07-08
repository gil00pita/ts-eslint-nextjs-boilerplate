import { Avatar, Button, Card, Heading } from '@chakra-ui/react'

export const CardExplorerDemo = () => {
  return (
    <Card.Root borderWidth="1px" rounded="md" width="320px">
      <Card.Header borderBottomWidth="1px" px="4" py="3">
        <Heading size="sm">Profile</Heading>
      </Card.Header>

      <Card.Body gap="3" pb="4" pt="4" px="4">
        <Avatar.Root shape="rounded" size="lg">
          <Avatar.Image src="https://picsum.photos/200/300" />
          <Avatar.Fallback name="Nue Camp" />
        </Avatar.Root>
        <Card.Title>Nue Camp</Card.Title>
        <Card.Description color="gray.600" fontSize="sm">
          This is the card body. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          nec odio vel dui euismod fermentum.
        </Card.Description>
      </Card.Body>

      <Card.Footer gap="2" justifyContent="flex-end" pb="4" px="4">
        <Button size="sm" variant="outline">
          View
        </Button>
        <Button size="sm">Join</Button>
      </Card.Footer>
    </Card.Root>
  )
}
