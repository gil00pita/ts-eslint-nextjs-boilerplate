import { Button, FileUpload } from '@chakra-ui/react'
import { HiUpload } from 'react-icons/hi'

export const FileUploadMultiple = () => {
  return (
    <FileUpload.Root maxFiles={5}>
      <FileUpload.HiddenInput />
      <FileUpload.Trigger asChild>
        <Button size="sm" variant="outline">
          <HiUpload /> Upload file
        </Button>
      </FileUpload.Trigger>
      <FileUpload.List clearable showSize />
    </FileUpload.Root>
  )
}
