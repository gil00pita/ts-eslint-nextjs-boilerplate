'use client'

import { Box, HStack, Image, Marquee } from '@chakra-ui/react'

export const MarqueeImageGallery = () => (
  <Box height="500px" overflow="hidden" perspective="500px">
    <HStack gap="4" height="700px" transform="rotateX(20deg)" transformOrigin="center top">
      <Marquee.Root autoFill flex="1" side="top">
        <Marquee.Viewport>
          <Marquee.Content>
            <MarqueeItems images={imagesColumn1} />
          </Marquee.Content>
        </Marquee.Viewport>
      </Marquee.Root>

      <Marquee.Root autoFill flex="1" side="bottom">
        <Marquee.Viewport>
          <Marquee.Content>
            <MarqueeItems images={imagesColumn2} />
          </Marquee.Content>
        </Marquee.Viewport>
      </Marquee.Root>

      <Marquee.Root autoFill flex="1" side="top">
        <Marquee.Viewport>
          <Marquee.Content>
            <MarqueeItems images={imagesColumn3} />
          </Marquee.Content>
        </Marquee.Viewport>
      </Marquee.Root>
    </HStack>
  </Box>
)

const MarqueeItems = (props: { images: string[] }) => {
  return (
    <>
      {props.images.map((src, i) => (
        <Marquee.Item key={i} py="2">
          <Image
            alt={`Gallery image ${i + 1}`}
            height="200px"
            objectFit="cover"
            rounded="lg"
            shadow="md"
            src={src}
            width="full"
          />
        </Marquee.Item>
      ))}
    </>
  )
}

const imagesColumn1 = [
  'https://picsum.photos/seed/img1/280/200',
  'https://picsum.photos/seed/img2/280/200',
  'https://picsum.photos/seed/img3/280/200',
  'https://picsum.photos/seed/img4/280/200',
]

const imagesColumn2 = [
  'https://picsum.photos/seed/img5/280/200',
  'https://picsum.photos/seed/img6/280/200',
  'https://picsum.photos/seed/img7/280/200',
  'https://picsum.photos/seed/img8/280/200',
]

const imagesColumn3 = [
  'https://picsum.photos/seed/img9/280/200',
  'https://picsum.photos/seed/img10/280/200',
  'https://picsum.photos/seed/img11/280/200',
  'https://picsum.photos/seed/img12/280/200',
]
