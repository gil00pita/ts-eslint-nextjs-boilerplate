import { Button, FileUpload } from '@chakra-ui/react'
import { HiUpload } from 'react-icons/hi'

export const FileUploadBasic = () => {
  return (
    <FileUpload.Root>
      <FileUpload.HiddenInput />
      <FileUpload.Trigger asChild>
        <Button size="sm" variant="outline">
          <HiUpload /> Upload file
        </Button>
      </FileUpload.Trigger>
      <FileUpload.List />
    </FileUpload.Root>
  )
}
