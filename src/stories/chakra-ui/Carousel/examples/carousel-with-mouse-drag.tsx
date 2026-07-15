import { Carousel, HStack, IconButton } from '@chakra-ui/react'
import { LuChevronLeft, LuChevronRight, LuMouse, LuMoveHorizontal } from 'react-icons/lu'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

const items = Array.from({ length: 5 })

export const CarouselWithMouseDrag = () => {
  return (
    <Carousel.Root allowMouseDrag maxW="xl" mx="auto" slideCount={items.length}>
      <HStack mb="4" textStyle="sm">
        <LuMouse /> <LuMoveHorizontal /> Click and drag to change slides
      </HStack>
      <Carousel.ItemGroup>
        {items.map((_, index) => (
          <Carousel.Item index={index} key={index}>
            <DecorativeBox fontSize="2.5rem" h="300px" rounded="lg" w="100%">
              {index + 1}
            </DecorativeBox>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <Carousel.Control gap="4" justifyContent="center">
        <Carousel.PrevTrigger asChild>
          <IconButton size="xs" variant="ghost">
            <LuChevronLeft />
          </IconButton>
        </Carousel.PrevTrigger>

        <Carousel.Indicators />

        <Carousel.NextTrigger asChild>
          <IconButton size="xs" variant="ghost">
            <LuChevronRight />
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  )
}
