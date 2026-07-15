import { CheckboxCard, For, Stack } from '@chakra-ui/react'

export const CheckboxCardWithVariants = () => {
  return (
    <Stack maxW="320px">
      <For each={['subtle', 'surface', 'outline']}>
        {(variant) => (
          <CheckboxCard.Root colorPalette="teal" defaultChecked key={variant} variant={variant}>
            <CheckboxCard.HiddenInput />
            <CheckboxCard.Control>
              <CheckboxCard.Label>Checkbox {variant}</CheckboxCard.Label>
              <CheckboxCard.Indicator />
            </CheckboxCard.Control>
          </CheckboxCard.Root>
        )}
      </For>
    </Stack>
  )
}
