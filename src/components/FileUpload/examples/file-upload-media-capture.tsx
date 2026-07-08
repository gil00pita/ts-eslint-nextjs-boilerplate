import { Button, FileUpload } from '@chakra-ui/react'
import { HiCamera } from 'react-icons/hi'

export const FileUploadMediaCapture = () => {
  return (
    <FileUpload.Root capture="environment">
      <FileUpload.HiddenInput />
      <FileUpload.Trigger asChild>
        <Button size="sm" variant="outline">
          <HiCamera /> Open Camera
        </Button>
      </FileUpload.Trigger>
      <FileUpload.List />
    </FileUpload.Root>
  )
}
