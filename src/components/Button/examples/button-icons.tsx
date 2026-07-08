import { IconButton, Stack } from '@chakra-ui/react'
import { RiPhoneLine, RiSearchLine } from 'react-icons/ri'

export const ButtonIcons = () => (
  <Stack direction="row">
    <IconButton aria-label="Search database">
      <RiSearchLine />
    </IconButton>

    <IconButton aria-label="Search database" colorPalette="blue">
      <RiSearchLine />
    </IconButton>

    <IconButton aria-label="Call Segun" colorPalette="teal" size="lg">
      <RiPhoneLine />
    </IconButton>
  </Stack>
)
