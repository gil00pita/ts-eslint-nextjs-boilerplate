import { For, HStack, IconButton, Text, VStack } from '@chakra-ui/react'
import { LuPhone } from 'react-icons/lu'

export const IconButtonWithSizes = () => {
  return (
    <HStack gap="8" wrap="wrap">
      <For each={['xs', 'sm', 'md', 'lg']}>
        {(size) => (
          <VStack key={size}>
            <IconButton aria-label="Search database" size={size} variant="outline">
              <LuPhone />
            </IconButton>
            <Text textStyle="sm">{size}</Text>
          </VStack>
        )}
      </For>
    </HStack>
  )
}
