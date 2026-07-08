'use client'

import type { BoxProps } from '@chakra-ui/react'

import { Box } from '@chakra-ui/react'
import * as React from 'react'

export interface ProseProps extends BoxProps {
  size?: 'sm' | 'md' | 'lg'
}

export const Prose = React.forwardRef<HTMLDivElement, ProseProps>(function Prose(props, ref) {
  const { size = 'md', ...rest } = props

  return (
    <Box
      color="fg"
      css={{
        '& :where(a)': {
          color: 'fg.link',
          textDecoration: 'underline',
        },
        '& :where(code)': {
          bg: 'bg.muted',
          borderRadius: 'l1',
          px: '1',
        },
        '& :where(h1, h2, h3, h4)': {
          color: 'fg',
          fontWeight: 'semibold',
          lineHeight: '1.25',
          marginBottom: '0.5em',
          marginTop: '1.5em',
        },
        '& :where(p, ul, ol, blockquote, table)': {
          marginBottom: '1em',
        },
      }}
      lineHeight="1.7"
      ref={ref}
      textStyle={size}
      {...rest}
    />
  )
})
