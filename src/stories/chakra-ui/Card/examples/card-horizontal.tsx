import { Badge, Box, Button, Card, HStack, Image } from '@chakra-ui/react'

export const CardHorizontal = () => (
  <Card.Root flexDirection="row" maxW="xl" overflow="hidden">
    <Image
      alt="Caffe Latte"
      maxW="200px"
      objectFit="cover"
      src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
    />
    <Box>
      <Card.Body>
        <Card.Title mb="2">The perfect latte</Card.Title>
        <Card.Description>
          Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.
        </Card.Description>
        <HStack mt="4">
          <Badge>Hot</Badge>
          <Badge>Caffeine</Badge>
        </HStack>
      </Card.Body>
      <Card.Footer>
        <Button>Buy Latte</Button>
      </Card.Footer>
    </Box>
  </Card.Root>
)
