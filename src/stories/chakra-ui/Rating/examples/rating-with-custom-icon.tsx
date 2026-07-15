import { RatingGroup } from '@chakra-ui/react'
import { IoHeart } from 'react-icons/io5'

export const RatingWithCustomIcon = () => {
  return (
    <RatingGroup.Root colorPalette="red" count={5} defaultValue={4}>
      <RatingGroup.HiddenInput />
      <RatingGroup.Control>
        {Array.from({ length: 5 }).map((_, index) => (
          <RatingGroup.Item index={index + 1} key={index}>
            <RatingGroup.ItemIndicator icon={<IoHeart />} />
          </RatingGroup.Item>
        ))}
      </RatingGroup.Control>
    </RatingGroup.Root>
  )
}
