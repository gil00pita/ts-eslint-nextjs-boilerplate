'use client'

import { For, Span, Stack, TagsInput } from '@chakra-ui/react'

export const TagsInputWithVariants = () => {
  return (
    <Stack>
      <For each={['outline', 'subtle', 'flushed']}>
        {(variant) => (
          <TagsInput.Root
            defaultValue={['React', 'Chakra', 'TypeScript']}
            key={variant}
            readOnly
            variant={variant}
          >
            <TagsInput.Label>Tags (variant={variant})</TagsInput.Label>
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
