'use client'

import { Button, HStack, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'

import { toaster } from '@/ui/toaster'

export const ToasterLifecycle = () => {
  const [statusLog, setStatusLog] = useState<[number, string][]>([])
  const [dismissed, setDismissed] = useState(true)

  return (
    <Stack align="flex-start">
      <Button
        disabled={!dismissed}
        onClick={() =>
          toaster.create({
            description: 'This is a toast',
            onStatusChange({ status }) {
              setDismissed(status === 'unmounted')
              setStatusLog((prev) => [[Date.now(), status], ...prev])
            },
            type: 'info',
          })
        }
        size="sm"
        variant="outline"
      >
        Show Toast
      </Button>

      <Stack borderWidth="1px" minH="100px" padding="2" role="log" width="full">
        {statusLog.map(([time, toastStatus], i) => {
          const date = new Date(time)
          return (
            <HStack as="pre" fontFamily="mono" key={i} textStyle="sm">
              {date.toLocaleTimeString()} <Text fontWeight="bold">{toastStatus}</Text>
            </HStack>
          )
        })}
      </Stack>
    </Stack>
  )
}
