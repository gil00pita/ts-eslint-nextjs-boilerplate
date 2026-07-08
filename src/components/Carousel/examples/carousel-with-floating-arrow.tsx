import { Carousel, IconButton } from '@chakra-ui/react'
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

const items = Array.from({ length: 5 })

export const CarouselWithFloatingArrow = () => {
  return (
    <Carousel.Root gap="4" maxW="xl" mx="auto" slideCount={items.length}>
      <Carousel.Control gap="4" justifyContent="center" width="full">
        <Carousel.PrevTrigger asChild>
          <IconButton size="xs" variant="outline">
            <LuArrowLeft />
          </IconButton>
        </Carousel.PrevTrigger>

        <Carousel.ItemGroup width="full">
          {items.map((_src, index) => (
            <Carousel.Item index={index} key={index}>
              <DecorativeBox fontSize="2.5rem" h="300px" rounded="lg" w="100%">
                {index + 1}
              </DecorativeBox>
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>

        <Carousel.NextTrigger asChild>
          <IconButton size="xs" variant="outline">
            <LuArrowRight />
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>

      <Carousel.Indicators />
    </Carousel.Root>
  )
}
