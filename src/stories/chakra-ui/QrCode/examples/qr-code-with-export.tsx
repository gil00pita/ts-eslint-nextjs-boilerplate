import { Button, QrCode } from '@chakra-ui/react'

export const QrCodeWithExport = () => {
  return (
    <QrCode.Root value="https://www.google.com">
      <QrCode.Frame>
        <QrCode.Pattern />
      </QrCode.Frame>

      <QrCode.DownloadTrigger asChild fileName="qr-code.png" mimeType="image/png">
        <Button mt="3" size="xs" variant="outline">
          Download
        </Button>
      </QrCode.DownloadTrigger>
    </QrCode.Root>
  )
}
