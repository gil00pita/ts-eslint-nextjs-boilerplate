'use client'

import { createIcon } from '@chakra-ui/react'

const HeartIcon = createIcon({
  displayName: 'HeartIcon',
  path: (
    <>
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path
        d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
        fill="currentColor"
      />
    </>
  ),
})

export const IconWithCreateIcon = () => {
  return <HeartIcon color="blue.400" size="lg" />
}
