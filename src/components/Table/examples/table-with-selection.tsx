'use client'

import { Checkbox, Table } from '@chakra-ui/react'
import { useState } from 'react'

export const TableWithSelection = () => {
  const [selection, setSelection] = useState<string[]>([])

  const indeterminate = selection.length > 0 && selection.length < items.length

  const rows = items.map((item) => (
    <Table.Row data-selected={selection.includes(item.name) ? '' : undefined} key={item.name}>
      <Table.Cell>
        <Checkbox.Root
          aria-label="Select row"
          checked={selection.includes(item.name)}
          mt="0.5"
          onCheckedChange={(changes) => {
            setSelection((prev) =>
              changes.checked
                ? [...prev, item.name]
                : selection.filter((name) => name !== item.name)
            )
          }}
          size="sm"
        >
          <Checkbox.HiddenInput />
          <Checkbox.Control />
        </Checkbox.Root>
      </Table.Cell>
      <Table.Cell>{item.name}</Table.Cell>
      <Table.Cell>{item.category}</Table.Cell>
      <Table.Cell>${item.price}</Table.Cell>
    </Table.Row>
  ))

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader w="6">
            <Checkbox.Root
              aria-label="Select all rows"
              checked={indeterminate ? 'indeterminate' : selection.length > 0}
              mt="0.5"
              onCheckedChange={(changes) => {
                setSelection(changes.checked ? items.map((item) => item.name) : [])
              }}
              size="sm"
            >
              <Checkbox.HiddenInput />
              <Checkbox.Control />
            </Checkbox.Root>
          </Table.ColumnHeader>
          <Table.ColumnHeader>Product</Table.ColumnHeader>
          <Table.ColumnHeader>Category</Table.ColumnHeader>
          <Table.ColumnHeader>Price</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>{rows}</Table.Body>
    </Table.Root>
  )
}

const items = [
  { category: 'Electronics', id: 1, name: 'Laptop', price: 999.99 },
  { category: 'Home Appliances', id: 2, name: 'Coffee Maker', price: 49.99 },
  { category: 'Furniture', id: 3, name: 'Desk Chair', price: 150.0 },
  { category: 'Electronics', id: 4, name: 'Smartphone', price: 799.99 },
  { category: 'Accessories', id: 5, name: 'Headphones', price: 199.99 },
]
