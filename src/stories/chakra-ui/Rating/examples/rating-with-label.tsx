import { RatingGroup } from '@chakra-ui/react'

export const RatingWithLabel = () => {
  return (
    <RatingGroup.Root count={5} defaultValue={3} gap="4" size="sm">
      <RatingGroup.HiddenInput />
      <RatingGroup.Label>Rating</RatingGroup.Label>
      <RatingGroup.Control />
    </RatingGroup.Root>
  )
}
