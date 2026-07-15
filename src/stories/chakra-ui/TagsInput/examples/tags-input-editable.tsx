'use client'

import { Span, TagsInput } from '@chakra-ui/react'

export const TagsInputEditable = () => (
  <TagsInput.Root defaultValue={['React', 'Chakra']} editable>
    <TagsInput.Label>Edit Tags Inline</TagsInput.Label>
    <TagsInput.Control>
      <TagsInput.Items />

      <TagsInput.Input placeholder="Add or edit tags..." />
      <TagsInput.ClearTrigger />
    </TagsInput.Control>

    <TagsInput.HiddenInput />

    <Span color="fg.muted" ms="auto" textStyle="xs">
      Use the arrow keys to navigate and press Enter to edit
    </Span>
  </TagsInput.Root>
)
