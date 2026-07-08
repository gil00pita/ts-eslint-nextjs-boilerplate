import { Grid, GridItem } from '@chakra-ui/react'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

export const GridSpanningColumns = () => {
  return (
    <Grid gap={4} h="200px" templateColumns="repeat(5, 1fr)" templateRows="repeat(2, 1fr)">
      <GridItem colSpan={1} rowSpan={2}>
        <DecorativeBox>rowSpan=2</DecorativeBox>
      </GridItem>
      <GridItem colSpan={2}>
        <DecorativeBox>colSpan=2</DecorativeBox>
      </GridItem>
      <GridItem colSpan={2}>
        <DecorativeBox>colSpan=2</DecorativeBox>
      </GridItem>
      <GridItem colSpan={4}>
        <DecorativeBox>colSpan=4</DecorativeBox>
      </GridItem>
    </Grid>
  )
}
