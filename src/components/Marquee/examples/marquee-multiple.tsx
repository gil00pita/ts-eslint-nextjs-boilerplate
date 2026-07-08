'use client'

import type { IconType } from 'react-icons/lib'

import { Marquee, Stack } from '@chakra-ui/react'
import {
  IoLogoFigma,
  IoLogoGitlab,
  IoLogoJavascript,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoVimeo,
} from 'react-icons/io5'

interface Item {
  icon: IconType
  color: string
}

const items: Item[] = [
  { color: '#F24E1E', icon: IoLogoFigma },
  { color: '#1da1f2', icon: IoLogoTwitter },
  { color: '#0077b5', icon: IoLogoLinkedin },
  { color: '#fc6d26', icon: IoLogoGitlab },
  { color: '#1ab7ea', icon: IoLogoVimeo },
  { color: '#f7df1e', icon: IoLogoJavascript },
]

export const MarqueeMultiple = () => {
  return (
    <Stack gap="8" py="8">
      <MarqueeRow items={items} />
      <MarqueeRow items={items} reverse />
    </Stack>
  )
}

interface MarqueeRowProps {
  items: Item[]
  reverse?: boolean
}

const MarqueeRow = (props: MarqueeRowProps) => {
  const { items, reverse = false } = props
  return (
    <Marquee.Root autoFill reverse={reverse}>
      <Marquee.Viewport>
        <Marquee.Content>
          {items.map((item, i) => (
            <Marquee.Item key={i} px="2rem">
              <item.icon color={item.color} size="3rem" />
            </Marquee.Item>
          ))}
        </Marquee.Content>
      </Marquee.Viewport>
    </Marquee.Root>
  )
}
