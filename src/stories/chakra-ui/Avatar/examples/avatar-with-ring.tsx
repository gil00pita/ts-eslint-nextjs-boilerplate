import { Avatar, defineStyle, HStack } from '@chakra-ui/react'

const ringCss = defineStyle({
  outlineColor: 'colorPalette.500',
  outlineOffset: '2px',
  outlineStyle: 'solid',
  outlineWidth: '2px',
})

export const AvatarWithRing = () => {
  return (
    <HStack gap="4">
      <Avatar.Root colorPalette="pink" css={ringCss}>
        <Avatar.Fallback name="Random" />
        <Avatar.Image src="https://randomuser.me/api/portraits/men/70.jpg" />
      </Avatar.Root>
      <Avatar.Root colorPalette="green" css={ringCss}>
        <Avatar.Fallback name="Random" />
        <Avatar.Image src="https://randomuser.me/api/portraits/men/54.jpg" />
      </Avatar.Root>
      <Avatar.Root colorPalette="blue" css={ringCss}>
        <Avatar.Fallback name="Random" />
        <Avatar.Image src="https://randomuser.me/api/portraits/men/42.jpg" />
      </Avatar.Root>
    </HStack>
  )
}
