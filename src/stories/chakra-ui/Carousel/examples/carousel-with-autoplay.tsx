import { Carousel, HStack, IconButton } from '@chakra-ui/react'
import { LuChevronLeft, LuChevronRight, LuClock, LuPause, LuPlay } from 'react-icons/lu'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

const items = Array.from({ length: 5 })

export const CarouselWithAutoplay = () => {
  return (
    <Carousel.Root autoplay={{ delay: 2000 }} maxW="xl" mx="auto" slideCount={items.length}>
      <HStack mb="4" textStyle="sm">
        <LuClock /> {'autoplay={{ delay: 2000 }}'} or {'autoplay={true}'}
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

        <Carousel.AutoplayTrigger asChild>
          <IconButton aria-label="Toggle autoplay" size="sm" variant="ghost">
            <Carousel.AutoplayIndicator paused={<LuPause />} play={<LuPlay />} />
          </IconButton>
        </Carousel.AutoplayTrigger>
        <Carousel.NextTrigger asChild>
          <IconButton size="xs" variant="ghost">
            <LuChevronRight />
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  )
}
