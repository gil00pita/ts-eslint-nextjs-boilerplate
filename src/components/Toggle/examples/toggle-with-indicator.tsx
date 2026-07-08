import { Button, Toggle } from '@chakra-ui/react'
import { LuVolume2, LuVolumeX } from 'react-icons/lu'

export const ToggleWithIndicator = () => {
  return (
    <Toggle.Root asChild>
      <Button variant={{ _pressed: 'solid', base: 'outline' }}>
        <Toggle.Indicator fallback={<LuVolume2 />}>
          <LuVolumeX />
        </Toggle.Indicator>
        <Toggle.Indicator fallback="Mute">Unmute</Toggle.Indicator>
      </Button>
    </Toggle.Root>
  )
}
