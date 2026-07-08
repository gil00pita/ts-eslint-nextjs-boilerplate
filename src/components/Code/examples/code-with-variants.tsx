import { Code, Stack } from '@chakra-ui/react'

export const CodeWithVariants = () => {
  return (
    <Stack align="flex-start" gap="2">
      <Code variant="solid">console.log()</Code>
      <Code variant="outline">console.log()</Code>
      <Code variant="subtle">console.log()</Code>
      <Code variant="surface">console.log()</Code>
    </Stack>
  )
}
