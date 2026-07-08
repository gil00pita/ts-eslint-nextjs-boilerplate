'use client'

import { createListCollection, Image, Listbox, Stack, Text } from '@chakra-ui/react'

export const ListboxHorizontal = () => {
  return (
    <Listbox.Root collection={musicAlbums} maxW="640px" orientation="horizontal">
      <Listbox.Label>Select Album</Listbox.Label>
      <Listbox.Content>
        {musicAlbums.items.map((album) => (
          <Listbox.Item
            alignItems="flex-start"
            flexDirection="column"
            gap="2"
            item={album}
            key={album.value}
            position="relative"
          >
            <Image
              alt={album.title}
              aspectRatio="1"
              bg="bg.subtle"
              borderRadius="l2"
              flexShrink="0"
              height="150px"
              minWidth="150px"
              objectFit="cover"
              src={album.image}
            />
            <Stack gap="0">
              <Text fontSize="sm" fontWeight="medium" whiteSpace="nowrap">
                {album.title}
              </Text>
              <Text fontSize="xs">{album.artist}</Text>
            </Stack>
            <Listbox.ItemIndicator
              borderColor="fg.inverted"
              borderWidth="2px"
              layerStyle="fill.solid"
              position="absolute"
              right="4"
              top="4"
            />
          </Listbox.Item>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  )
}

const musicAlbums = createListCollection({
  items: [
    {
      artist: 'Luna Solstice',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=160&h=160&fit=crop',
      title: 'Euphoric Echoes',
      value: 'euphoric-echoes',
    },
    {
      artist: 'Electra Skyline',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=160&h=160&fit=crop',
      title: 'Neon Dreamscape',
      value: 'neon-dreamscape',
    },
    {
      artist: "Orion's Symphony",
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=160&h=160&fit=crop',
      title: 'Cosmic Serenade',
      value: 'cosmic-serenade',
    },
    {
      artist: 'Violet Mistral',
      image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=160&h=160&fit=crop',
      title: 'Melancholy Melodies',
      value: 'melancholy-melodies',
    },
    {
      artist: 'Mirage Beats',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=160&h=160&fit=crop',
      title: 'Rhythmic Illusions',
      value: 'rhythmic-illusions',
    },
  ],
})
