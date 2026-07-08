import { Button, Stack } from '@chakra-ui/react'

export const ButtonWithLoading = () => {
  return (
    <Stack align="center" direction="row" gap="4">
      <Button loading>Click me</Button>
      <Button loading loadingText="Saving...">
        Click me
      </Button>
    </Stack>
  )
}
