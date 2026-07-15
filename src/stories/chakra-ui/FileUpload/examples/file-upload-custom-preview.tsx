'use client'

import { Button, FileUpload, Float, useFileUploadContext } from '@chakra-ui/react'
import { LuFileImage, LuX } from 'react-icons/lu'

const FileUploadList = () => {
  const fileUpload = useFileUploadContext()
  const files = fileUpload.acceptedFiles
  if (files.length === 0) return null
  return (
    <FileUpload.ItemGroup>
      {files.map((file) => (
        <FileUpload.Item boxSize="20" file={file} key={file.name} p="2" w="auto">
          <FileUpload.ItemPreviewImage />
          <Float placement="top-end">
            <FileUpload.ItemDeleteTrigger boxSize="4" layerStyle="fill.solid">
              <LuX />
            </FileUpload.ItemDeleteTrigger>
          </Float>
        </FileUpload.Item>
      ))}
    </FileUpload.ItemGroup>
  )
}

export const FileUploadCustomPreview = () => {
  return (
    <FileUpload.Root accept="image/*">
      <FileUpload.HiddenInput />
      <FileUpload.Trigger asChild>
        <Button size="sm" variant="outline">
          <LuFileImage /> Upload Images
        </Button>
      </FileUpload.Trigger>
      <FileUploadList />
    </FileUpload.Root>
  )
}
