import { CloseButton, FileUpload, Input, InputGroup } from '@chakra-ui/react'
import { LuFileUp } from 'react-icons/lu'

export const FileUploadWithInputClear = () => {
  return (
    <FileUpload.Root gap="1" maxWidth="300px">
      <FileUpload.HiddenInput />
      <FileUpload.Label>Upload file</FileUpload.Label>
      <InputGroup
        endElement={
          <FileUpload.ClearTrigger asChild>
            <CloseButton
              focusRingWidth="2px"
              focusVisibleRing="inside"
              me="-1"
              pointerEvents="auto"
              size="xs"
              variant="plain"
            />
          </FileUpload.ClearTrigger>
        }
        startElement={<LuFileUp />}
      >
        <Input asChild>
          <FileUpload.Trigger>
            <FileUpload.FileText lineClamp={1} />
          </FileUpload.Trigger>
        </Input>
      </InputGroup>
    </FileUpload.Root>
  )
}
