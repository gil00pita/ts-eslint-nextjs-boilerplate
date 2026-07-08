import { Skeleton } from '@chakra-ui/react'

export const SkeletonWithStartEndColor = () => {
  return (
    <Skeleton
      css={{
        '--end-color': 'colors.orange.500',
        '--start-color': 'colors.pink.500',
      }}
      height="5"
      variant="shine"
      width="full"
    />
  )
}
