import { HStack, Loader } from '@chakra-ui/react'

export const LoaderBasic = () => {
  return (
    <HStack fontWeight="medium" textStyle="sm">
      <Loader text="Loading...">Click me</Loader>
    </HStack>
  )
}
