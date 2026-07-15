'use client'

import { Button, Field, Input, Stack, TagsInput } from '@chakra-ui/react'

export const TagsInputWithForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const title = formData.get('title')
        const categories = formData.get('categories')
        console.log('Submitted formData:', { categories, title })
      }}
    >
      <Stack gap="4">
        <Field.Root>
          <Field.Label>Title</Field.Label>
          <Input name="title" />
        </Field.Root>

        <Field.Root>
          <TagsInput.Root name="categories">
            <TagsInput.Label>Categories</TagsInput.Label>
            <TagsInput.Control>
              <TagsInput.Items />
              <TagsInput.Input placeholder="Add tag..." />
            </TagsInput.Control>

            <TagsInput.HiddenInput />
          </TagsInput.Root>
          <Field.HelperText>Add frameworks and libraries you use</Field.HelperText>
        </Field.Root>

        <Button mt="3" type="submit" variant="solid">
          Submit
        </Button>
      </Stack>
    </form>
  )
}
