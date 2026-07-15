import { Box } from '@chakra-ui/react'

export const BoxWithBorder = () => {
  return (
    <Box borderColor="border.disabled" borderWidth="1px" color="fg.disabled" p="4">
      Somewhat disabled box
    </Box>
  )
}
