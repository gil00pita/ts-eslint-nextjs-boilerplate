import { Badge, Stack } from '@chakra-ui/react'
import { HiAtSymbol, HiStar } from 'react-icons/hi'

export const BadgeWithIcon = () => {
  return (
    <Stack align="flex-start">
      <Badge colorPalette="blue" variant="solid">
        <HiStar />
        New
      </Badge>
      <Badge colorPalette="green" variant="solid">
        New
        <HiAtSymbol />
      </Badge>
    </Stack>
  )
}
