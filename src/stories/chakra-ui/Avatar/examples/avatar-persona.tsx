import { Avatar, HStack, Stack, Text } from '@chakra-ui/react'

export const AvatarPersona = () => {
  return (
    <Stack gap="8">
      {users.map((user) => (
        <HStack gap="4" key={user.email}>
          <Avatar.Root>
            <Avatar.Fallback name={user.name} />
            <Avatar.Image src={user.avatar} />
          </Avatar.Root>
          <Stack gap="0">
            <Text fontWeight="medium">{user.name}</Text>
            <Text color="fg.muted" textStyle="sm">
              {user.email}
            </Text>
          </Stack>
        </HStack>
      ))}
    </Stack>
  )
}

const users = [
  {
    avatar: 'https://i.pravatar.cc/300?u=iu',
    email: 'john.mason@example.com',
    id: '1',
    name: 'John Mason',
  },
  {
    avatar: 'https://i.pravatar.cc/300?u=po',
    email: 'melissa.jones@example.com',
    id: '2',
    name: 'Melissa Jones',
  },
]
