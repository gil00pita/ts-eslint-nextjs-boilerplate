import { Badge, ColorSwatch } from '@chakra-ui/react'

export const ColorSwatchWithBadge = () => {
  return (
    <Badge>
      <ColorSwatch boxSize="0.82em" value="#bada55" />
      #bada55
    </Badge>
  )
}
