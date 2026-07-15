'use client'

import { Avatar, Box, Card, HStack, Marquee, Stack } from '@chakra-ui/react'
import { IoStar } from 'react-icons/io5'

export const MarqueeWithTestimonials = () => (
  <Marquee.Root pauseOnInteraction py="10">
    <Marquee.Edge side="start" />
    <Marquee.Viewport>
      <Marquee.Content>
        {testimonials.map((item, i) => (
          <Marquee.Item key={i} px="1rem">
            <TestimonialCard item={item} />
          </Marquee.Item>
        ))}
      </Marquee.Content>
    </Marquee.Viewport>
    <Marquee.Edge side="end" />
  </Marquee.Root>
)

const TestimonialCard = ({ item }: { item: Testimonial }) => {
  return (
    <Card.Root h="full" maxW="sm">
      <Card.Body>
        <Stack gap="3">
          <HStack gap="1">
            {[...Array(5)].map((_, i) => (
              <Box as={IoStar} color="orange.solid" key={i} />
            ))}
          </HStack>

          <Card.Description color="fg.muted" minH="16" textStyle="md">
            "{item.content}"
          </Card.Description>

          <HStack gap="3" mt="1">
            <Avatar.Root size="sm">
              <Avatar.Image src={item.avatar} />
              <Avatar.Fallback name={item.name} />
            </Avatar.Root>
            <Box textStyle="sm">
              <Box color="fg" fontWeight="medium">
                {item.name}
              </Box>
              <Box color="fg.muted">{item.role}</Box>
            </Box>
          </HStack>
        </Stack>
      </Card.Body>
    </Card.Root>
  )
}

interface Testimonial {
  name: string
  role: string
  rating: number
  avatar: string
  content: string
}

const testimonials: Testimonial[] = [
  {
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    content:
      'This library saved me weeks of work. The components are accessible and easy to customize.',
    name: 'Sarah Chen',
    rating: 5,
    role: 'Product Designer',
  },
  {
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    content: 'The animations are buttery smooth. I love how easy it is to implement the marquee.',
    name: 'Michael Torres',
    rating: 4,
    role: 'Frontend Dev',
  },
  {
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026302d',
    content: 'Scalable, reliable, and beautiful. Highly recommended for any modern web project.',
    name: 'Emily Wang',
    rating: 5,
    role: 'CTO',
  },
  {
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    content: 'Our conversion rates increased by 15% after switching to this UI system.',
    name: 'David Smith',
    rating: 5,
    role: 'Marketing Lead',
  },
  {
    avatar: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
    content: 'Documentation is top-notch. I was able to build my MVP in a single weekend.',
    name: 'Jessica Lee',
    rating: 4,
    role: 'Indie Hacker',
  },
]
