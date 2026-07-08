'use client'

import { FileUpload, Float, Input, type InputProps, useFileUploadContext } from '@chakra-ui/react'
import { HiX } from 'react-icons/hi'

const FilePasteInput = (props: InputProps) => {
  const fileUpload = useFileUploadContext()
  return (
    <Input
      {...props}
      onPaste={(e) => {
        fileUpload.setClipboardFiles(e.clipboardData)
      }}
    />
  )
}

const FileImageList = () => {
  const fileUpload = useFileUploadContext()
  return (
    <FileUpload.ItemGroup display="flex" flexWrap="wrap" gap="3">
      {fileUpload.acceptedFiles.map((file) => (
        <FileUpload.Item file={file} key={file.name} p="2" pos="relative" width="auto">
          <Float placement="top-start">
            <FileUpload.ItemDeleteTrigger bg="bg" borderWidth="1px" p="0.5" rounded="l1">
              <HiX />
            </FileUpload.ItemDeleteTrigger>
          </Float>
          <FileUpload.ItemPreviewImage boxSize="12" objectFit="cover" rounded="l1" />
        </FileUpload.Item>
      ))}
    </FileUpload.ItemGroup>
  )
}

export const FileUploadWithPasteEvent = () => {
  return (
    <FileUpload.Root accept="image/*" maxFiles={3}>
      <FileUpload.HiddenInput />
      <FileImageList />
      <FilePasteInput placeholder="Paste image here..." />
    </FileUpload.Root>
  )
}
