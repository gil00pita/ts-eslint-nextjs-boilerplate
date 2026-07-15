import { Avatar, HStack, RatingGroup, Stack, Text } from '@chakra-ui/react'

export const RatingInTestimonial = () => {
  return (
    <Stack gap="4" maxW="320px">
      <RatingGroup.Root colorPalette="orange" count={5} defaultValue={5} readOnly size="xs">
        <RatingGroup.HiddenInput />
        <RatingGroup.Control />
      </RatingGroup.Root>

      <Text>Sage is a great software engineer. He is very professional and knowledgeable.</Text>

      <HStack gap="4">
        <Avatar.Root>
          <Avatar.Fallback name="Matthew Jones" />
          <Avatar.Image src="https://randomuser.me/api/portraits/men/70.jpg" />
        </Avatar.Root>
        <Stack gap="0" textStyle="sm">
          <Text fontWeight="medium">Matthew Jones</Text>
          <Text color="fg.muted">CTO, Company</Text>
        </Stack>
      </HStack>
    </Stack>
  )
}
