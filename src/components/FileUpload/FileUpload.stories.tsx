import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Forms / File Upload',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('FileUpload')

export { FileUploadAcceptedFiles as AcceptedFiles } from './examples/file-upload-accepted-files'
export { FileUploadBasic as Basic } from './examples/file-upload-basic'
export { FileUploadCustomPreview as CustomPreview } from './examples/file-upload-custom-preview'
export { FileUploadDirectory as Directory } from './examples/file-upload-directory'
export { FileUploadOpenFromDialog as OpenFromDialog } from './examples/file-upload-open-from-dialog'
export { FileUploadMediaCapture as MediaCapture } from './examples/file-upload-media-capture'
export { FileUploadMultiple as Multiple } from './examples/file-upload-multiple'
export { FileUploadWithDropzone as Dropzone } from './examples/file-upload-with-dropzone'
export { FileUploadWithConditionalDropzone as ConditionalDropzone } from './examples/file-upload-with-conditional-dropzone'
export { FileUploadWithHookForm as HookForm } from './examples/file-upload-with-hook-form'
export { FileUploadWithInput as Input } from './examples/file-upload-with-input'
export { FileUploadWithInputClear as InputClear } from './examples/file-upload-with-input-clear'
export { FileUploadWithPasteEvent as PasteEvent } from './examples/file-upload-with-paste-event'
export { FileUploadWithStore as Store } from './examples/file-upload-with-store'
