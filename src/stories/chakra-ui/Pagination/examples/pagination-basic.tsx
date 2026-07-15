'use client'

import { ButtonGroup, IconButton, Pagination } from '@chakra-ui/react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

export const PaginationBasic = () => {
  return (
    <Pagination.Root count={20} defaultPage={1} pageSize={2}>
      <ButtonGroup size="sm" variant="ghost">
        <Pagination.PrevTrigger asChild>
          <IconButton>
            <LuChevronLeft />
          </IconButton>
        </Pagination.PrevTrigger>

        <Pagination.Items
          render={(page) => (
            <IconButton variant={{ _selected: 'outline', base: 'ghost' }}>{page.value}</IconButton>
          )}
        />

        <Pagination.NextTrigger asChild>
          <IconButton>
            <LuChevronRight />
          </IconButton>
        </Pagination.NextTrigger>
      </ButtonGroup>
    </Pagination.Root>
  )
}
