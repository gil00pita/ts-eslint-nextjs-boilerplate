'use client'

import {
  Button,
  Combobox,
  Field,
  Portal,
  Stack,
  useFilter,
  useListCollection,
} from '@chakra-ui/react'
import { standardSchemaResolver } from '@hookform/resolvers/standard-schema'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  framework: z.string({ message: 'Framework is required' }).min(1),
})

type FormValues = z.infer<typeof formSchema>

export const ComboboxWithHookForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: standardSchemaResolver(formSchema),
  })

  const onSubmit = handleSubmit((data) => {
    console.log('Form submitted with:', data)
    alert(`Selected framework: ${data.framework}`)
  })

  const { contains } = useFilter({ sensitivity: 'base' })

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: frameworks,
  })

  const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
    filter(details.inputValue)
  }

  return (
    <form onSubmit={onSubmit}>
      <Stack align="flex-start" gap="4">
        <Field.Root invalid={!!errors.framework} width="320px">
          <Field.Label>Framework</Field.Label>
          <Controller
            control={control}
            name="framework"
            render={({ field }) => (
              <Combobox.Root
                collection={collection}
                onInputValueChange={handleInputChange}
                onInteractOutside={() => field.onBlur()}
                onValueChange={({ value }) => field.onChange(value[0] || '')}
                value={field.value ? [field.value] : []}
              >
                <Combobox.Control>
                  <Combobox.Input placeholder="Select framework" />
                  <Combobox.IndicatorGroup>
                    <Combobox.ClearTrigger />
                    <Combobox.Trigger />
                  </Combobox.IndicatorGroup>
                </Combobox.Control>

                <Portal>
                  <Combobox.Positioner>
                    <Combobox.Content>
                      <Combobox.Empty>No frameworks found</Combobox.Empty>
                      {collection.items.map((item) => (
                        <Combobox.Item item={item} key={item.value}>
                          {item.label}
                          <Combobox.ItemIndicator />
                        </Combobox.Item>
                      ))}
                    </Combobox.Content>
                  </Combobox.Positioner>
                </Portal>
              </Combobox.Root>
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

const frameworks = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Solid', value: 'solid' },
  { label: 'Qwik', value: 'qwik' },
  { label: 'Lit', value: 'lit' },
  { label: 'Alpine', value: 'alpine' },
]
