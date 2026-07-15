import { Link, Stack } from '@chakra-ui/react'

export const LinkWithVariants = () => {
  return (
    <Stack>
      <Link href="#" variant="underline">
        Link (Underline)
      </Link>
      <Link href="#" variant="plain">
        Link (Plain)
      </Link>
    </Stack>
  )
}
