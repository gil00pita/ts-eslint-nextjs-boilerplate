'use client'

import { Heading, Mark, useHighlight } from '@chakra-ui/react'
import { Fragment } from 'react'

export const HighlightWithSquiggle = () => {
  const chunks = useHighlight({
    query: ['endless', 'real humans.'],
    text: 'Endless scale, powered by real humans.',
  })

  return (
    <Heading maxW="20ch" size="2xl">
      {chunks.map((chunk, index) => {
        return chunk.match ? (
          <Mark
            css={{
              color: 'red.500',
              fontStyle: 'italic',
              position: 'relative',
            }}
            key={index}
          >
            {chunk.text}
            <img
              alt=""
              loading="lazy"
              src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/61c4dc7572d22f05ba26fd34_hero-underline.svg"
              style={{ left: 0, position: 'absolute' }}
            />
          </Mark>
        ) : (
          <Fragment key={index}>{chunk.text}</Fragment>
        )
      })}
    </Heading>
  )
}
