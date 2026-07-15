'use client'

import { Button, Field, FileUpload } from '@chakra-ui/react'
import { standardSchemaResolver } from '@hookform/resolvers/standard-schema'
import { Controller, useForm } from 'react-hook-form'
import { HiUpload } from 'react-icons/hi'
import { z } from 'zod'

const formSchema = z.object({
  images: z.array(z.instanceof(File)).min(1, 'At least one image is required'),
})

type FormValues = z.infer<typeof formSchema>

export const FileUploadWithHookForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      images: [],
    },
    resolver: standardSchemaResolver(formSchema),
  })

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <form onSubmit={onSubmit}>
      <Controller
        control={control}
        name="images"
        render={({ field }) => (
          <Field.Root invalid={!!errors.images}>
            <Field.Label>Images</Field.Label>
            <FileUpload.Root
              name={field.name}
              onFileChange={(e) => {
                field.onChange(e.acceptedFiles)
              }}
            >
              <FileUpload.HiddenInput />
              <FileUpload.Trigger asChild onBlur={() => field.onBlur()}>
                <Button size="sm" variant="outline">
                  <HiUpload /> Upload file
                </Button>
              </FileUpload.Trigger>

              <FileUpload.List />
            </FileUpload.Root>
            <Field.ErrorText>{errors.images?.message}</Field.ErrorText>
          </Field.Root>
        )}
      />

      <Button mt="4" size="sm" type="submit">
        Submit
      </Button>
    </form>
  )
}
