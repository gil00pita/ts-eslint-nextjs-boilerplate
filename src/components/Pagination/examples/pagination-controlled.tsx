'use client'

import { ButtonGroup, IconButton, Pagination } from '@chakra-ui/react'
import { useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

export const PaginationControlled = () => {
  const [page, setPage] = useState(1)

  return (
    <Pagination.Root count={20} onPageChange={(e) => setPage(e.page)} page={page} pageSize={2}>
      <ButtonGroup size="sm" variant="ghost">
        <Pagination.PrevTrigger asChild>
          <IconButton>
            <HiChevronLeft />
          </IconButton>
        </Pagination.PrevTrigger>

        <Pagination.Items
          render={(page) => (
            <IconButton variant={{ _selected: 'outline', base: 'ghost' }}>{page.value}</IconButton>
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
