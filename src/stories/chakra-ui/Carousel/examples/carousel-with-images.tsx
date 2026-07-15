import type { IconButtonProps } from '@chakra-ui/react'

import { AspectRatio, Box, Carousel, IconButton, Image } from '@chakra-ui/react'
import { forwardRef } from 'react'
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu'

export const CarouselWithImages = () => {
  return (
    <Carousel.Root
      colorPalette="white"
      gap="4"
      maxW="2xl"
      mx="auto"
      position="relative"
      slideCount={items.length}
    >
      <Carousel.Control gap="4" position="relative" width="full">
        <Carousel.PrevTrigger asChild>
          <ActionButton insetStart="4">
            <LuArrowLeft />
          </ActionButton>
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
          <ActionButton insetEnd="4">
            <LuArrowRight />
          </ActionButton>
        </Carousel.NextTrigger>

        <Box bottom="6" position="absolute" width="full">
          <Carousel.Indicators
            _current={{ bg: 'colorPalette.subtle', opacity: 1, width: '10' }}
            boxSize="2"
            opacity="0.5"
            transformOrigin="center"
            transition="width 0.2s ease-in-out"
          />
        </Box>
      </Carousel.Control>
    </Carousel.Root>
  )
}

const ActionButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function ActionButton(props, ref) {
    return (
      <IconButton
        {...props}
        bg="bg"
        position="absolute"
        ref={ref}
        rounded="full"
        size="xs"
        variant="outline"
        zIndex="1"
      />
    )
  }
)

const items = [
  'https://images.unsplash.com/photo-1656433031375-5042f5afe894?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2371',
  'https://images.unsplash.com/photo-1587466412525-87497b34fc88?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2673',
  'https://images.unsplash.com/photo-1629581688635-5d88654e5bdd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2831',
  'https://images.unsplash.com/photo-1661030420948-862787de0056?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2370',
  'https://images.unsplash.com/photo-1703505841379-2f863b201212?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2371',
  'https://images.unsplash.com/photo-1607776905497-b4f788205f6a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2370',
]
