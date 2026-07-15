'use client'

import { Button, FileUpload, Float, HStack, Text, VStack } from '@chakra-ui/react'
import { LuUpload, LuX } from 'react-icons/lu'

const createFile = (name: string, color: string) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
    <rect width="100" height="100" fill="${color}" />
    <text x="50%" y="50%" font-size="12" fill="white" text-anchor="middle" alignment-baseline="middle">
      ${name.split('.')[0].slice(0, 6)}
    </text>
  </svg>`
  const blob = new Blob([svg], { type: 'image/svg+xml' })
  return new File([blob], name, { type: 'image/svg+xml' })
}

export const FileUploadExplorerDemo = () => {
  return (
    <VStack align="stretch" gap="8" maxW="600px" mx="auto" p="8">
      <VStack align="start" gap="1">
        <Text fontSize="xl" fontWeight="bold">
          Let’s Add Some Naruto Images
        </Text>
        <Text color="gray.600" fontSize="sm">
          You can upload up to 3 images by dragging them here or browsing.
        </Text>
      </VStack>

      <FileUpload.Root
        accept="image/*"
        defaultAcceptedFiles={[createFile('uzumaki_naruto.svg', '#f97316')]}
        maxFiles={3}
      >
        <FileUpload.Label fontWeight="semibold" mb="2">
          Upload Your Favorite Naruto Characters
        </FileUpload.Label>

        <FileUpload.HiddenInput />

        <FileUpload.Dropzone w="full">
          <FileUpload.DropzoneContent w="full">
            <VStack
              borderRadius="md"
              borderStyle="dashed"
              borderWidth="2px"
              gap="4"
              p="8"
              transition="all 0.2s"
              w="full"
            >
              <LuUpload size={36} />
              <Text color="gray.600" fontSize="sm" textAlign="center">
                Drag & drop files here
              </Text>
              <Text color="gray.500" fontSize="sm" textAlign="center">
                or click below to browse files
              </Text>

              <FileUpload.Trigger asChild>
                <Button colorScheme="blue" size="sm">
                  Browse Files
                </Button>
              </FileUpload.Trigger>
              <FileUpload.FileText color="gray.500" fontSize="xs" />
            </VStack>
          </FileUpload.DropzoneContent>
        </FileUpload.Dropzone>

        <FileUpload.Context>
          {({ acceptedFiles }) => (
            <VStack align="stretch" gap="3" hidden={acceptedFiles.length === 0} mt="6" w="full">
              <Text fontSize="md" fontWeight="semibold">
                Uploaded Files
              </Text>
              <FileUpload.ItemGroup gap="3">
                {acceptedFiles.map((file, i) => (
                  <FileUpload.Item file={file} key={i} w="full">
                    <HStack borderRadius="md" borderWidth="1px" gap="3" p="3" w="full">
                      <FileUpload.ItemPreview>
                        <FileUpload.ItemPreviewImage borderRadius="md" boxSize="16" />
                      </FileUpload.ItemPreview>

                      <FileUpload.ItemContent flex="1">
                        <FileUpload.ItemName fontWeight="medium" />
                        <FileUpload.ItemSizeText color="gray.500" fontSize="xs" />
                      </FileUpload.ItemContent>

                      <Float placement="top-end">
                        <FileUpload.ItemDeleteTrigger>
                          <LuX />
                        </FileUpload.ItemDeleteTrigger>
                      </Float>
                    </HStack>
                  </FileUpload.Item>
                ))}
              </FileUpload.ItemGroup>
            </VStack>
          )}
        </FileUpload.Context>
      </FileUpload.Root>
    </VStack>
  )
}
