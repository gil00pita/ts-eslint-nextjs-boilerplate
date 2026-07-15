'use client'

import { Box, createListCollection, Listbox, Text } from '@chakra-ui/react'

export const ListboxWithDescription = () => {
  return (
    <Listbox.Root collection={frameworks} maxW="400px">
      <Listbox.Label>Select framework</Listbox.Label>
      <Listbox.Content>
        {frameworks.items.map((framework) => (
          <Listbox.Item item={framework} key={framework.value}>
            <Box flex="1">
              <Listbox.ItemText>{framework.label}</Listbox.ItemText>
              <Text color="fg.muted" fontSize="xs" mt="1">
                {framework.description}
              </Text>
            </Box>
            <Listbox.ItemIndicator />
          </Listbox.Item>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  )
}

const frameworks = createListCollection({
  items: [
    {
      description: 'A JavaScript library for building user interfaces',
      label: 'React.js',
      value: 'react',
    },
    {
      description: 'The progressive JavaScript framework',
      label: 'Vue.js',
      value: 'vue',
    },
    {
      description: 'Platform for building mobile and desktop web applications',
      label: 'Angular',
      value: 'angular',
    },
    {
      description: 'Cybernetically enhanced web apps',
      label: 'Svelte',
      value: 'svelte',
    },
    {
      description: 'The React framework for production',
      label: 'Next.js',
      value: 'nextjs',
    },
  ],
})
