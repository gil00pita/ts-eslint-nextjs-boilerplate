import type { ReactNode } from 'react'

import { Box, Code, Table } from '@chakra-ui/react'

import { StatusBadge, type StatusTone } from './StatusBadge'

export interface SpecTableColumn {
  align?: 'center' | 'end' | 'start'
  badgeTone?: (value: ReactNode) => StatusTone
  header: string
  isCode?: boolean
  key: string
  render?: (value: ReactNode, row: Record<string, ReactNode>) => ReactNode
  width?: string
}

interface SpecTableProps {
  columns: SpecTableColumn[]
  rows: Record<string, ReactNode>[]
}

export const SpecTable = ({ columns, rows }: SpecTableProps) => (
  <Box
    borderColor="border.muted"
    borderRadius="xl"
    borderWidth="1px"
    boxShadow="xs"
    my={6}
    overflow="hidden"
  >
    <Table.ScrollArea>
      <Table.Root size="sm" striped>
        <Table.Header>
          <Table.Row bg="bg.muted">
            {columns.map((column) => (
              <Table.ColumnHeader
                color="fg.muted"
                fontSize="xs"
                key={column.key}
                letterSpacing="wide"
                textAlign={column.align}
                textTransform="uppercase"
                width={column.width}
              >
                {column.header}
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows.map((row, rowIndex) => (
            <Table.Row key={`${row[columns[0]?.key ?? '']}-${rowIndex}`}>
              {columns.map((column) => {
                const value = row[column.key]
                return (
                  <Table.Cell key={column.key} textAlign={column.align} verticalAlign="top">
                    {column.render ? (
                      column.render(value, row)
                    ) : column.badgeTone ? (
                      <StatusBadge tone={column.badgeTone(value)}>{value}</StatusBadge>
                    ) : column.isCode ? (
                      <Code colorPalette="gray">{value}</Code>
                    ) : (
                      value
                    )}
                  </Table.Cell>
                )
              })}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  </Box>
)
