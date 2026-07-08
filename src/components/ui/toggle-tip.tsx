'use client'

import type { IconButtonProps } from '@chakra-ui/react'

import { IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { LuInfo } from 'react-icons/lu'

import { Tooltip, type TooltipProps } from './tooltip'

export type ToggleTipProps = TooltipProps

export function ToggleTip(props: ToggleTipProps) {
  return <Tooltip closeDelay={0} openDelay={0} {...props} />
}

export interface InfoTipProps extends Omit<IconButtonProps, 'aria-label' | 'content'> {
  content?: React.ReactNode
  'aria-label'?: string
}

export function InfoTip(props: InfoTipProps) {
  const { 'aria-label': ariaLabel = 'More information', children, content, ...buttonProps } = props

  return (
    <ToggleTip content={content ?? children}>
      <IconButton aria-label={ariaLabel} size="xs" variant="ghost" {...buttonProps}>
        <LuInfo />
      </IconButton>
    </ToggleTip>
  )
}
