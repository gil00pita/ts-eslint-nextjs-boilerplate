import { Heading, Highlight } from '@chakra-ui/react'

export const HighlightMultiple = () => {
  return (
    <Heading lineHeight="tall">
      <Highlight
        query={['spotlight', 'emphasize', 'accentuate']}
        styles={{ bg: 'teal.muted', px: '0.5' }}
      >
        With the Highlight component, you can spotlight, emphasize and accentuate words.
      </Highlight>
    </Heading>
  )
}
