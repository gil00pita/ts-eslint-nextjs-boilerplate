import { Badge, Group } from '@chakra-ui/react'

export const BadgeWithGroup = () => {
  return (
    <Group attached>
      <Badge colorPalette="blue" variant="solid">
        Commit status
      </Badge>
      <Badge colorPalette="green" variant="solid">
        90+
      </Badge>
    </Group>
  )
}
