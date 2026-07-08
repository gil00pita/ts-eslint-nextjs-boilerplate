'use client'

import { Box, createListCollection, Flex, Image, Listbox, Text } from '@chakra-ui/react'
import { useState } from 'react'

export const ListboxImageExplorer = () => {
  const [selectedImage, setSelectedImage] = useState<string>('mountains')

  const handleSelectionChange = (details: any) => {
    if (details.value.length > 0) {
      setSelectedImage(details.value[0])
    }
  }

  const currentImage = images.items.find((img) => img.value === selectedImage)

  return (
    <Flex gap="6" maxW="800px">
      <Listbox.Root
        collection={images}
        maxW="2xs"
        onValueChange={handleSelectionChange}
        value={[selectedImage]}
        variant="solid"
      >
        <Listbox.Content border="0">
          {images.items.map((image) => (
            <Listbox.Item item={image} key={image.value}>
              <Listbox.ItemText>{image.label}</Listbox.ItemText>
              <Listbox.ItemIndicator />
            </Listbox.Item>
          ))}
        </Listbox.Content>
      </Listbox.Root>

      <Box flex="1">
        {currentImage && (
          <Box>
            <Text fontSize="lg" fontWeight="semibold" mb="3">
              {currentImage.label}
            </Text>
            <Image
              alt={currentImage.label}
              borderRadius="md"
              maxH="400px"
              objectFit="cover"
              src={currentImage.url}
              width="full"
            />
            <Text color="fg.muted" fontSize="sm" mt="2">
              {currentImage.description}
            </Text>
          </Box>
        )}
      </Box>
    </Flex>
  )
}

const images = createListCollection({
  items: [
    {
      description: 'Scenic mountain view',
      label: 'Mountain Landscape',
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      value: 'mountains',
    },
    {
      description: 'Peaceful ocean scene',
      label: 'Ocean Waves',
      url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop',
      value: 'ocean',
    },
    {
      description: 'Tranquil forest trail',
      label: 'Forest Path',
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      value: 'forest',
    },
    {
      description: 'Urban cityscape at night',
      label: 'City Skyline',
      url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      value: 'city',
    },
    {
      description: 'Golden sand dunes',
      label: 'Desert Dunes',
      url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop',
      value: 'desert',
    },
  ],
})
