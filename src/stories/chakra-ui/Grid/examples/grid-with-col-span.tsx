import { Grid, GridItem } from '@chakra-ui/react'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

export const GridWithColSpan = () => {
  return (
    <Grid gap="6" templateColumns="repeat(4, 1fr)">
      <GridItem colSpan={2}>
        <DecorativeBox h="20" />
      </GridItem>
      <GridItem colSpan={1}>
        <DecorativeBox h="20" />
      </GridItem>
      <GridItem colSpan={1}>
        <DecorativeBox h="20" />
      </GridItem>
    </Grid>
  )
}
