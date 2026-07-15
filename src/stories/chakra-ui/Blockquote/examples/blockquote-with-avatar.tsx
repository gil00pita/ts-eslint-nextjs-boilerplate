import { Avatar, Blockquote, Float, HStack, Span } from '@chakra-ui/react'

export const BlockquoteWithAvatar = () => {
  return (
    <Blockquote.Root bg="bg.subtle" padding="8">
      <Float offset="10" placement="bottom-end">
        <Blockquote.Icon boxSize="10" opacity="0.4" rotate="180deg" />
      </Float>
      <Blockquote.Content cite="Uzumaki Naruto">
        If anyone thinks he is something when he is nothing, he deceives himself. Each one should
        test his own actions. Then he can take pride in himself, without comparing himself to anyone
        else.
      </Blockquote.Content>
      <Blockquote.Caption>
        <cite>
          <HStack gap="3" mt="2">
            <Avatar.Root size="sm">
              <Avatar.Fallback name="Emily Jones" />
              <Avatar.Image src="https://i.pravatar.cc/150?u=re" />
            </Avatar.Root>
            <Span fontWeight="medium">Emily Jones</Span>
          </HStack>
        </cite>
      </Blockquote.Caption>
    </Blockquote.Root>
  )
}
