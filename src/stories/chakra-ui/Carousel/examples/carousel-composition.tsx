import {
  Badge,
  Box,
  Carousel,
  HStack,
  Icon,
  IconButton,
  Image,
  Span,
  Stack,
} from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

export const CarouselComposition = () => {
  return (
    <Carousel.Root gap="3" slideCount={properties.length} slidesPerPage={3}>
      <HStack justify="space-between">
        <Span fontWeight="medium">Popular homes in Cape Town</Span>
        <HStack>
          <Carousel.PrevTrigger asChild>
            <IconButton size="xs" variant="subtle">
              <LuChevronLeft />
            </IconButton>
          </Carousel.PrevTrigger>
          <Carousel.NextTrigger asChild>
            <IconButton size="xs" variant="subtle">
              <LuChevronRight />
            </IconButton>
          </Carousel.NextTrigger>
        </HStack>
      </HStack>
      <Carousel.ItemGroup>
        {properties.map((property, index) => (
          <Carousel.Item index={index} key={property.id}>
            <PropertyCard data={property} />
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
    </Carousel.Root>
  )
}

interface PropertyCardProps {
  data: Property
}

const PropertyCard = ({ data }: PropertyCardProps) => (
  <Stack gap="3">
    <Box position="relative">
      <Image
        alt={data.title}
        draggable={false}
        h="200px"
        objectFit="cover"
        rounded="l2"
        src={data.image}
        w="full"
      />
      {data.favorite && (
        <Badge insetStart="2" pos="absolute" size="sm" top="2">
          Guest favorite
        </Badge>
      )}
    </Box>
    <Stack gap="1">
      <Span fontWeight="semibold" textStyle="sm">
        {data.title}
      </Span>
      <HStack color="fg.muted" textStyle="xs">
        <Span>
          ${data.price} for {data.nights} nights
        </Span>
        <HStack gap="1">
          <Icon color="orange.solid">
            <FaStar />
          </Icon>
          <Span fontWeight="medium">{data.rating}</Span>
        </HStack>
      </HStack>
    </Stack>
  </Stack>
)

interface Property {
  id: number
  title: string
  price: number
  nights: number
  rating: number
  image: string
  favorite?: boolean
}

const properties: Property[] = [
  {
    favorite: true,
    id: 1,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    nights: 2,
    price: 152,
    rating: 4.92,
    title: 'Loft Apartment in City Bowl',
  },
  {
    favorite: true,
    id: 2,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    nights: 2,
    price: 296,
    rating: 4.99,
    title: 'Modern Studio, Camps Bay Beachfront',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
    nights: 2,
    price: 257,
    rating: 4.94,
    title: 'Retreat in Hout Bay with Views',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    nights: 2,
    price: 132,
    rating: 4.87,
    title: 'Sunny Flat in Sea Point',
  },
  {
    favorite: true,
    id: 5,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    nights: 2,
    price: 200,
    rating: 4.83,
    title: 'V&A Waterfront City Studio',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    nights: 2,
    price: 247,
    rating: 4.96,
    title: 'Luxury Pad, Bantry Bay',
  },
  {
    favorite: true,
    id: 7,
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80',
    nights: 2,
    price: 135,
    rating: 4.81,
    title: 'Cozy Nest in Green Point',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    nights: 2,
    price: 450,
    rating: 4.98,
    title: 'Elegant Villa in Constantia',
  },
]
