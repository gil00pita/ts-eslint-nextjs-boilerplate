'use client'

import { Button } from '@chakra-ui/react'

export const ButtonWithDisabledLink = () => {
  return (
    <Button asChild>
      <a data-disabled="" href="#" onClick={(e) => e.preventDefault()}>
        Button
      </a>
    </Button>
  )
}
