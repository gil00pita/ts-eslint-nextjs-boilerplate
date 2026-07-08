import type { ReactNode } from 'react'

import { Badge, Box, Heading, Text } from '@chakra-ui/react'

interface DocsHeroProps {
  colorPalette?: string
  eyebrow: string
  lead: ReactNode
  title: string
}

export const DocsHero = ({ colorPalette = 'brand', eyebrow, lead, title }: DocsHeroProps) => (
  <Box
    bgGradient="to-br"
    borderColor="border.muted"
    borderRadius="2xl"
    borderWidth="1px"
    colorPalette={colorPalette}
    gradientFrom="colorPalette.subtle"
    gradientTo="bg.panel"
    mb={10}
    px={{ base: 6, md: 10 }}
    py={{ base: 8, md: 10 }}
  >
    <Badge
      colorPalette={colorPalette}
      letterSpacing="wide"
      mb={4}
      size="lg"
      textTransform="uppercase"
      variant="subtle"
    >
      {eyebrow}
    </Badge>
    <Heading as="h1" letterSpacing="tight" mb={4} size="4xl">
      {title}
    </Heading>
    <Text color="fg.muted" fontSize="lg" maxW="65ch">
      {lead}
    </Text>
  </Box>
)
