'use client'

import { chakra } from '@chakra-ui/react'

export const PlaygroundTable = chakra('table', {
  base: {
    '& td:not(.chakra-table__cell)': {
      paddingBottom: '8',
      paddingRight: '8',
    },
    '& th:not(.chakra-table__column-header)': {
      color: 'fg.muted',
      fontSize: 'sm',
    },
    '& thead td:not(.chakra-table__cell)': {
      color: 'fg.muted',
      fontSize: 'sm',
    },
    borderCollapse: 'collapse',
    marginBottom: '32px',
    width: 'full',
  },
})
