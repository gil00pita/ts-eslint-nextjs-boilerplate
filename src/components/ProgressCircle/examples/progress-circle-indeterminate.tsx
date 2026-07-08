import { ProgressCircle } from '@chakra-ui/react'

export const ProgressCircleIndeterminate = () => {
  return (
    <ProgressCircle.Root size="sm" value={null}>
      <ProgressCircle.Circle>
        <ProgressCircle.Track />
        <ProgressCircle.Range />
      </ProgressCircle.Circle>
    </ProgressCircle.Root>
  )
}
