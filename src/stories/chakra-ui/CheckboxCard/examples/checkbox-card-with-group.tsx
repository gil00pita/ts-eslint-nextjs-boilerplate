import { CheckboxCard, CheckboxGroup, Flex, Text } from '@chakra-ui/react'

export const CheckboxCardWithGroup = () => {
  return (
    <CheckboxGroup defaultValue={['next']}>
      <Text fontWeight="medium" textStyle="sm">
        Select framework(s)
      </Text>
      <Flex gap="2">
        {items.map((item) => (
          <CheckboxCard.Root key={item.value} value={item.value}>
            <CheckboxCard.HiddenInput />
            <CheckboxCard.Control>
              <CheckboxCard.Content>
                <CheckboxCard.Label>{item.title}</CheckboxCard.Label>
                <CheckboxCard.Description>{item.description}</CheckboxCard.Description>
              </CheckboxCard.Content>
              <CheckboxCard.Indicator />
            </CheckboxCard.Control>
          </CheckboxCard.Root>
        ))}
      </Flex>
    </CheckboxGroup>
  )
}

const items = [
  { description: 'Best for apps', title: 'Next.js', value: 'next' },
  { description: 'Best for SPAs', title: 'Vite', value: 'vite' },
  { description: 'Best for static sites', title: 'Astro', value: 'astro' },
]
