import type { ReactNode } from 'react'

import { Grid, Heading, HStack, Icon, Stack, Text } from '@chakra-ui/react'
import { LuCheck, LuX } from 'react-icons/lu'

interface CompareListProps {
  excludeItems: ReactNode[]
  excludeTitle: string
  includeItems: ReactNode[]
  includeTitle: string
}

export const CompareList = ({
  excludeItems,
  excludeTitle,
  includeItems,
  includeTitle,
}: CompareListProps) => (
  <Grid gap={4} my={6} templateColumns={{ base: '1fr', md: '1fr 1fr' }}>
    <Stack
      bg="bg.success"
      borderColor="border.success"
      borderRadius="xl"
      borderWidth="1px"
      gap={3}
      p={5}
    >
      <Heading as="h3" color="fg.success" size="sm">
        {includeTitle}
      </Heading>
      <Stack gap={2}>
        {includeItems.map((item, index) => (
          <HStack align="start" gap={2} key={index}>
            <Icon as={LuCheck} boxSize={4} color="fg.success" mt="1" />
            <Text fontSize="sm">{item}</Text>
          </HStack>
        ))}
      </Stack>
    </Stack>
    <Stack
      bg="bg.error"
      borderColor="border.error"
      borderRadius="xl"
      borderWidth="1px"
      gap={3}
      p={5}
    >
      <Heading as="h3" color="fg.error" size="sm">
        {excludeTitle}
      </Heading>
      <Stack gap={2}>
        {excludeItems.map((item, index) => (
          <HStack align="start" gap={2} key={index}>
            <Icon as={LuX} boxSize={4} color="fg.error" mt="1" />
            <Text fontSize="sm">{item}</Text>
          </HStack>
        ))}
      </Stack>
    </Stack>
  </Grid>
)
