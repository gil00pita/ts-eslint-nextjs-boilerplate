'use client'

import { ButtonGroup, For, IconButton, Pagination, Stack } from '@chakra-ui/react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

export const PaginationWithSizes = () => {
  return (
    <Stack gap="8">
      <For each={['xs', 'sm', 'md', 'lg']}>
        {(size) => (
          <Pagination.Root count={20} defaultPage={1} key={size} pageSize={2}>
            <ButtonGroup size={size} variant="ghost">
              <Pagination.PrevTrigger asChild>
                <IconButton>
                  <LuChevronLeft />
                </IconButton>
              </Pagination.PrevTrigger>

              <Pagination.Items
                render={(page) => (
                  <IconButton variant={{ _selected: 'outline', base: 'ghost' }}>
                    {page.value}
                  </IconButton>
                )}
              />

              <Pagination.NextTrigger asChild>
                <IconButton>
                  <LuChevronRight />
                </IconButton>
              </Pagination.NextTrigger>
            </ButtonGroup>
          </Pagination.Root>
        )}
      </For>
    </Stack>
  )
}
