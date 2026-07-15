import { Box, Checkbox, Stack } from '@chakra-ui/react'

export const CheckboxWithDescription = () => {
  return (
    <Checkbox.Root alignItems="flex-start" gap="4">
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Stack gap="1">
        <Checkbox.Label>I agree to the terms and conditions</Checkbox.Label>
        <Box color="fg.muted" textStyle="sm">
          By clicking this, you agree to our Terms and Privacy Policy.
        </Box>
      </Stack>
    </Checkbox.Root>
  )
}
