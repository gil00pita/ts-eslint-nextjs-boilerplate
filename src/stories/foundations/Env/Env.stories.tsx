import {
  type PropsWithChildren,
  type ReactNode,
  useCallback,
  useMemo,
  useSyncExternalStore,
} from 'react'
import { createPortal } from 'react-dom'
import Frame, { type FrameContextProps, useFrame } from 'react-frame-component'

import { EnvironmentProvider, useEnvironmentContext } from '@/ui/environment'

const meta = {
  title: 'Utilities / Environment',
}

export default meta

const subscribeNoop = () => () => {}
const getReadySnapshot = () => true
const getDeferredServerSnapshot = () => false
const getUnmatchedSnapshot = () => false
const mediaQuery = '(min-width: 600px)'

function createDeferredStore() {
  let ready = false
  let timeoutId: number | undefined
  const listeners = new Set<() => void>()

  return {
    getSnapshot: () => ready,
    subscribe: (onStoreChange: () => void) => {
      listeners.add(onStoreChange)
      timeoutId ??= window.setTimeout(() => {
        ready = true
        timeoutId = undefined
        listeners.forEach((listener) => listener())
      }, 0)

      return () => {
        listeners.delete(onStoreChange)

        if (!listeners.size && timeoutId !== undefined) {
          window.clearTimeout(timeoutId)
          timeoutId = undefined
        }
      }
    },
  }
}

const Portal = ({ children }: PropsWithChildren) => {
  const ready = useDefer(true)
  const { getRootNode } = useEnvironmentContext()
  const doc = (getRootNode?.() ?? globalThis.document) as Document

  if (!ready) return null

  return createPortal(children, doc.body)
}

function useDefer(defer?: boolean) {
  const store = useMemo(() => createDeferredStore(), [])

  return useSyncExternalStore(
    defer ? store.subscribe : subscribeNoop,
    defer ? store.getSnapshot : getReadySnapshot,
    defer ? getDeferredServerSnapshot : getReadySnapshot
  )
}

function useMediaQuery(win: Window, query: string) {
  const getSnapshot = useCallback(() => win.matchMedia(query).matches, [query, win])
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const mql = win.matchMedia(query)
      mql.addEventListener('change', onStoreChange)

      return () => {
        mql.removeEventListener('change', onStoreChange)
      }
    },
    [query, win]
  )

  return useSyncExternalStore(subscribe, getSnapshot, getUnmatchedSnapshot)
}

function useWindow() {
  const { getRootNode } = useEnvironmentContext()
  const doc = (getRootNode?.() ?? globalThis.document) as Document
  const win = doc.defaultView ?? globalThis.window
  const match = useMediaQuery(win, mediaQuery)

  return {
    h: win.innerHeight,
    match,
    w: win.innerWidth,
  }
}

function FrameContext(props: { children: (ctx: FrameContextProps) => ReactNode }) {
  const ctx = useFrame()
  return props.children(ctx)
}

function WindowSize() {
  const data = useWindow()
  return <pre>{JSON.stringify(data)}</pre>
}

export const WithPortal = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Portal>Outside iframe</Portal>
      <Frame style={{ background: 'yellow' }}>
        <EnvironmentProvider>
          <span>Welcome home</span>
          <Portal>Inside iframe</Portal>
        </EnvironmentProvider>
      </Frame>
    </div>
  )
}

export const WithSize = () => {
  return (
    <>
      <WindowSize />
      <Frame style={{ background: 'yellow', maxWidth: '300px', width: '100%' }}>
        <FrameContext>
          {({ document }) => (
            <EnvironmentProvider value={() => document ?? globalThis.document}>
              <WindowSize />
            </EnvironmentProvider>
          )}
        </FrameContext>
      </Frame>
    </>
  )
}
