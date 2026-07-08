'use client'

import { chakra } from '@chakra-ui/react'

const Alert = chakra('div', {
  variants: {
    caps: {
      true: {
        textTransform: 'uppercase',
      },
    },
    status: {
      default: { bg: 'gray' },
      error: { bg: 'red' },
      success: { bg: 'green' },
      warning: { bg: 'orange' },
    },
  },
  base: {
    color: 'white',
    fontFamily: 'Inter',
    fontSize: 'sm',
    fontWeight: 'semibold',
    lineHeight: '1',
    padding: '4',
    rounded: 'md',
  },
})

export const SystemAlertRecipe = () => {
  return (
    <Alert caps status="success">
      This is an alert
    </Alert>
  )
}
