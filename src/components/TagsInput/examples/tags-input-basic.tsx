'use client'

import { Span, TagsInput } from '@chakra-ui/react'

export const TagsInputBasic = () => {
  return (
    <TagsInput.Root defaultValue={['React', 'Chakra', 'TypeScript']}>
      <TagsInput.Label>Tags</TagsInput.Label>
      <TagsInput.Control>
        <TagsInput.Items />
        <TagsInput.Input placeholder="Add tag..." />
      </TagsInput.Control>
      <Span color="fg.muted" ms="auto" textStyle="xs">
        Press Enter or Return to add tag
      </Span>
    </TagsInput.Root>
  )
}
