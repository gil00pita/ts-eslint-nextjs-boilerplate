import { DecorativeBox } from '@/utils/storybook/decorative-box'
import { Grid } from '@chakra-ui/react'

export const GridBasic = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="6">
      <DecorativeBox h="20" />
      <DecorativeBox h="20" />
      <DecorativeBox h="20" />
    </Grid>
  )
}
