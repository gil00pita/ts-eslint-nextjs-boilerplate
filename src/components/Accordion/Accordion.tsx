import {
  Box,
  type BoxProps,
  Accordion as ChakraAccordion,
  AccordionItem as ChakraAccordionItem,
  AccordionItemContent as ChakraAccordionItemContent,
  AccordionItemContentProps as ChakraAccordionItemContentProps,
  AccordionItemProps as ChakraAccordionItemProps,
  AccordionItemTrigger as ChakraAccordionItemTrigger,
  AccordionItemTriggerProps as ChakraAccordionItemTriggerProps,
  AccordionRootProps as ChakraAccordionRootProps,
  Stack,
  type StackProps,
  VStack,
} from '@chakra-ui/react'
import {
  type ComponentProps,
  createContext,
  forwardRef,
  type MouseEvent,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { Link } from '@/components/Link'
import { Text } from '@/components/Text'
import { pxToRem } from '@/utils'

type AccordionValueChangeDetails = { value: string[] }

type AccordionContextValue = {
  value: string[]
  multiple: boolean
  onValueChange: (details: AccordionValueChangeDetails) => void
  itemValues: string[]
  registerItemValue: (value: string) => () => void
}

const AccordionContext = createContext<AccordionContextValue | null>(null)

function useAccordionContext(componentName: string) {
  const context = useContext(AccordionContext)

  if (!context) {
    throw new Error(`${componentName} must be used within Accordion.Root`)
  }

  return context
}

export interface AccordionProps
  extends
    Omit<BoxProps, 'children' | 'defaultValue' | 'onValueChange' | 'value'>,
    Pick<ChakraAccordionRootProps, 'defaultValue' | 'multiple' | 'onValueChange' | 'value'> {
  children: ReactNode
}

const AccordionRoot = forwardRef<HTMLDivElement, AccordionProps>(function AccordionRoot(
  { children, defaultValue, multiple = true, onValueChange, value, ...props },
  ref
) {
  const [internalValue, setInternalValue] = useState<string[]>(defaultValue ?? [])
  const [itemValues, setItemValues] = useState<string[]>([])
  const currentValue = value ?? internalValue

  const handleValueChange = useCallback(
    (details: AccordionValueChangeDetails) => {
      if (value === undefined) {
        setInternalValue(details.value)
      }

      onValueChange?.(details)
    },
    [onValueChange, value]
  )

  const registerItemValue = useCallback((itemValue: string) => {
    setItemValues((currentValues) =>
      currentValues.includes(itemValue) ? currentValues : [...currentValues, itemValue]
    )

    return () => {
      setItemValues((currentValues) => currentValues.filter((value) => value !== itemValue))
    }
  }, [])

  const contextValue = useMemo<AccordionContextValue>(
    () => ({
      itemValues,
      multiple,
      onValueChange: handleValueChange,
      registerItemValue,
      value: currentValue,
    }),
    [currentValue, handleValueChange, itemValues, multiple, registerItemValue]
  )

  return (
    <AccordionContext.Provider value={contextValue}>
      <Box
        css={{
          h2: { fontSize: pxToRem(19), fontWeight: 700, lineHeight: '1.3', margin: 0 },
        }}
        fontSize={pxToRem(16)}
        ref={ref}
        width="100%"
        {...props}
      >
        {children}
      </Box>
    </AccordionContext.Provider>
  )
})

AccordionRoot.displayName = 'Accordion'

export interface AccordionActionsProps extends StackProps {
  children: ReactNode
}

const AccordionActions = forwardRef<HTMLDivElement, AccordionActionsProps>(
  function AccordionActions({ children, ...props }, ref) {
    return (
      <Stack
        borderBottom="1px solid"
        borderColor="border.emphasized"
        direction="row"
        justify="flex-start"
        pb={pxToRem(14)}
        ref={ref}
        {...props}
      >
        {children}
      </Stack>
    )
  }
)

AccordionActions.displayName = 'AccordionActions'

export interface AccordionToggleAllProps extends Omit<
  ComponentProps<typeof Link>,
  'children' | 'href' | 'onClick'
> {
  openLabel?: ReactNode
  closeLabel?: ReactNode
  href?: string
}

const AccordionToggleAll = forwardRef<HTMLAnchorElement, AccordionToggleAllProps>(
  function AccordionToggleAll(
    { closeLabel = 'Hide all sections', href = '#', openLabel = 'Show all sections', ...props },
    ref
  ) {
    const { itemValues, onValueChange, value } = useAccordionContext('Accordion.ToggleAll')
    const allOpen =
      itemValues.length > 0 && itemValues.every((itemValue) => value.includes(itemValue))

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      onValueChange({ value: allOpen ? [] : itemValues })
    }

    return (
      <Link
        _dark={{
          _focus: {
            '& .chevron-text': {
              borderColor: 'common.black',
              color: 'common.black',
            },
          },
          _hover: {
            '& .chevron': {
              borderColor: 'primary.200',
              color: 'primary.600',
            },
            '& .chevron-text': {
              color: 'primary.200',
            },
            '& .chevron:after': {
              borderColor: 'primary.200',
              color: 'primary.200',
            },
          },
          '& .chevron-text': {
            color: 'primary.300',
          },
        }}
        _focus={{
          bgColor: 'yellow.500',
          color: 'fg',
          outline: 0,
        }}
        _hover={{
          _focus: {
            bgColor: 'yellow.500',
            color: 'fg',
          },
          bgColor: 'bg.muted',
        }}
        css={{
          '& .chevron': {
            bgColor: 'transparent',
            borderColor: 'currentColor',
            color: 'currentColor',
            textDecoration: 'underline',
            textDecorationThickness: 'max(3px, 0.1875rem)',
          },
          '& .chevron-text': {
            color: 'currentColor',
            textDecoration: 'underline',
            textDecorationThickness: 'max(3px, 0.1875rem)',
          },
          '& .chevron:after': {
            borderColor: 'currentColor',
            color: 'currentColor',
          },
        }}
        fontSize="sm"
        href={href}
        onClick={handleClick}
        py={pxToRem(5)}
        ref={ref}
        textDecoration="underline"
        {...props}
      >
        <Box
          _after={{
            borderRight: `${pxToRem(2)} solid`,
            borderTop: `${pxToRem(2)} solid`,
            bottom: pxToRem(5),
            boxSizing: 'border-box',
            color: 'primary.500',
            content: '""',
            display: 'block',
            height: pxToRem(6),
            left: pxToRem(6),
            position: 'absolute',
            transform: 'rotate(-45deg)',
            width: pxToRem(6),
          }}
          _dark={{
            _after: {
              borderColor: 'primary.300',
              color: 'primary.300',
            },
            borderColor: 'primary.300',
            color: 'primary.300',
          }}
          as="span"
          border="1px solid"
          borderColor="primary.500"
          borderRadius="50%"
          boxSizing="border-box"
          className="chevron"
          display="inline-block"
          height={pxToRem(20)}
          position="relative"
          transform={allOpen ? 'rotate(0deg)' : 'rotate(180deg)'}
          transition="transform 0.2s ease-in-out"
          verticalAlign="middle"
          width={pxToRem(20)}
        />
        <Text className="chevron-text" color="currentColor" fontSize={19}>
          {allOpen ? closeLabel : openLabel}
        </Text>
      </Link>
    )
  }
)

AccordionToggleAll.displayName = 'AccordionToggleAll'

export interface AccordionItemsProps {
  children: ReactNode
}

const AccordionItems = forwardRef<HTMLDivElement, AccordionItemsProps>(function AccordionItems(
  { children },
  ref
) {
  const { multiple, onValueChange, value } = useAccordionContext('Accordion.Items')

  return (
    <ChakraAccordion.Root
      fontSize={pxToRem(16)}
      lineHeight="1.25"
      multiple={multiple}
      onValueChange={onValueChange}
      ref={ref}
      value={value}
    >
      {children}
    </ChakraAccordion.Root>
  )
})

AccordionItems.displayName = 'AccordionItems'

export interface AccordionItemProps extends ChakraAccordionItemProps {
  children: ReactNode
}

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(function AccordionItem(
  { children, value, ...props },
  ref
) {
  const { registerItemValue } = useAccordionContext('Accordion.Item')

  useEffect(() => registerItemValue(value), [registerItemValue, value])

  return (
    <ChakraAccordionItem
      _first={{
        borderTop: 'none',
      }}
      border="none"
      borderTop="1px solid"
      borderTopColor="border"
      ref={ref}
      value={value}
      {...props}
    >
      {children}
    </ChakraAccordionItem>
  )
})

AccordionItem.displayName = 'AccordionItem'

export interface AccordionTriggerProps extends ChakraAccordionItemTriggerProps {
  children: ReactNode
}

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  function AccordionTrigger(props, ref) {
    return (
      <ChakraAccordionItemTrigger
        _dark={{
          _focus: {
            _hover: {
              '& .chevron': {
                bgColor: 'transparent',
                borderColor: 'common.black',
                color: 'common.black',
              },
              '& .chevron-text': { color: 'common.black' },
              '& .chevron:after': { borderColor: 'common.black' },
              color: 'common.black',
            },
            '& .chevron': {
              bgColor: 'transparent',
              borderColor: 'common.black',
              color: 'common.black',
            },
            '& .chevron-text': { color: 'common.black' },
            '& .chevron:after': { borderColor: 'common.black' },
            color: 'common.black',
          },
          _hover: {
            '& .chevron': {
              bgColor: 'transparent',
              borderColor: 'primary.200',
              color: 'primary.200',
            },
            '& .chevron-text': { color: 'primary.200' },
            '& .chevron:after': { borderColor: 'primary.200' },
            color: 'primary.300',
          },
        }}
        _focus={{
          _hover: {
            '& .chevron': {
              bgColor: 'transparent',
              borderColor: 'common.black',
              color: 'common.black',
            },
            '& .chevron-text': { color: 'common.black' },
            '& .chevron:after': { borderColor: 'common.black' },
          },
          '& .chevron': {
            bgColor: 'transparent',
            borderColor: 'common.black',
            color: 'common.black',
          },
          '& .chevron:after': { borderColor: 'common.black' },
          '& .trigger-title, & .chevron-container, & .chevron-text': {
            bgColor: 'yellow.500',
            borderColor: 'yellow.500',
            color: 'common.black',
            textDecoration: 'underline',
            textDecorationThickness: 'max(3px, 0.1875rem)',
          },
          outline: '0px solid',
        }}
        _hover={{
          '& .chevron': {
            bgColor: 'transparent',
            borderColor: 'primary.300',
            color: 'primary.300',
          },
          '& .chevron-text': { color: 'primary.300' },
          '& .chevron:after': { borderColor: 'primary.300' },
          bg: 'bg.muted',
          color: 'primary.500',
        }}
        _open={{
          bg: 'transparent',
        }}
        border="none"
        color="fg"
        css={{
          '& .trigger-title': {
            fontSize: pxToRem(24),
          },
        }}
        fontSize="19px"
        fontWeight="bold"
        lineHeight="1.31579"
        pb={pxToRem(20)}
        pt={pxToRem(10)}
        px={0}
        ref={ref}
        textAlign="left"
        transition=" background-color 0.1s ease"
        {...props}
      >
        <VStack alignItems="flex-start" gap={2} justifyContent="flex-start" w="100%">
          <Box as="span" className="trigger-title" color="fg" flex="1" mr={2}>
            {props.children}
          </Box>
          <Box
            alignItems="center"
            className="chevron-container"
            display="inline-flex"
            gap={pxToRem(5)}
            mb={pxToRem(13)}
          >
            <Box
              _after={{
                borderColor: 'primary.500',
                borderRight: `${pxToRem(2)} solid`,
                borderTop: `${pxToRem(2)} solid`,
                bottom: pxToRem(5),
                boxSizing: 'border-box',
                color: 'primary.500',
                content: '""',
                display: 'block',
                height: pxToRem(6),
                left: pxToRem(6),
                position: 'absolute',
                transform: 'rotate(-45deg)',
                width: pxToRem(6),
              }}
              _dark={{
                _after: {
                  borderColor: 'primary.300',
                  color: 'primary.300',
                },
                borderColor: 'primary.300',
              }}
              as="span"
              border="1px solid"
              borderColor="primary.500"
              borderRadius="50%"
              boxSizing="border-box"
              className="chevron"
              css={{
                "[data-state='open'] &": {
                  transform: 'rotate(0deg)',
                },
              }}
              display="inline-block"
              height={pxToRem(20)}
              position="relative"
              transform="rotate(180deg)"
              transition="transform 0.2s ease-in-out"
              verticalAlign="middle"
              width={pxToRem(20)}
            />
            <Text
              _dark={{
                color: 'primary.300',
              }}
              className="chevron-text"
              color="primary.500"
              css={{
                "[data-state='closed'] &": {
                  display: 'inherit',
                },
                "[data-state='open'] &": {
                  display: 'none',
                },
              }}
              fontSize={19}
            >
              Show
            </Text>
            <Text
              _dark={{
                color: 'primary.300',
              }}
              className="chevron-text"
              color="primary.500"
              css={{
                "[data-state='closed'] &": {
                  display: 'none',
                },
                "[data-state='open'] &": {
                  display: 'inherit',
                },
              }}
              fontSize={19}
            >
              Hide
            </Text>
          </Box>
        </VStack>
      </ChakraAccordionItemTrigger>
    )
  }
)

AccordionTrigger.displayName = 'AccordionTrigger'

export interface AccordionContentProps extends ChakraAccordionItemContentProps {
  children: ReactNode
}

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  function AccordionContent(props, ref) {
    return (
      <ChakraAccordionItemContent
        color="fg"
        fontSize={pxToRem(19)}
        lineHeight="1.5"
        pb={pxToRem(50)}
        pt={pxToRem(15)}
        px={0}
        ref={ref}
        {...props}
      />
    )
  }
)

AccordionContent.displayName = 'AccordionContent'

type AccordionCompound = typeof AccordionRoot & {
  Root: typeof AccordionRoot
  Actions: typeof AccordionActions
  ToggleAll: typeof AccordionToggleAll
  Items: typeof AccordionItems
  Item: typeof AccordionItem
  Trigger: typeof AccordionTrigger
  Content: typeof AccordionContent
}

const Accordion = Object.assign(AccordionRoot, {
  Actions: AccordionActions,
  Content: AccordionContent,
  Item: AccordionItem,
  Items: AccordionItems,
  Root: AccordionRoot,
  ToggleAll: AccordionToggleAll,
  Trigger: AccordionTrigger,
}) as AccordionCompound

export {
  Accordion,
  AccordionActions,
  AccordionContent,
  AccordionItem,
  AccordionItems,
  AccordionToggleAll,
  AccordionTrigger,
}
