import { RatingGroup } from '@chakra-ui/react'

export const RatingWithReadonly = () => {
  return (
    <RatingGroup.Root count={5} defaultValue={3} readOnly size="sm">
      <RatingGroup.HiddenInput />
      <RatingGroup.Control />
    </RatingGroup.Root>
  )
}
