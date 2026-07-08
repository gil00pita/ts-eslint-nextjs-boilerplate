'use client'

import { Badge, Button, HStack, Span, TagsInput } from '@chakra-ui/react'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const isValidEmail = (value: string) => EMAIL_REGEX.test(value)

export const TagsInputWithMax = () => {
  return (
    <TagsInput.Root
      defaultValue={['sage@company.com']}
      max={3}
      validate={(e) => isValidEmail(e.inputValue)}
    >
      <TagsInput.Label>Invite guests (max 3)</TagsInput.Label>

      <TagsInput.Control>
        <TagsInput.Items />

        <TagsInput.Input placeholder="Add guests" />
      </TagsInput.Control>

      <TagsInput.Context>
        {({ value }) => (
          <HStack hidden={value.length === 0} justify="space-between" mt="2.5">
            <Span>
              You've invited <Badge>{value.length} / 3 guests</Badge> to your event
            </Span>
            <Button size="sm">Invite</Button>
          </HStack>
        )}
      </TagsInput.Context>
    </TagsInput.Root>
  )
}
