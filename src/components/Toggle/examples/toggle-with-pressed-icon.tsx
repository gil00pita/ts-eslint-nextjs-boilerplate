import { Button, Toggle } from '@chakra-ui/react'
import { LuX } from 'react-icons/lu'

export const ToggleWithPressedIcon = () => {
  return (
    <Toggle.Root asChild defaultPressed>
      <Button
        colorPalette={{ _pressed: 'red', base: 'gray' }}
        variant={{ _pressed: 'solid', base: 'outline' }}
      >
        <Toggle.Indicator>
          <LuX />
        </Toggle.Indicator>
        Declined
      </Button>
    </Toggle.Root>
  )
}
