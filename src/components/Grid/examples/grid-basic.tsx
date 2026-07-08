import { Grid } from '@chakra-ui/react'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

export const GridBasic = () => {
  return (
    <Grid gap="6" templateColumns="repeat(3, 1fr)">
      <DecorativeBox h="20" />
      <DecorativeBox h="20" />
      <DecorativeBox h="20" />
    </Grid>
  )
}
