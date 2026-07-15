import { Code, Stack } from '@chakra-ui/react'

export const CodeWithSizes = () => {
  return (
    <Stack align="flex-start" gap="2">
      <Code size="xs">console.log()</Code>
      <Code size="sm">console.log()</Code>
      <Code size="md">console.log()</Code>
      <Code size="lg">console.log()</Code>
    </Stack>
  )
}
