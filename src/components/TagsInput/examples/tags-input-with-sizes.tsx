'use client'

import { For, Span, Stack, TagsInput } from '@chakra-ui/react'

export const TagsInputWithSizes = () => {
  return (
    <Stack>
      <For each={['xs', 'sm', 'md', 'lg']}>
        {(size) => (
          <TagsInput.Root
            defaultValue={['React', 'Chakra', 'TypeScript']}
            key={size}
            readOnly
            size={size}
          >
            <TagsInput.Label>Tags (size={size})</TagsInput.Label>
            <TagsInput.Control>
              <TagsInput.Items />
              <TagsInput.Input placeholder="Add tag..." />
            </TagsInput.Control>
            <Span color="fg.muted" ms="auto" textStyle="xs">
              Press Enter or Return to add tag
            </Span>
          </TagsInput.Root>
        )}
      </For>
    </Stack>
  )
}
