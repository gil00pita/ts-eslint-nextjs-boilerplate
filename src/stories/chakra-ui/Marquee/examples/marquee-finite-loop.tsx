'use client'

import { Marquee, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import {
  IoLogoFigma,
  IoLogoGitlab,
  IoLogoJavascript,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoVimeo,
} from 'react-icons/io5'

export const MarqueeFiniteLoop = () => {
  const [loopCount, setLoopCount] = useState(0)
  const [completedCount, setCompletedCount] = useState(0)

  return (
    <>
      <Marquee.Root
        loopCount={3}
        onComplete={() => setCompletedCount((prev) => prev + 1)}
        onLoopComplete={() => setLoopCount((prev) => prev + 1)}
      >
        <Marquee.Viewport>
          <Marquee.Content>
            {items.map((item, i) => (
              <Marquee.Item key={i} px="2rem">
                {item.icon && <item.icon aria-label={item.label} color={item.color} size="3rem" />}
              </Marquee.Item>
            ))}
          </Marquee.Content>
        </Marquee.Viewport>
      </Marquee.Root>

      <Stack m="4" textStyle="sm">
        <p>Loop completed: {loopCount} times</p>
        <p>Animation completed: {completedCount} times</p>
      </Stack>
    </>
  )
}

const items = [
  { color: '#F24E1E', icon: IoLogoFigma, label: 'Figma' },
  { color: '#1da1f2', icon: IoLogoTwitter, label: 'Twitter' },
  { color: '#0077b5', icon: IoLogoLinkedin, label: 'LinkedIn' },
  { color: '#fc6d26', icon: IoLogoGitlab, label: 'GitLab' },
  { color: '#1ab7ea', icon: IoLogoVimeo, label: 'Vimeo' },
  { color: '#f7df1e', icon: IoLogoJavascript, label: 'JavaScript' },
]
