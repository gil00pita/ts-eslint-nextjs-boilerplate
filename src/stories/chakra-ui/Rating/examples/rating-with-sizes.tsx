import { For, RatingGroup, Stack } from '@chakra-ui/react'

export const RatingWithSizes = () => {
  return (
    <Stack>
      <For each={['xs', 'sm', 'md', 'lg']}>
        {(size) => (
          <RatingGroup.Root count={5} defaultValue={3} key={size} size={size}>
            <RatingGroup.HiddenInput />
            <RatingGroup.Control />
          </RatingGroup.Root>
        )}
      </For>
    </Stack>
  )
}
