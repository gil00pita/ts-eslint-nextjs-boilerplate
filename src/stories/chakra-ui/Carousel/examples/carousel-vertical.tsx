import { Carousel, IconButton } from '@chakra-ui/react'
import { LuChevronDown, LuChevronUp } from 'react-icons/lu'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

const items = Array.from({ length: 5 })

export const CarouselVertical = () => {
  return (
    <Carousel.Root
      height="320px"
      maxW="xl"
      mx="auto"
      orientation="vertical"
      slideCount={items.length}
    >
      <Carousel.ItemGroup flex="1">
        {items.map((_, index) => (
          <Carousel.Item index={index} key={index}>
            <DecorativeBox fontSize="2.5rem">{index + 1}</DecorativeBox>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
      <Carousel.Control gap="4" h="100%" justifyContent="space-between">
        <Carousel.PrevTrigger asChild>
          <IconButton size="xs" variant="ghost">
            <LuChevronUp />
          </IconButton>
        </Carousel.PrevTrigger>

        <Carousel.Indicators />

        <Carousel.NextTrigger asChild>
          <IconButton size="xs" variant="ghost">
            <LuChevronDown />
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  )
}
