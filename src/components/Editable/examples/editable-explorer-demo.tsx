'use client'

import { Editable, HStack, IconButton, Text, VStack } from '@chakra-ui/react'
import { LuCheck, LuPencilLine, LuX } from 'react-icons/lu'

export const EditableExplorerDemo = () => {
  return (
    <VStack align="stretch" gap="6" maxW="600px" mx="auto" p="6">
      <Editable.Root defaultEdit defaultValue="Click to edit">
        <VStack align="stretch" gap="3">
          <Editable.Label>
            <Text color="fg.muted" fontSize="sm">
              Editable Label
            </Text>
          </Editable.Label>

          <Editable.Area>
            <Editable.Preview minH="40px" p="2" />
            <Editable.Input mt="1" p="2" />
          </Editable.Area>

          <Editable.Textarea
            border={'1px solid'}
            borderColor="fg.muted"
            data-part="textarea"
            minH="80px"
            p="2"
            placeholder="Editable textarea"
          />

          <Editable.Control>
            <HStack gap="2" justify="flex-end">
              <Editable.EditTrigger asChild>
                <IconButton aria-label="Edit" size="sm">
                  <LuPencilLine />
                </IconButton>
              </Editable.EditTrigger>
              <Editable.CancelTrigger asChild>
                <IconButton aria-label="Cancel" size="sm">
                  <LuX />
                </IconButton>
              </Editable.CancelTrigger>
              <Editable.SubmitTrigger asChild>
                <IconButton aria-label="Submit" size="sm">
                  <LuCheck />
                </IconButton>
              </Editable.SubmitTrigger>
            </HStack>
          </Editable.Control>
        </VStack>
      </Editable.Root>
    </VStack>
  )
}
