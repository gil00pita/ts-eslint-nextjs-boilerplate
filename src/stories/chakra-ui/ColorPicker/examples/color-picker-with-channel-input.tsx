'use client'

import {
  ColorPicker,
  For,
  getColorChannels,
  HStack,
  parseColor,
  Portal,
  VStack,
} from '@chakra-ui/react'

const ChannelInputs = (props: { format: ColorPicker.ColorFormat }) => {
  const channels = getColorChannels(props.format)
  return (
    <ColorPicker.View format={props.format}>
      <For each={channels}>
        {(channel) => (
          <VStack flex="1" gap="1" key={channel}>
            <ColorPicker.ChannelInput
              channel={channel}
              height="7"
              px="0"
              textAlign="center"
              textStyle="xs"
            />
            <ColorPicker.ChannelText>{channel.charAt(0).toUpperCase()}</ColorPicker.ChannelText>
          </VStack>
        )}
      </For>
    </ColorPicker.View>
  )
}

export const ColorPickerWithChannelInput = () => {
  return (
    <ColorPicker.Root defaultValue={parseColor('#eb5e41')} maxW="200px">
      <ColorPicker.HiddenInput />
      <ColorPicker.Label>Color</ColorPicker.Label>
      <ColorPicker.Control>
        <ColorPicker.Input />
        <ColorPicker.Trigger />
      </ColorPicker.Control>
      <Portal>
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            <ColorPicker.Area />
            <HStack>
              <ColorPicker.EyeDropper size="xs" variant="outline" />
              <ColorPicker.Sliders />
            </HStack>
            <ChannelInputs format="rgba" />
            <ChannelInputs format="hsla" />
            <ChannelInputs format="hsba" />
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </Portal>
    </ColorPicker.Root>
  )
}
