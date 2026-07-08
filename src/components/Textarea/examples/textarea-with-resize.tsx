import { Stack, Textarea } from '@chakra-ui/react'

export const TextareaWithResize = () => {
  return (
    <Stack gap="4" maxWidth="250px">
      <Textarea placeholder="Search the docs…" resize="none" />
      <Textarea placeholder="Search the docs…" resize="vertical" />
      <Textarea placeholder="Search the docs…" resize="horizontal" />
      <Textarea placeholder="Search the docs…" resize="both" />
    </Stack>
  )
}
