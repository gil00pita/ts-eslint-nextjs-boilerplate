import { RatingGroup } from '@chakra-ui/react'

const emojiMap: Record<string, string> = {
  1: '😡',
  2: '😠',
  3: '😐',
  4: '😊',
  5: '😍',
}

export const RatingEmoji = () => {
  return (
    <RatingGroup.Root count={5} defaultValue={3}>
      <RatingGroup.Control>
        {Array.from({ length: 5 }).map((_, index) => (
          <RatingGroup.Item
            _hover={{ scale: '1.1' }}
            filter={{ _checked: 'revert', base: 'grayscale(1)' }}
            index={index + 1}
            key={index}
            minW="9"
            transition="scale 0.1s"
          >
            {emojiMap[index + 1]}
          </RatingGroup.Item>
        ))}
      </RatingGroup.Control>
    </RatingGroup.Root>
  )
}
