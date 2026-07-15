'use client'

import { For, Marquee, Span, Stack } from '@chakra-ui/react'
import {
  IoLogoFigma,
  IoLogoGitlab,
  IoLogoJavascript,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoVimeo,
} from 'react-icons/io5'

const speeds = [
  { label: 'Slow (25px/s)', value: 25 },
  { label: 'Normal (50px/s)', value: 50 },
  { label: 'Fast (100px/s)', value: 100 },
]

export const MarqueeWithSpeed = () => (
  <Stack gap="12">
    <For each={speeds}>
      {(speed) => (
        <Stack gap="4" key={speed.value}>
          <Span fontWeight="medium" textStyle="sm">
            {speed.label}
          </Span>
          <Marquee.Root speed={speed.value}>
            <Marquee.Viewport>
              <Marquee.Content>
                {items.map((item, i) => (
                  <Marquee.Item key={i} px="2rem">
                    {item.icon && (
                      <item.icon aria-label={item.label} color={item.color} size="3rem" />
                    )}
                  </Marquee.Item>
                ))}
              </Marquee.Content>
            </Marquee.Viewport>
          </Marquee.Root>
        </Stack>
      )}
    </For>
  </Stack>
)

const items = [
  { color: '#F24E1E', icon: IoLogoFigma, label: 'Figma' },
  { color: '#1da1f2', icon: IoLogoTwitter, label: 'Twitter' },
  { color: '#0077b5', icon: IoLogoLinkedin, label: 'LinkedIn' },
  { color: '#fc6d26', icon: IoLogoGitlab, label: 'GitLab' },
  { color: '#1ab7ea', icon: IoLogoVimeo, label: 'Vimeo' },
  { color: '#f7df1e', icon: IoLogoJavascript, label: 'JavaScript' },
]
