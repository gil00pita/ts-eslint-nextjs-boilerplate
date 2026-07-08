import '../styles/globals.css' // eslint-disable-line no-restricted-imports

import type { Metadata } from 'next'

import React from 'react'

import { Provider } from '@/components/ui/provider'

export const metadata: Metadata = {
  description: 'Empty Next.js and Chakra UI starter',
  title: 'Phenix UI Starter Kit',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
