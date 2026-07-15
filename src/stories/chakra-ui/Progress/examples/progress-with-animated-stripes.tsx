import { Progress } from '@chakra-ui/react'

export const ProgressWithAnimatedStripes = () => {
  return (
    <Progress.Root animated maxW="240px" striped>
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  )
}
