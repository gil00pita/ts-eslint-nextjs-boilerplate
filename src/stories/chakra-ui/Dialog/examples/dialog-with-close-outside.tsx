import { AspectRatio, Button, CloseButton, Dialog, Portal } from '@chakra-ui/react'

export const DialogWithCloseOutside = () => {
  return (
    <Dialog.Root placement="center">
      <Dialog.Trigger asChild>
        <Button size="sm" variant="outline">
          Open Dialog
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Body pt="4">
              <Dialog.Title>Dialog Title</Dialog.Title>
              <Dialog.Description mb="4">
                This is a dialog with some content and a video.
              </Dialog.Description>
              <AspectRatio overflow="hidden" ratio={4 / 3} rounded="lg">
                <iframe
                  allowFullScreen
                  src="https://www.youtube.com/embed/QhBnZ6NPOY0"
                  title="naruto"
                />
              </AspectRatio>
            </Dialog.Body>
            <Dialog.CloseTrigger asChild insetEnd="-12" top="0">
              <CloseButton bg="bg" size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
