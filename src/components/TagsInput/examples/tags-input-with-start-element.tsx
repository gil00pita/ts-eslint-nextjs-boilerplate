'use client'

import { InputGroup, Span, TagsInput } from '@chakra-ui/react'
import { LuTags } from 'react-icons/lu'

export const TagsInputWithStartElement = () => {
  return (
    <TagsInput.Root defaultValue={['React', 'Chakra', 'TypeScript']}>
      <TagsInput.Label>Tags</TagsInput.Label>
      <InputGroup gap="0" startElement={<LuTags />}>
        <TagsInput.Control pe="8" w="full">
          <TagsInput.Items />
          <TagsInput.Input placeholder="Add tag..." />
        </TagsInput.Control>
      </InputGroup>
      <Span color="fg.muted" ms="auto" textStyle="xs">
        Press Enter or Return to add tag
      </Span>
    </TagsInput.Root>
  )
}
