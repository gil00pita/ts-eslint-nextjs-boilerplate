'use client'

import { Box, Clipboard, IconButton, Stack, TagsInput } from '@chakra-ui/react'

export const TagsInputWithPaste = () => (
  <Stack gap="8">
    <SampleClipboard value="React,Chakra,TypeScript" />
    <TagsInput.Root addOnPaste delimiter=",">
      <TagsInput.Label>Paste Tags</TagsInput.Label>
      <TagsInput.Control>
        <TagsInput.Items />
        <TagsInput.Input placeholder="Paste" />
        <TagsInput.ClearTrigger />
      </TagsInput.Control>

      <TagsInput.HiddenInput />
    </TagsInput.Root>
  </Stack>
)

const SampleClipboard = (props: { value: string }) => (
  <Clipboard.Root value={props.value}>
    <Box mb="2" textStyle="label">
      Copy Tags
    </Box>
    <Clipboard.ValueText fontFamily="mono" me="3" textStyle="sm" />
    <Clipboard.Trigger asChild>
      <IconButton size="2xs" variant="surface">
        <Clipboard.Indicator />
      </IconButton>
    </Clipboard.Trigger>
  </Clipboard.Root>
)
