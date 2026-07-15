import { Progress, Stack } from '@chakra-ui/react'

export const ProgressExplorerDemo = () => {
  return (
    <Stack align="start" gap="8">
      <Progress.Root max={100} value={60} width="240px">
        <Progress.Label>Loading…</Progress.Label>
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
        <Progress.ValueText />
      </Progress.Root>
    </Stack>
  )
}
