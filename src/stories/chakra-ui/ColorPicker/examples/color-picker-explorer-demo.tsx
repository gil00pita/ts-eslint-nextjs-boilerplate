'use client'

import {
  ColorPicker,
  ColorPickerEyeDropper,
  For,
  getColorChannels,
  HStack,
  IconButton,
  parseColor,
  Square,
  VStack,
} from '@chakra-ui/react'
import { LuCheck, LuPlus } from 'react-icons/lu'

const swatches = [
  '#000000',
  '#4A5568',
  '#F56565',
  '#ED64A6',
  '#9F7AEA',
  '#6B46C1',
  '#4299E1',
  '#0BC5EA',
  '#00B5D8',
  '#38B2AC',
  '#48BB78',
  '#68D391',
  '#ECC94B',
  '#DD6B20',
]

const ChannelInputs = (props: { format: ColorPicker.ColorFormat }) => {
  const channels = getColorChannels(props.format)

  return (
    <ColorPicker.View format={props.format}>
      <HStack gap="2" w="full" wrap="wrap">
        <For each={channels}>
          {(channel) => (
            <VStack align="stretch" flex="0 0 auto" gap="1" key={channel} minW="60px">
              <ColorPicker.ChannelInput
                channel={channel}
                height="7"
                px="0"
                textAlign="center"
                textStyle="xs"
              />
              <ColorPicker.ChannelText textAlign="center">
                {channel.charAt(0).toUpperCase() + channel.slice(1)}
              </ColorPicker.ChannelText>
            </VStack>
          )}
        </For>
      </HStack>
    </ColorPicker.View>
  )
}

export const ColorPickerExplorerDemo = () => {
  return (
    <ColorPicker.Root
      alignItems="flex-start"
      defaultValue={parseColor('#eb5e41')}
      maxW="400px"
      open
    >
      <ColorPicker.HiddenInput />

      <ColorPicker.Label>
        Pick a color: <ColorPicker.ValueText />
      </ColorPicker.Label>

      <ColorPicker.Control>
        <ColorPicker.Input />
        <ColorPicker.Trigger>
          <ColorPicker.ValueSwatch boxSize="6" />
        </ColorPicker.Trigger>
      </ColorPicker.Control>

      <ColorPicker.Positioner>
        <ColorPicker.Content
          animation="none"
          bg="bg.subtle"
          borderRadius="md"
          maxW="400px"
          padding="4"
          shadow="md"
          w="full"
        >
          <VStack align="stretch" gap="4" w="full">
            <VStack align="stretch" gap="2">
              <ColorPicker.Area maxH="150px">
                <ColorPicker.AreaBackground />
                <ColorPicker.AreaThumb />
              </ColorPicker.Area>
            </VStack>
            <ColorPicker.Sliders maxH="120px" />
            <HStack gap="3" wrap="wrap">
              <ColorPickerEyeDropper size="xs" />

              <ColorPicker.FormatTrigger asChild>
                <IconButton aria-label="Format" size="xs" variant="outline">
                  F
                </IconButton>
              </ColorPicker.FormatTrigger>

              <ColorPicker.FormatSelect />
            </HStack>

            <HStack flexWrap="wrap" gap="2" w="full">
              <ChannelInputs format="rgba" />
              <ChannelInputs format="hsla" />
              <ChannelInputs format="hsba" />
            </HStack>
            <ColorPicker.SwatchGroup>
              <HStack gap="2" wrap="wrap">
                {swatches.map((color) => (
                  <ColorPicker.SwatchTrigger key={color} value={color}>
                    <ColorPicker.Swatch value={color}>
                      <ColorPicker.SwatchIndicator>
                        <LuCheck />
                      </ColorPicker.SwatchIndicator>
                    </ColorPicker.Swatch>
                  </ColorPicker.SwatchTrigger>
                ))}

                <ColorPicker.Trigger>
                  <Square
                    bgSize="cover"
                    border="4px solid"
                    borderImage="conic-gradient(from 90deg, red, yellow, lime, aqua, blue, magenta, red) 1"
                    overflow="hidden"
                    size="7"
                  >
                    <LuPlus />
                  </Square>
                </ColorPicker.Trigger>
              </HStack>
            </ColorPicker.SwatchGroup>
          </VStack>
        </ColorPicker.Content>
      </ColorPicker.Positioner>
    </ColorPicker.Root>
  )
}
