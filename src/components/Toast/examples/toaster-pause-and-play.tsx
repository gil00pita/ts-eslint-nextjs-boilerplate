'use client'

import { Button, HStack } from '@chakra-ui/react'
import { useId, useState } from 'react'
import { HiPause, HiPlay } from 'react-icons/hi'

import { toaster } from '@/ui/toaster'

export const ToasterPauseAndPlay = () => {
  const id = useId()
  const [paused, setPaused] = useState(false)
  const [shown, setShown] = useState(false)

  const show = () => {
    toaster.success({
      id,
      onStatusChange: (details) => {
        if (details.status === 'visible') {
          setShown(true)
        } else if (details.status === 'dismissing') {
          setShown(false)
        }
      },
      title: 'This is a success toast',
    })
  }

  const pause = () => {
    toaster.pause(id)
    setPaused(true)
  }

  const play = () => {
    toaster.resume(id)
    setPaused(false)
  }

  return (
    <HStack>
      <Button disabled={shown} onClick={show} size="sm" variant="outline">
        Show Toast
      </Button>
      <Button disabled={!shown || paused} onClick={pause} size="sm" variant="outline">
        <HiPause />
        Pause Toast
      </Button>
      <Button disabled={!shown || !paused} onClick={play} size="sm" variant="outline">
        <HiPlay />
        Play Toast
      </Button>
    </HStack>
  )
}
