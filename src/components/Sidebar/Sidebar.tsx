'use client'

import {
  Box,
  type BoxProps,
  chakra,
  Drawer,
  Field,
  Flex,
  type FlexProps,
  type HTMLChakraProps,
  IconButton,
  type IconButtonProps,
  Input,
  type InputProps,
  Portal,
  Separator,
  type SeparatorProps,
  Skeleton,
  Stack,
  type StackProps,
  Tooltip,
  useBreakpointValue,
} from '@chakra-ui/react'
import {
  createContext,
  forwardRef,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { LuChevronLeft, LuChevronRight, LuMenu } from 'react-icons/lu'

const SIDEBAR_COOKIE_NAME = 'sidebar:state'
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = '15rem'
const SIDEBAR_WIDTH_MOBILE = '18rem'
const SIDEBAR_WIDTH_ICON = '4rem'
const SIDEBAR_KEYBOARD_SHORTCUT = 'b'

export type SidebarState = 'collapsed' | 'expanded'

type SetOpen = (value: boolean | ((current: boolean) => boolean)) => void

export interface SidebarContextValue {
  state: SidebarState
  open: boolean
  setOpen: SetOpen
  openMobile: boolean
  setOpenMobile: SetOpen
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = createContext<SidebarContextValue | null>(null)

export function useSidebar() {
  const context = useContext(SidebarContext)

  if (!context) {
    throw new Error('useSidebar must be used within Sidebar.Provider')
  }

  return context
}

export interface SidebarProviderProps extends FlexProps {
  defaultOpen?: boolean
  mobile?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const SidebarProvider = forwardRef<HTMLDivElement, SidebarProviderProps>(function SidebarProvider(
  { children, defaultOpen = true, mobile, onOpenChange, open: openProp, ...props },
  ref
) {
  const responsiveMobile = useBreakpointValue({ base: true, lg: false }, { ssr: false }) ?? false
  const isMobile = mobile ?? responsiveMobile
  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  const [openMobile, setOpenMobileState] = useState(false)
  const open = openProp ?? internalOpen

  const setOpen = useCallback<SetOpen>(
    (value) => {
      const nextOpen = typeof value === 'function' ? value(open) : value

      if (openProp === undefined) {
        setInternalOpen(nextOpen)
      }

      onOpenChange?.(nextOpen)
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${nextOpen}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [onOpenChange, open, openProp]
  )

  const setOpenMobile = useCallback<SetOpen>((value) => {
    setOpenMobileState((current) => (typeof value === 'function' ? value(current) : value))
  }, [])

  const toggleSidebar = useCallback(() => {
    if (isMobile) {
      setOpenMobile((current) => !current)
      return
    }

    setOpen((current) => !current)
  }, [isMobile, setOpen, setOpenMobile])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key.toLowerCase() === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggleSidebar])

  const state: SidebarState = open ? 'expanded' : 'collapsed'
  const contextValue = useMemo<SidebarContextValue>(
    () => ({
      isMobile,
      open,
      openMobile,
      setOpen,
      setOpenMobile,
      state,
      toggleSidebar,
    }),
    [isMobile, open, openMobile, setOpen, setOpenMobile, state, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <Flex bg="bg" color="fg" minH="100dvh" ref={ref} width="full" {...props}>
        {children}
      </Flex>
    </SidebarContext.Provider>
  )
})

export interface SidebarRootProps extends BoxProps {
  side?: 'left' | 'right'
  variant?: 'sidebar' | 'floating' | 'inset'
  collapsible?: 'offcanvas' | 'icon' | 'none'
}

const SidebarRoot = forwardRef<HTMLDivElement, SidebarRootProps>(function SidebarRoot(
  { children, collapsible = 'offcanvas', side = 'left', variant = 'sidebar', ...props },
  ref
) {
  const { isMobile, openMobile, setOpenMobile, state } = useSidebar()
  const collapsed = state === 'collapsed'
  const collapsedWidth = collapsible === 'offcanvas' ? '0' : SIDEBAR_WIDTH_ICON
  const width = collapsed ? collapsedWidth : SIDEBAR_WIDTH

  if (collapsible === 'none') {
    return (
      <Box
        bg="bg.panel"
        color="fg"
        display="flex"
        flexDirection="column"
        flexShrink="0"
        h="full"
        ref={ref}
        width={SIDEBAR_WIDTH}
        {...props}
      >
        {children}
      </Box>
    )
  }

  if (isMobile) {
    return (
      <Drawer.Root
        onOpenChange={(details) => setOpenMobile(details.open)}
        open={openMobile}
        placement={side === 'left' ? 'start' : 'end'}
      >
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content bg="bg.panel" color="fg" width={SIDEBAR_WIDTH_MOBILE}>
              <Drawer.Header height="1px" overflow="hidden" position="absolute" width="1px">
                <Drawer.Title>Navigation</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body display="flex" flexDirection="column" p="0">
                <Box
                  data-mobile="true"
                  data-sidebar="sidebar"
                  display="flex"
                  flex="1"
                  flexDirection="column"
                  {...props}
                >
                  {children}
                </Box>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    )
  }

  const isElevated = variant === 'floating' || variant === 'inset'

  return (
    <Box
      color="fg"
      data-collapsible={collapsed ? collapsible : undefined}
      data-side={side}
      data-state={state}
      data-variant={variant}
      display={{ base: 'none', lg: 'block' }}
      flexShrink="0"
      h="100dvh"
      position="relative"
      ref={ref}
      transition="width 0.2s ease"
      width={width}
    >
      <Box
        borderColor="border"
        borderLeftWidth={side === 'right' && !isElevated ? '1px' : undefined}
        borderRightWidth={side === 'left' && !isElevated ? '1px' : undefined}
        bottom="0"
        display="flex"
        flexDirection="column"
        left={
          side === 'left'
            ? collapsed && collapsible === 'offcanvas'
              ? `-${SIDEBAR_WIDTH}`
              : '0'
            : undefined
        }
        p={isElevated ? '2' : '0'}
        position="fixed"
        right={
          side === 'right'
            ? collapsed && collapsible === 'offcanvas'
              ? `-${SIDEBAR_WIDTH}`
              : '0'
            : undefined
        }
        top="0"
        transition="left 0.2s ease, right 0.2s ease, width 0.2s ease"
        width={width === '0' ? SIDEBAR_WIDTH : width}
        zIndex="docked"
      >
        <Box
          bg="bg.panel"
          borderColor="border"
          borderRadius={variant === 'floating' ? 'lg' : '0'}
          borderWidth={variant === 'floating' ? '1px' : '0'}
          data-sidebar="sidebar"
          display="flex"
          flex="1"
          flexDirection="column"
          overflow="hidden"
          shadow={variant === 'floating' ? 'sm' : undefined}
          {...props}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
})

export interface SidebarTriggerProps extends Omit<IconButtonProps, 'children'> {
  icon?: 'chevronLeft' | 'chevronRight' | 'menu'
}

const triggerIcons = {
  chevronLeft: LuChevronLeft,
  chevronRight: LuChevronRight,
  menu: LuMenu,
}

const SidebarTrigger = forwardRef<HTMLButtonElement, SidebarTriggerProps>(function SidebarTrigger(
  { 'aria-label': ariaLabel = 'Toggle sidebar', icon = 'menu', onClick, ...props },
  ref
) {
  const { open, toggleSidebar } = useSidebar()
  const TriggerIcon = triggerIcons[icon]

  return (
    <IconButton
      aria-expanded={open}
      aria-label={ariaLabel}
      data-sidebar="trigger"
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented) toggleSidebar()
      }}
      ref={ref}
      size="sm"
      variant="ghost"
      {...props}
    >
      <TriggerIcon />
    </IconButton>
  )
})

const SidebarRailButton = chakra('button')

export type SidebarRailProps = HTMLChakraProps<'button'>

const SidebarRail = forwardRef<HTMLButtonElement, SidebarRailProps>(function SidebarRail(
  { onClick, ...props },
  ref
) {
  const { state, toggleSidebar } = useSidebar()

  return (
    <SidebarRailButton
      _after={{
        bg: 'transparent',
        bottom: '0',
        content: '""',
        left: '50%',
        position: 'absolute',
        top: '0',
        width: '2px',
      }}
      _hover={{ _after: { bg: 'border.emphasized' } }}
      aria-label="Toggle sidebar"
      cursor={state === 'collapsed' ? 'e-resize' : 'w-resize'}
      data-sidebar="rail"
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented) toggleSidebar()
      }}
      position="absolute"
      ref={ref}
      right="-2"
      top="0"
      width="4"
      zIndex="docked"
      {...props}
    />
  )
})

export type SidebarInsetProps = BoxProps

const SidebarInset = forwardRef<HTMLElement, SidebarInsetProps>(function SidebarInset(props, ref) {
  return (
    <Box
      as="main"
      bg="bg"
      display="flex"
      flex="1"
      flexDirection="column"
      minH="100dvh"
      minW="0"
      position="relative"
      ref={ref}
      {...props}
    />
  )
})

export interface SidebarInputProps extends InputProps {
  label?: ReactNode
}

const SidebarInput = forwardRef<HTMLInputElement, SidebarInputProps>(function SidebarInput(
  { label = 'Search navigation', ...props },
  ref
) {
  return (
    <Field.Root>
      <Field.Label height="1px" overflow="hidden" position="absolute" width="1px">
        {label}
      </Field.Label>
      <Input
        bg="bg"
        data-sidebar="input"
        focusRing="outside"
        h="9"
        ref={ref}
        shadow="none"
        width="full"
        {...props}
      />
    </Field.Root>
  )
})

const SidebarHeader = forwardRef<HTMLDivElement, StackProps>(function SidebarHeader(props, ref) {
  return <Stack data-sidebar="header" gap="2" p="3" ref={ref} {...props} />
})

const SidebarFooter = forwardRef<HTMLDivElement, StackProps>(function SidebarFooter(props, ref) {
  return <Stack data-sidebar="footer" gap="2" mt="auto" p="3" ref={ref} {...props} />
})

const SidebarSeparator = forwardRef<HTMLHRElement, SeparatorProps>(
  function SidebarSeparator(props, ref) {
    return <Separator borderColor="border" data-sidebar="separator" mx="2" ref={ref} {...props} />
  }
)

const SidebarContent = forwardRef<HTMLDivElement, StackProps>(function SidebarContent(props, ref) {
  return (
    <Stack data-sidebar="content" flex="1" gap="3" minH="0" overflowY="auto" ref={ref} {...props} />
  )
})

const SidebarGroup = forwardRef<HTMLDivElement, StackProps>(function SidebarGroup(props, ref) {
  return (
    <Stack
      data-sidebar="group"
      gap="1"
      minW="0"
      p="3"
      position="relative"
      ref={ref}
      width="full"
      {...props}
    />
  )
})

export interface SidebarGroupLabelProps extends FlexProps {
  asChild?: boolean
}

const SidebarGroupLabel = forwardRef<HTMLDivElement, SidebarGroupLabelProps>(
  function SidebarGroupLabel(props, ref) {
    const { state } = useSidebar()

    return (
      <Flex
        align="center"
        color="fg.muted"
        data-sidebar="group-label"
        fontSize="xs"
        fontWeight="medium"
        h={state === 'collapsed' ? '0' : '9'}
        opacity={state === 'collapsed' ? '0' : '1'}
        overflow="hidden"
        px="2.5"
        ref={ref}
        transition="height 0.2s ease, opacity 0.2s ease"
        {...props}
      />
    )
  }
)

export interface SidebarGroupActionProps extends Omit<IconButtonProps, 'children'> {
  children: ReactNode
}

const SidebarGroupAction = forwardRef<HTMLButtonElement, SidebarGroupActionProps>(
  function SidebarGroupAction(props, ref) {
    const { state } = useSidebar()

    if (state === 'collapsed') return null

    return (
      <IconButton
        data-sidebar="group-action"
        position="absolute"
        ref={ref}
        right="3"
        size="2xs"
        top="3.5"
        variant="ghost"
        {...props}
      />
    )
  }
)

const SidebarGroupContent = forwardRef<HTMLDivElement, BoxProps>(
  function SidebarGroupContent(props, ref) {
    return <Box data-sidebar="group-content" fontSize="sm" ref={ref} width="full" {...props} />
  }
)

const SidebarMenuList = chakra('ul')

const SidebarMenu = forwardRef<HTMLUListElement, HTMLChakraProps<'ul'>>(
  function SidebarMenu(props, ref) {
    return (
      <SidebarMenuList
        data-sidebar="menu"
        display="flex"
        flexDirection="column"
        gap="1"
        listStyleType="none"
        minW="0"
        ref={ref}
        width="full"
        {...props}
      />
    )
  }
)

const SidebarMenuListItem = chakra('li')

const SidebarMenuItem = forwardRef<HTMLLIElement, HTMLChakraProps<'li'>>(
  function SidebarMenuItem(props, ref) {
    return <SidebarMenuListItem data-sidebar="menu-item" position="relative" ref={ref} {...props} />
  }
)

const SidebarMenuButtonElement = chakra('button')

export interface SidebarMenuButtonProps extends Omit<
  HTMLChakraProps<'button'>,
  'size' | 'variant'
> {
  active?: boolean
  asChild?: boolean
  size?: 'default' | 'lg' | 'sm'
  tooltip?: ReactNode
  variant?: 'default' | 'outline'
}

const menuButtonHeights = { default: '9', sm: '8', lg: '12' } as const

const SidebarMenuButton = forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  function SidebarMenuButton(
    { active = false, asChild, children, size = 'default', tooltip, variant = 'default', ...props },
    ref
  ) {
    const { isMobile, state } = useSidebar()
    const collapsed = state === 'collapsed'
    const button = (
      <SidebarMenuButtonElement
        _active={{
          bg: active ? 'brand.800' : 'bg.emphasized',
          color: active ? 'brand.contrast' : 'fg',
        }}
        _disabled={{ opacity: 0.5, pointerEvents: 'none' }}
        _focusVisible={{ focusRing: 'outside' }}
        _hover={{
          bg: active ? 'brand.700' : 'bg.muted',
          color: active ? 'brand.contrast' : 'fg',
        }}
        alignItems="center"
        asChild={asChild}
        bg={active ? 'brand.solid' : variant === 'outline' ? 'bg' : 'transparent'}
        borderColor={variant === 'outline' ? 'border' : 'transparent'}
        borderRadius="md"
        borderWidth={variant === 'outline' ? '1px' : '0'}
        color={active ? 'brand.contrast' : 'fg'}
        data-active={active || undefined}
        data-sidebar="menu-button"
        data-size={size}
        display="flex"
        fontSize={size === 'sm' ? 'xs' : 'sm'}
        fontWeight={active ? 'medium' : 'normal'}
        gap="2"
        h={collapsed ? '9' : menuButtonHeights[size]}
        justifyContent={collapsed ? 'center' : 'flex-start'}
        overflow="hidden"
        p="2.5"
        ref={ref}
        textAlign="left"
        transition="width 0.2s ease, height 0.2s ease, padding 0.2s ease"
        whiteSpace="nowrap"
        width={collapsed ? '9' : 'full'}
        {...props}
      >
        {children}
      </SidebarMenuButtonElement>
    )

    if (!tooltip || !collapsed || isMobile) return button

    return (
      <Tooltip.Root openDelay={0} positioning={{ placement: 'right' }}>
        <Tooltip.Trigger asChild>{button}</Tooltip.Trigger>
        <Portal>
          <Tooltip.Positioner>
            <Tooltip.Content>
              {tooltip}
              <Tooltip.Arrow>
                <Tooltip.ArrowTip />
              </Tooltip.Arrow>
            </Tooltip.Content>
          </Tooltip.Positioner>
        </Portal>
      </Tooltip.Root>
    )
  }
)

export interface SidebarMenuActionProps extends Omit<IconButtonProps, 'children'> {
  children: ReactNode
  showOnHover?: boolean
}

const SidebarMenuAction = forwardRef<HTMLButtonElement, SidebarMenuActionProps>(
  function SidebarMenuAction({ showOnHover = false, ...props }, ref) {
    const { state } = useSidebar()

    if (state === 'collapsed') return null

    return (
      <IconButton
        _groupFocusWithin={{ opacity: 1 }}
        _groupHover={{ opacity: 1 }}
        data-sidebar="menu-action"
        opacity={showOnHover ? 0 : 1}
        position="absolute"
        ref={ref}
        right="1"
        size="2xs"
        top="1.5"
        variant="ghost"
        {...props}
      />
    )
  }
)

const SidebarMenuBadge = forwardRef<HTMLDivElement, FlexProps>(
  function SidebarMenuBadge(props, ref) {
    const { state } = useSidebar()

    if (state === 'collapsed') return null

    return (
      <Flex
        align="center"
        data-sidebar="menu-badge"
        fontSize="xs"
        fontVariantNumeric="tabular-nums"
        fontWeight="medium"
        h="5"
        justify="center"
        minW="5"
        pointerEvents="none"
        position="absolute"
        px="1"
        ref={ref}
        right="1"
        top="1.5"
        {...props}
      />
    )
  }
)

export interface SidebarMenuSkeletonProps extends FlexProps {
  showIcon?: boolean
}

const SidebarMenuSkeleton = forwardRef<HTMLDivElement, SidebarMenuSkeletonProps>(
  function SidebarMenuSkeleton({ showIcon = false, ...props }, ref) {
    const { state } = useSidebar()

    return (
      <Flex align="center" data-sidebar="menu-skeleton" gap="2" h="9" px="2.5" ref={ref} {...props}>
        {showIcon && <Skeleton borderRadius="md" boxSize="4" />}
        {state !== 'collapsed' && <Skeleton flex="1" h="4" maxW="80%" />}
      </Flex>
    )
  }
)

const SidebarMenuSub = forwardRef<HTMLUListElement, HTMLChakraProps<'ul'>>(
  function SidebarMenuSub(props, ref) {
    const { state } = useSidebar()

    if (state === 'collapsed') return null

    return (
      <SidebarMenuList
        borderColor="border"
        borderLeftWidth="1px"
        data-sidebar="menu-sub"
        display="flex"
        flexDirection="column"
        gap="1"
        listStyleType="none"
        mx="3.5"
        px="2.5"
        py="0.5"
        ref={ref}
        {...props}
      />
    )
  }
)

const SidebarMenuSubItem = forwardRef<HTMLLIElement, HTMLChakraProps<'li'>>(
  function SidebarMenuSubItem(props, ref) {
    return <SidebarMenuListItem ref={ref} {...props} />
  }
)

const SidebarMenuSubAnchor = chakra('a')

export interface SidebarMenuSubButtonProps extends HTMLChakraProps<'a'> {
  active?: boolean
  asChild?: boolean
  size?: 'md' | 'sm'
}

const SidebarMenuSubButton = forwardRef<HTMLAnchorElement, SidebarMenuSubButtonProps>(
  function SidebarMenuSubButton({ active = false, asChild, size = 'md', ...props }, ref) {
    return (
      <SidebarMenuSubAnchor
        _active={{
          bg: active ? 'brand.800' : 'bg.emphasized',
          color: active ? 'brand.contrast' : 'fg',
        }}
        _focusVisible={{ focusRing: 'outside' }}
        _hover={{
          bg: active ? 'brand.700' : 'bg.muted',
          color: active ? 'brand.contrast' : 'fg',
        }}
        alignItems="center"
        asChild={asChild}
        bg={active ? 'brand.solid' : 'transparent'}
        borderRadius="md"
        color={active ? 'brand.contrast' : 'fg'}
        data-active={active || undefined}
        data-sidebar="menu-sub-button"
        display="flex"
        fontSize={size === 'sm' ? 'xs' : 'sm'}
        gap="2"
        h="7"
        minW="0"
        overflow="hidden"
        px="2.5"
        ref={ref}
        textDecoration="none"
        {...props}
      />
    )
  }
)

export const Sidebar = {
  Content: SidebarContent,
  Footer: SidebarFooter,
  Group: SidebarGroup,
  GroupAction: SidebarGroupAction,
  GroupContent: SidebarGroupContent,
  GroupLabel: SidebarGroupLabel,
  Header: SidebarHeader,
  Input: SidebarInput,
  Inset: SidebarInset,
  Menu: SidebarMenu,
  MenuAction: SidebarMenuAction,
  MenuBadge: SidebarMenuBadge,
  MenuButton: SidebarMenuButton,
  MenuItem: SidebarMenuItem,
  MenuSkeleton: SidebarMenuSkeleton,
  MenuSub: SidebarMenuSub,
  MenuSubButton: SidebarMenuSubButton,
  MenuSubItem: SidebarMenuSubItem,
  Provider: SidebarProvider,
  Rail: SidebarRail,
  Root: SidebarRoot,
  Separator: SidebarSeparator,
  Trigger: SidebarTrigger,
}

export {
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarRoot,
  SidebarSeparator,
  SidebarTrigger,
}
