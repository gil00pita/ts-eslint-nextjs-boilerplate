import { Carousel, IconButton, Image } from '@chakra-ui/react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

export const CarouselWithThumbnails = () => {
  return (
    <Carousel.Root gap="4" maxW="2xl" slideCount={items.length}>
      <Carousel.Control gap="4" justifyContent="center" width="full">
        <Carousel.PrevTrigger asChild>
          <IconButton size="xs" variant="outline">
            <LuChevronLeft />
          </IconButton>
        </Carousel.PrevTrigger>

        <Carousel.ItemGroup width="full">
          {items.map((item, index) => (
            <Carousel.Item index={index} key={index}>
              <Image
                alt={item.label}
                aspectRatio="16/9"
                h="100%"
                objectFit="cover"
                src={item.url}
                w="100%"
              />
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>

        <Carousel.NextTrigger asChild>
          <IconButton size="xs" variant="outline">
            <LuChevronRight />
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>

      <Carousel.IndicatorGroup>
        {items.map((item, index) => (
          <Carousel.Indicator
            _current={{
              outline: '2px solid currentColor',
              outlineOffset: '2px',
            }}
            index={index}
            key={index}
            unstyled
          >
            <Image alt={item.label} aspectRatio="16/9" objectFit="cover" src={item.url} w="20" />
          </Carousel.Indicator>
        ))}
      </Carousel.IndicatorGroup>
    </Carousel.Root>
  )
}

const items = [
  {
    label: 'Mountain Landscape',
    url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&h=900&q=80',
  },
  {
    label: 'Forest Path',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&h=900&q=80',
  },
  {
    label: 'Ocean Waves',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=900&q=80',
  },
  {
    label: 'Desert Dunes',
    url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&h=900&q=80',
  },
  {
    label: 'Sunset Lake',
    url: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&q=80&w=2070',
  },
]
