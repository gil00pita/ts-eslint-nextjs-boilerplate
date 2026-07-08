import type { Meta } from '@storybook/react-vite'

import { keyframes } from '@emotion/react'
import { useState } from 'react'

import { Badge, Box, Button, Center, For, Link, Stack, Text } from '@/ui'

export default {
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
  title: 'Utilities / Sandbox',
} satisfies Meta

const TimeStamp = () => {
  const [data] = useState(() => new Date().toISOString())
  return <Text>{data}</Text>
}

export const ReRenders = () => {
  const [isRed, setIsRed] = useState(false)

  return (
    <Stack gap={5}>
      <Box backgroundColor={isRed ? 'red.200' : 'blue.200'}>
        <TimeStamp />
      </Box>

      <Box as="mark" bg="bg.error" color="red.500" px="2" py="3">
        Welcome
      </Box>

      <Box asChild bg={isRed ? 'red.200' : 'blue.200'}>
        <button>
          <TimeStamp />
        </button>
      </Box>

      <Box>
        <Button onClick={() => setIsRed(!isRed)}>Re-Render</Button>
      </Box>
    </Stack>
  )
}

export const ColorPalette = () => {
  return (
    <Stack>
      <For each={['blue', 'green', 'red']}>
        {(color) => (
          <Box colorPalette={color}>
            <Box bg="colorPalette.muted" color="colorPalette.fg" p="4">
              Welcome to the{' '}
              <Link href="https://www.google.com" variant="underline">
                jungle <Badge variant="solid"> New</Badge>
              </Link>
              <br />
              <Button>Click me</Button>
            </Box>
          </Box>
        )}
      </For>
    </Stack>
  )
}

export const SelfClosing = () => {
  return (
    <Box asChild overflow="hidden" rounded="full">
      <img alt="placeholder" src="https://i.pravatar.cc/150?u=1" />
    </Box>
  )
}

export const Layers = () => {
  return <Button bg="red">Click me</Button>
}

export const SortOrder = () => {
  return (
    <Center
      borderLeft={[undefined, '5px solid red']}
      display={['none', 'none', 'flex']}
      flex={[undefined, undefined, 1, 5]}
      h="90vh"
      layerStyle="fill.subtle"
      minH="200px"
      position="sticky"
      top="0"
    >
      <Text>Hello</Text>
    </Center>
  )
}

const opacityKeyframes = keyframes`
  0% { opacity: 0.1; }
  100% { opacity: 1; }
`

export const CustomAnimation = () => {
  return (
    <Box h="400px" position="relative" w="400px">
      <Box
        animation={`4s ease-in-out infinite alternate ${opacityKeyframes}`}
        backgroundImage="radial-gradient(black 0%, transparent 20%)"
        backgroundSize="20px 20px"
        bottom="0"
        left="0"
        position="absolute"
        right="0"
        top="0"
      />
    </Box>
  )
}
