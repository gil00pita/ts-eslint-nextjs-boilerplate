'use client'

import { Button, Checkbox, CheckboxGroup, Code, Fieldset } from '@chakra-ui/react'
import { standardSchemaResolver } from '@hookform/resolvers/standard-schema'
import { useController, useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  framework: z.array(z.string()).min(1, {
    message: 'You must select at least one framework.',
  }),
})

type FormData = z.infer<typeof formSchema>

const items = [
  { label: 'React', value: 'react' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
]

export const CheckboxWithGroupHookForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    resolver: standardSchemaResolver(formSchema),
  })

  const framework = useController({
    control,
    defaultValue: [],
    name: 'framework',
  })

  const invalid = !!errors.framework

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Fieldset.Root invalid={invalid}>
        <Fieldset.Legend>Select your framework</Fieldset.Legend>
        <CheckboxGroup
          invalid={invalid}
          name={framework.field.name}
          onValueChange={framework.field.onChange}
          value={framework.field.value}
        >
          <Fieldset.Content>
            {items.map((item) => (
              <Checkbox.Root key={item.value} value={item.value}>
                <Checkbox.HiddenInput />
                <Checkbox.Control />
                <Checkbox.Label>{item.label}</Checkbox.Label>
              </Checkbox.Root>
            ))}
          </Fieldset.Content>
        </CheckboxGroup>

        {errors.framework && <Fieldset.ErrorText>{errors.framework.message}</Fieldset.ErrorText>}

        <Button alignSelf="flex-start" size="sm" type="submit">
          Submit
        </Button>

        <Code>Values: {JSON.stringify(framework.field.value, null, 2)}</Code>
      </Fieldset.Root>
    </form>
  )
}
