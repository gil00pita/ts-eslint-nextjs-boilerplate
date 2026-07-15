'use client'

import { Button, createListCollection, Field, Portal, Select, Stack } from '@chakra-ui/react'
import { standardSchemaResolver } from '@hookform/resolvers/standard-schema'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  framework: z.string({ message: 'Framework is required' }).array(),
})

type FormValues = z.infer<typeof formSchema>

export const SelectWithHookForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: standardSchemaResolver(formSchema),
  })

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <form onSubmit={onSubmit}>
      <Stack align="flex-start" gap="4">
        <Field.Root invalid={!!errors.framework} width="320px">
          <Field.Label>Framework</Field.Label>
          <Controller
            control={control}
            name="framework"
            render={({ field }) => (
              <Select.Root
                collection={frameworks}
                name={field.name}
                onInteractOutside={() => field.onBlur()}
                onValueChange={({ value }) => field.onChange(value)}
                value={field.value}
              >
                <Select.HiddenSelect />
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText placeholder="Select framework" />
                  </Select.Trigger>
                  <Select.IndicatorGroup>
                    <Select.Indicator />
                  </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                  <Select.Positioner>
                    <Select.Content>
                      {frameworks.items.map((framework) => (
                        <Select.Item item={framework} key={framework.value}>
                          {framework.label}
                          <Select.ItemIndicator />
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Positioner>
                </Portal>
              </Select.Root>
            )}
          />
          <Field.ErrorText>{errors.framework?.message}</Field.ErrorText>
        </Field.Root>

        <Button size="sm" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  )
}

const frameworks = createListCollection({
  items: [
    { label: 'React.js', value: 'react' },
    { label: 'Vue.js', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
  ],
})
