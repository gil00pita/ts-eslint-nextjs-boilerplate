import { RatingGroup } from '@chakra-ui/react'
import * as React from 'react'

export interface RatingProps extends RatingGroup.RootProps {
  icon?: React.ReactElement
  count?: number
  label?: React.ReactNode
}

export const Rating = React.forwardRef<HTMLDivElement, RatingProps>(function Rating(props, ref) {
  const { count = 5, icon, label, ...rest } = props
  return (
    <RatingGroup.Root count={count} ref={ref} {...rest}>
      {label && <RatingGroup.Label>{label}</RatingGroup.Label>}
      <RatingGroup.HiddenInput />
      <RatingGroup.Control>
        {Array.from({ length: count }).map((_, index) => (
          <RatingGroup.Item index={index + 1} key={index}>
            <RatingGroup.ItemIndicator icon={icon} />
          </RatingGroup.Item>
        ))}
      </RatingGroup.Control>
    </RatingGroup.Root>
  )
})
