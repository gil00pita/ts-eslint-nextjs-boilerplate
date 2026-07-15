import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { cleanup, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import userEvent from '@testing-library/user-event'
import { LuHouse } from 'react-icons/lu'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { Sidebar } from './Sidebar'

function renderSidebar(onOpenChange?: (open: boolean) => void) {
  return render(
    <ChakraProvider value={defaultSystem}>
      <Sidebar.Provider mobile={false} onOpenChange={onOpenChange}>
        <Sidebar.Root collapsible="icon" data-testid="sidebar-root">
          <Sidebar.Content>
            <Sidebar.Group>
              <Sidebar.GroupLabel>Application</Sidebar.GroupLabel>
              <Sidebar.GroupContent>
                <Sidebar.Menu>
                  <Sidebar.MenuItem>
                    <Sidebar.MenuButton active tooltip="Home">
                      <LuHouse />
                      <span>Home</span>
                    </Sidebar.MenuButton>
                  </Sidebar.MenuItem>
                </Sidebar.Menu>
              </Sidebar.GroupContent>
            </Sidebar.Group>
          </Sidebar.Content>
        </Sidebar.Root>
        <Sidebar.Inset>
          <Sidebar.Trigger />
        </Sidebar.Inset>
      </Sidebar.Provider>
    </ChakraProvider>
  )
}

describe('Sidebar', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        addEventListener: vi.fn(),
        addListener: vi.fn(),
        dispatchEvent: vi.fn(),
        matches: false,
        media: query,
        onchange: null,
        removeEventListener: vi.fn(),
        removeListener: vi.fn(),
      })),
    })
    document.cookie = 'sidebar:state=; max-age=0; path=/'
  })

  afterEach(cleanup)

  it('collapses from the trigger and announces its state', async () => {
    const user = userEvent.setup()
    const onOpenChange = vi.fn()
    renderSidebar(onOpenChange)

    const trigger = screen.getByRole('button', { name: /toggle sidebar/i })
    expect(trigger).toHaveAttribute('aria-expanded', 'true')

    await user.click(trigger)

    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByTestId('sidebar-root').closest('[data-state]')).toHaveAttribute(
      'data-state',
      'collapsed'
    )
    expect(onOpenChange).toHaveBeenCalledWith(false)
    expect(document.cookie).toContain('sidebar:state=false')
  })

  it('toggles with the Ctrl+B keyboard shortcut', async () => {
    const user = userEvent.setup()
    renderSidebar()

    await user.keyboard('{Control>}b{/Control}')

    expect(screen.getByRole('button', { name: /toggle sidebar/i })).toHaveAttribute(
      'aria-expanded',
      'false'
    )
  })

  it('marks the current menu item as active', () => {
    renderSidebar()

    expect(screen.getByText('Home').closest('button')).toHaveAttribute('data-active', 'true')
  })

  it('requires compound parts to be rendered inside the provider', () => {
    expect(() =>
      render(
        <ChakraProvider value={defaultSystem}>
          <Sidebar.Trigger />
        </ChakraProvider>
      )
    ).toThrow('useSidebar must be used within Sidebar.Provider')
  })
})
