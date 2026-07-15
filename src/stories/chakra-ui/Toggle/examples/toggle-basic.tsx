import { Button, Toggle } from '@chakra-ui/react'
import { LuBold } from 'react-icons/lu'

export const ToggleBasic = () => {
  return (
    <Toggle.Root asChild px="0">
      <Button variant={{ _pressed: 'solid', base: 'subtle' }}>
        <LuBold />
      </Button>
    </Toggle.Root>
  )
}
