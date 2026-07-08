'use client'

import { ButtonGroup, IconButton, Pagination } from '@chakra-ui/react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

export const PaginationAttached = () => {
  return (
    <Pagination.Root count={20} defaultPage={1} pageSize={2}>
      <ButtonGroup attached size="sm" variant="outline">
        <Pagination.PrevTrigger asChild>
          <IconButton>
            <HiChevronLeft />
          </IconButton>
        </Pagination.PrevTrigger>

        <Pagination.Items
          render={(page) => (
            <IconButton
              variant={{ _selected: 'solid', base: 'outline' }}
              zIndex={{ _selected: '1' }}
            >
              {page.value}
            </IconButton>
          )}
        />

        <Pagination.NextTrigger asChild>
          <IconButton>
            <HiChevronRight />
          </IconButton>
        </Pagination.NextTrigger>
      </ButtonGroup>
    </Pagination.Root>
  )
}
