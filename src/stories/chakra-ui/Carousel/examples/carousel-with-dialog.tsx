'use client'

import {
  AspectRatio,
  Button,
  Carousel,
  CloseButton,
  Dialog,
  HStack,
  IconButton,
  Image,
  Portal,
} from '@chakra-ui/react'
import { useCarouselContext } from '@chakra-ui/react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

export const CarouselWithDialog = () => {
  return (
    <Dialog.Root size="full">
      <Dialog.Trigger asChild>
        <Button size="sm" variant="outline">
          View Product Images
        </Button>
      </Dialog.Trigger>

      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content bg="transparent" shadow="none">
            <Dialog.CloseTrigger asChild>
              <CloseButton color="white" size="lg" />
            </Dialog.CloseTrigger>

            <Dialog.Body alignItems="center" display="flex" h="full" justifyContent="center" p={0}>
              <Carousel.Root h="full" slideCount={items.length} w="full">
                <Carousel.Control gap="4" justifyContent="center" px="4">
                  <Carousel.PrevTrigger asChild>
                    <IconButton size="xs" variant="ghost">
                      <LuChevronLeft />
                    </IconButton>
                  </Carousel.PrevTrigger>

                  <Carousel.ItemGroup width="full">
                    {items.map((src, index) => (
                      <Carousel.Item index={index} key={index}>
                        <AspectRatio maxH="72vh" ratio={16 / 9} w="full">
                          <Image alt={`Product ${index + 1}`} objectFit="contain" src={src} />
                        </AspectRatio>
                      </Carousel.Item>
                    ))}
                  </Carousel.ItemGroup>

                  <Carousel.NextTrigger asChild>
                    <IconButton size="xs" variant="ghost">
                      <LuChevronRight />
                    </IconButton>
                  </Carousel.NextTrigger>
                </Carousel.Control>

                <CarouselThumbnails items={items} />
              </Carousel.Root>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

const items = [
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
  'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
  'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&q=80',
  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
]

const CarouselThumbnails = ({ items }: { items: string[] }) => {
  const carousel = useCarouselContext()

  return (
    <HStack justify="center">
      <Carousel.ProgressText mr="4" />
      {items.map((src, index) => (
        <AspectRatio
          cursor="button"
          key={index}
          onClick={() => carousel.scrollTo(index)}
          ratio={1}
          w="16"
        >
          <Image alt={`Product ${index + 1}`} h="100%" objectFit="cover" src={src} w="100%" />
        </AspectRatio>
      ))}
    </HStack>
  )
}
