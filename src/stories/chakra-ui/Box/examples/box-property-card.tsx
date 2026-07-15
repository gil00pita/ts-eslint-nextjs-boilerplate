import { Badge, Box, HStack, Icon, Image, Text } from '@chakra-ui/react'
import { HiStar } from 'react-icons/hi'

export const BoxPropertyCard = () => {
  return (
    <Box borderWidth="1px" maxW="sm">
      <Image alt={data.imageAlt} src={data.imageUrl} />

      <Box p="4" spaceY="2">
        <HStack>
          <Badge colorPalette="teal" variant="solid">
            Superhost
          </Badge>
          <HStack fontWeight="medium" gap="1">
            <Icon color="orange.400">
              <HiStar />
            </Icon>
            <Text>
              {data.rating} ({data.reviewCount})
            </Text>
          </HStack>
        </HStack>
        <Text color="fg" fontWeight="medium">
          {data.title}
        </Text>
        <HStack color="fg.muted">
          {data.formattedPrice} • {data.beds} beds
        </HStack>
      </Box>
    </Box>
  )
}

const data = {
  beds: 3,
  formattedPrice: '$435',
  imageAlt: 'Rear view of modern home with pool',
  imageUrl: 'https://bit.ly/2Z4KKcF',
  rating: 4.5,
  reviewCount: 34,
  title: 'Modern home in city center in the heart of historic Los Angeles',
}
