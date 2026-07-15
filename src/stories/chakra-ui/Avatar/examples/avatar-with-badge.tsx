import { Avatar, Circle, Float } from '@chakra-ui/react'

export const AvatarWithBadge = () => {
  return (
    <Avatar.Root colorPalette="green" variant="subtle">
      <Avatar.Fallback name="Dari Ann" />
      <Float offsetX="1" offsetY="1" placement="bottom-end">
        <Circle bg="green.500" outline="0.2em solid" outlineColor="bg" size="8px" />
      </Float>
    </Avatar.Root>
  )
}
