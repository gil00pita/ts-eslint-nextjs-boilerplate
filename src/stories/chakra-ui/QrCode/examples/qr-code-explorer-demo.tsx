import { Button, QrCode, Stack } from '@chakra-ui/react'

export const QrCodeExplorerDemo = () => {
  return (
    <Stack align="center" gap="6" maxW="sm">
      <QrCode.Root value="https://www.google.com">
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>

        <QrCode.DownloadTrigger asChild fileName="qr-code.png" mimeType="image/png" mt={4}>
          <Button size="sm" variant="outline">
            Download QR
          </Button>
        </QrCode.DownloadTrigger>
      </QrCode.Root>
    </Stack>
  )
}
