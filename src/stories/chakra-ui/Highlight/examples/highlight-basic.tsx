import { Highlight } from '@chakra-ui/react'

export const HighlightBasic = () => {
  return (
    <Highlight query="spotlight" styles={{ bg: 'orange.subtle', color: 'orange.fg', px: '0.5' }}>
      With the Highlight component, you can spotlight words.
    </Highlight>
  )
}
