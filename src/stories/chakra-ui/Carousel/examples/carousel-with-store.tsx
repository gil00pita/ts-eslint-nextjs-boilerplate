'use client'

import { Button, Carousel, IconButton, useCarousel } from '@chakra-ui/react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

const items = Array.from({ length: 5 })

export const CarouselWithStore = () => {
  const carousel = useCarousel({ slideCount: items.length })

  return (
    <Carousel.RootProvider maxW="xl" mx="auto" value={carousel}>
      <Button onClick={() => carousel.scrollTo(2)} variant="outline">
        Go to slide 3
      </Button>
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
    </Carousel.RootProvider>
  )
}
