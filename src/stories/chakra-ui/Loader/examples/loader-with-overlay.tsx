'use client'

import { Box, Button, Field, Input, Loader, LoaderOverlay, Stack } from '@chakra-ui/react'
import { useState } from 'react'

export const LoaderWithOverlay = () => {
  const [loading, setLoading] = useState(false)
  return (
    <Stack gap="4" maxW="xl">
      <Box bg="bg.panel" p="6" position="relative" rounded="l3" shadow="sm">
        <Stack gap="4">
          <Field.Root>
            <Field.Label>First name</Field.Label>
            <Input />
          </Field.Root>
          <Field.Root>
            <Field.Label>Last name</Field.Label>
            <Input />
          </Field.Root>
          <Button>Click me</Button>
        </Stack>
        {loading && (
          <LoaderOverlay bg="bg/80" rounded="l3">
            <Loader fontWeight="medium" text="Loading..." textStyle="sm" />
          </LoaderOverlay>
        )}
      </Box>
      <Button alignSelf="flex-start" onClick={() => setLoading((c) => !c)} variant="outline">
        Toggle loading
      </Button>
    </Stack>
  )
}
