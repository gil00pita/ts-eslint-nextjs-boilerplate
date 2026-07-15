import { CloseButton } from '@chakra-ui/react'
import { HiX } from 'react-icons/hi'

export const CloseButtonWithCustomIcon = () => {
  return (
    <CloseButton aria-label="Close" variant="ghost">
      <HiX />
    </CloseButton>
  )
}
