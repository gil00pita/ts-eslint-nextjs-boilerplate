'use client'

import type { ReactNode } from 'react'

export type FloatingMenuProps = {
  children?: ReactNode
  items?: Array<Record<string, unknown>>
  onSelect?: (item: Record<string, unknown>) => void
  [key: string]: unknown
}

export function SuggestionMenu(props: FloatingMenuProps) {
  return <>{props.children}</>
}

export function HashtagItem(props: FloatingMenuProps) {
  return <>{props.children}</>
}

export function MentionItem(props: FloatingMenuProps) {
  return <>{props.children}</>
}

export function createEmojiSuggestionConfig() {
  return {}
}

export function createMentionConfig() {
  return {}
}

export function createSuggestionConfig() {
  return {}
}
