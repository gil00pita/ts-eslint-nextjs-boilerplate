import { Avatar, Badge, Box, Float } from '@chakra-ui/react'

export const FloatWithAvatar = () => {
  return (
    <Box display="inline-block" pos="relative">
      <Avatar.Root shape="rounded" size="lg">
        <Avatar.Image src="https://i.pravatar.cc/150?img=5" />
        <Avatar.Fallback />
      </Avatar.Root>
      <Float placement="bottom-end">
        <Badge colorPalette="teal" size="sm" variant="solid">
          New
        </Badge>
      </Float>
    </Box>
  )
}
