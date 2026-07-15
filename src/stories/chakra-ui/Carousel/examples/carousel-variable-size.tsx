import { Carousel, Center, IconButton } from '@chakra-ui/react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

const items = [
  { id: '1', label: 'Small', width: '120px' },
  { id: '2', label: 'Medium Size', width: '200px' },
  { id: '3', label: 'XS', width: '80px' },
  { id: '4', label: 'Large Content Here', width: '250px' },
  { id: '5', label: 'Regular', width: '150px' },
]

export const CarouselVariableSize = () => {
  return (
    <Carousel.Root autoSize maxW="xl" mx="auto" slideCount={items.length} spacing="8px">
      <Carousel.Control gap="4">
        <Carousel.PrevTrigger asChild>
          <IconButton size="xs" variant="ghost">
            <LuChevronLeft />
          </IconButton>
        </Carousel.PrevTrigger>

        <Carousel.NextTrigger asChild>
          <IconButton size="xs" variant="ghost">
            <LuChevronRight />
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>

      <Carousel.ItemGroup>
        {items.map((item, index) => (
          <Carousel.Item index={index} key={item.id} snapAlign="center" width="auto">
            <Center bg="bg.emphasized" height="100px" rounded="l2" style={{ width: item.width }}>
              {item.label}
            </Center>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
    </Carousel.Root>
  )
}
