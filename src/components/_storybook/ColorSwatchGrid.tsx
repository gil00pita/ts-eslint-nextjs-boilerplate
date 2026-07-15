import { Box, Grid, HStack, Stack, Text } from '@chakra-ui/react'

interface PaletteStep {
  hex: string
  step: string
}

interface Palette {
  name: string
  steps: PaletteStep[]
  usage: string
}

const palettes: Palette[] = [
  {
    name: 'Ember',
    steps: [
      { hex: '#FFE8DD', step: '100' },
      { hex: '#FFB088', step: '300' },
      { hex: '#F2622E', step: '500' },
      { hex: '#B23D14', step: '700' },
      { hex: '#6B1F09', step: '900' },
    ],
    usage: 'Primary actions, focus accents, brand moments',
  },
  {
    name: 'Ash',
    steps: [
      { hex: '#F1F2F3', step: '100' },
      { hex: '#C7CBCE', step: '300' },
      { hex: '#8B9096', step: '500' },
      { hex: '#53585E', step: '700' },
      { hex: '#22262A', step: '900' },
    ],
    usage: 'App backgrounds, text, borders, neutral surfaces',
  },
  {
    name: 'Sky',
    steps: [
      { hex: '#E1F0FF', step: '100' },
      { hex: '#8FC7FF', step: '300' },
      { hex: '#2E93E0', step: '500' },
      { hex: '#155F9E', step: '700' },
      { hex: '#0A3560', step: '900' },
    ],
    usage: 'Information and assistive guidance',
  },
  {
    name: 'Moss',
    steps: [
      { hex: '#E6F3E1', step: '100' },
      { hex: '#A9D89A', step: '300' },
      { hex: '#5FA84A', step: '500' },
      { hex: '#357A2A', step: '700' },
      { hex: '#173D12', step: '900' },
    ],
    usage: 'Success, completion, healthy states',
  },
  {
    name: 'Berry',
    steps: [
      { hex: '#FBE4EE', step: '100' },
      { hex: '#EF9AC0', step: '300' },
      { hex: '#D63384', step: '500' },
      { hex: '#9C1F5C', step: '700' },
      { hex: '#5A0F33', step: '900' },
    ],
    usage: 'Errors, destructive actions, urgent validation',
  },
]

export const ColorSwatchGrid = () => (
  <Stack gap={4} my={6}>
    {palettes.map((palette) => (
      <Box borderColor="border.muted" borderRadius="xl" borderWidth="1px" key={palette.name} p={4}>
        <HStack align="baseline" justify="space-between" mb={3} wrap="wrap">
          <Text fontWeight="semibold">{palette.name}</Text>
          <Text color="fg.muted" fontSize="sm">
            {palette.usage}
          </Text>
        </HStack>
        <Grid gap={2} templateColumns={`repeat(${palette.steps.length}, 1fr)`}>
          {palette.steps.map((swatch) => (
            <Stack gap={1} key={swatch.step}>
              <Box
                bg={swatch.hex}
                borderColor="border.muted"
                borderRadius="md"
                borderWidth="1px"
                height="12"
              />
              <Text color="fg.subtle" fontFamily="mono" fontSize="xs" textAlign="center">
                {swatch.step}
              </Text>
            </Stack>
          ))}
        </Grid>
      </Box>
    ))}
  </Stack>
)
