import { Button, Stack, Theme } from '@chakra-ui/react'

export const ThemeBasic = () => {
  return (
    <Stack align="flex-start">
      <Button colorPalette="teal" variant="surface">
        Auto Button
      </Button>
      <Theme appearance="dark" colorPalette="teal" p="4">
        <Button variant="surface">Dark Button</Button>
      </Theme>
      <Theme appearance="light" colorPalette="teal" p="4">
        <Button variant="surface">Light Button</Button>
      </Theme>
    </Stack>
  )
}
