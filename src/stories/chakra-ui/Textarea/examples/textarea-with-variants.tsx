import { Stack, Textarea } from '@chakra-ui/react'

export const TextareaWithVariants = () => {
  return (
    <Stack gap="4">
      <Textarea placeholder="outline" variant="outline" />
      <Textarea placeholder="subtle" variant="subtle" />
      <Textarea placeholder="flushed" variant="flushed" />
    </Stack>
  )
}
