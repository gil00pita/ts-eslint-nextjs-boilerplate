'use client'

import { HStack, Stack, Stat } from '@chakra-ui/react'

export const StatExplorerDemo = () => {
  return (
    <Stack align="stretch" gap="6" maxW="sm">
      <Stat.Root borderRadius="md" borderWidth="1px" p="4" width="full">
        <Stat.Label color="gray.600" fontSize="sm" mb="1">
          Unique visitors
        </Stat.Label>

        <HStack gap="2">
          <Stat.ValueText as="span" fontSize="2xl" fontWeight="bold" lineHeight="1">
            192.1
            <Stat.ValueUnit as="span" color="gray.500" fontSize="lg" lineHeight="1" ml="1">
              k
            </Stat.ValueUnit>
          </Stat.ValueText>

          <Stat.UpIndicator as="span" color="green.500" fontSize="sm" lineHeight="1">
            ▲ 12%
          </Stat.UpIndicator>
        </HStack>

        <Stat.HelpText color="gray.500" fontSize="sm" mt="2">
          Compared to last week
        </Stat.HelpText>
      </Stat.Root>

      <Stat.Root borderRadius="md" borderWidth="1px" p="4" width="full">
        <Stat.Label color="gray.600" fontSize="sm" mb="1">
          New signups
        </Stat.Label>

        <HStack gap="2">
          <Stat.ValueText as="span" fontSize="2xl" fontWeight="bold" lineHeight="1">
            85
            <Stat.ValueUnit as="span" color="gray.500" fontSize="lg" lineHeight="1" ml="1">
              users
            </Stat.ValueUnit>
          </Stat.ValueText>

          <Stat.DownIndicator as="span" color="red.500" fontSize="sm" lineHeight="1">
            ▼ 8%
          </Stat.DownIndicator>
        </HStack>

        <Stat.HelpText color="gray.500" fontSize="sm" mt="2">
          Compared to last week
        </Stat.HelpText>
      </Stat.Root>
    </Stack>
  )
}
