import { Badge, Button, Group, Stack } from '@chakra-ui/react'

export const GroupWithAttached = () => {
  return (
    <Stack gap="4">
      <Group attached>
        <Button variant="outline">Item 1</Button>
        <Button variant="outline">Item 2</Button>
      </Group>

      <Group attached>
        <Badge colorPalette="purple" variant="solid">
          Commit status
        </Badge>
        <Badge colorPalette="green" variant="solid">
          90+
        </Badge>
      </Group>
    </Stack>
  )
}
