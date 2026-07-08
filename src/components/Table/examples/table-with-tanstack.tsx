'use client'

import { Table } from '@chakra-ui/react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

type Product = {
  id: number
  name: string
  category: string
  price: number
  stock: number
}

const columnHelper = createColumnHelper<Product>()

const columns = [
  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
    header: 'Product',
  }),
  columnHelper.accessor('category', {
    cell: (info) => info.getValue(),
    header: 'Category',
  }),
  columnHelper.accessor('price', {
    cell: (info) => `$${info.getValue().toFixed(2)}`,
    header: 'Price',
  }),
  columnHelper.accessor('stock', {
    cell: (info) => info.getValue(),
    header: 'Stock',
  }),
]

export const TableWithTanstack = () => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <Table.Root native size="sm" variant="outline">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table.Root>
  )
}

const data: Product[] = [
  { category: 'Electronics', id: 1, name: 'Laptop', price: 999.99, stock: 50 },
  {
    category: 'Home Appliances',
    id: 2,
    name: 'Coffee Maker',
    price: 49.99,
    stock: 120,
  },
  {
    category: 'Furniture',
    id: 3,
    name: 'Desk Chair',
    price: 150.0,
    stock: 30,
  },
  {
    category: 'Electronics',
    id: 4,
    name: 'Smartphone',
    price: 799.99,
    stock: 75,
  },
  {
    category: 'Accessories',
    id: 5,
    name: 'Headphones',
    price: 199.99,
    stock: 200,
  },
]
