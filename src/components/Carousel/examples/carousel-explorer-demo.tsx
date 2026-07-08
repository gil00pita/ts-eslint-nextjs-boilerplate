import { Carousel, IconButton } from '@chakra-ui/react'
import { LuChevronLeft, LuChevronRight, LuPause, LuPlay } from 'react-icons/lu'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

const items = Array.from({ length: 5 })

export const CarouselExplorerDemo = () => {
  return (
    <Carousel.Root flexGrow="1" slideCount={items.length} spacing="20px">
      <Carousel.ItemGroup p="2">
        {items.map((_, index) => (
          <Carousel.Item index={index} key={index}>
            <DecorativeBox fontSize="2.5rem" h="300px" rounded="lg" w="100%">
              {index + 1}
            </DecorativeBox>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <Carousel.Control gap="4" justifyContent="center">
        <Carousel.ProgressText minW="8" textStyle="sm" />

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
