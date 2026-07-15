import { Box, FileUpload, Icon } from '@chakra-ui/react'
import { LuUpload } from 'react-icons/lu'

export const FileUploadWithDropzone = () => {
  return (
    <FileUpload.Root alignItems="stretch" maxFiles={10} maxW="xl">
      <FileUpload.HiddenInput />
      <FileUpload.Dropzone>
        <Icon color="fg.muted" size="md">
          <LuUpload />
        </Icon>
        <FileUpload.DropzoneContent>
          <Box>Drag and drop files here</Box>
          <Box color="fg.muted">.png, .jpg up to 5MB</Box>
        </FileUpload.DropzoneContent>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload.Root>
  )
}
