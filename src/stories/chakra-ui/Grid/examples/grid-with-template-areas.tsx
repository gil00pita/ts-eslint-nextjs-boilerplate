import { Grid, GridItem } from '@chakra-ui/react'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

export const GridWithTemplateAreas = () => {
  return (
    <Grid
      gap="4"
      templateAreas={`
      "one one two three"
      "four five five three"
    `}
    >
      <GridItem area="one" bg="green.500">
        <DecorativeBox minH="20">one</DecorativeBox>
      </GridItem>
      <GridItem area="two" bg="pink.500">
        <DecorativeBox minH="20">two</DecorativeBox>
      </GridItem>
      <GridItem area="three" bg="red.500">
        <DecorativeBox minH="20">three</DecorativeBox>
      </GridItem>
      <GridItem area="four" bg="teal.500">
        <DecorativeBox minH="20">four</DecorativeBox>
      </GridItem>
      <GridItem area="five" bg="yellow.500">
        <DecorativeBox minH="20">five</DecorativeBox>
      </GridItem>
    </Grid>
  )
}
