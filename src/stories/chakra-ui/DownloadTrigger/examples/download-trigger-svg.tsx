import { Button, DownloadTrigger } from '@chakra-ui/react'

const data = String.raw`
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red"/>
</svg>
`

export const DownloadTriggerSvg = () => {
  return (
    <DownloadTrigger asChild data={data} fileName="sample.svg" mimeType="image/svg+xml">
      <Button variant="outline">Download svg</Button>
    </DownloadTrigger>
  )
}
