/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import type { StoryObj } from '@storybook/react-vite'
import type { ReactNode } from 'react'
import type { ArgTypes } from 'storybook/internal/types'

import * as Chakra from '@chakra-ui/react'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import {
  LuBell,
  LuCalendar,
  LuCheck,
  LuChevronLeft,
  LuChevronRight,
  LuCopy,
  LuDownload,
  LuFile,
  LuFolder,
  LuGripHorizontal,
  LuInfo,
  LuMinus,
  LuSearch,
  LuSettings,
  LuShare,
  LuSquare,
  LuStar,
  LuTrash2,
  LuUpload,
  LuX,
} from 'react-icons/lu'
import { expect, fn, userEvent, within } from 'storybook/test'

import { ColorModeButton, useColorMode } from '@/ui/color-mode'
import { PasswordInput } from '@/ui/password-input'
import { Prose } from '@/ui/prose'
import { RichTextEditor } from '@/ui/rich-text-editor'
import { toaster, Toaster } from '@/ui/toaster'
import { ToggleTip } from '@/ui/toggle-tip'
import { Tooltip } from '@/ui/tooltip'
import { DecorativeBox } from '@/utils/storybook/decorative-box'

import {
  checkedArg,
  childrenArg,
  colorPaletteArg,
  disabledArg,
  hiddenPropArgTypes,
  inputVariantArg,
  invalidArg,
  labelArg,
  loadingArg,
  orientationArg,
  placeholderArg,
  placementArg,
  readOnlyArg,
  requiredArg,
  roundedArg,
  sizeArg,
  statusArg,
  surfaceVariantArg,
  variantArg,
} from './argTypes'

const C = Chakra as any
const AnyPasswordInput = PasswordInput as any

type PlaygroundArgs = {
  children?: string
  label?: string
  placeholder?: string
  colorPalette?: string
  size?: string
  variant?: string
  rounded?: string
  orientation?: 'horizontal' | 'vertical'
  placement?: string
  status?: string
  disabled?: boolean
  invalid?: boolean
  readOnly?: boolean
  required?: boolean
  checked?: boolean
  loading?: boolean
  value?: string | number
  count?: number
}

type ControlKey = keyof typeof playgroundArgTypes
type PlaygroundRenderer = (args: PlaygroundArgs) => ReactNode
type PlayContext = { canvasElement: HTMLElement; args: PlaygroundArgs }

type PlaygroundSpec = {
  args?: PlaygroundArgs
  controls?: readonly ControlKey[]
  argTypes?: ArgTypes
  render: PlaygroundRenderer
  play?: (context: PlayContext) => Promise<void>
}

const playgroundArgTypes = {
  checked: checkedArg(),
  children: childrenArg(),
  colorPalette: colorPaletteArg(),
  count: {
    control: { max: 20, min: 1, step: 1, type: 'number' },
    description: 'Number of items rendered by the component.',
  },
  disabled: disabledArg(),
  inputVariant: inputVariantArg(),
  invalid: invalidArg(),
  label: labelArg(),
  loading: loadingArg(),
  orientation: orientationArg(),
  placeholder: placeholderArg(),
  placement: placementArg(),
  readOnly: readOnlyArg(),
  required: requiredArg(),
  rounded: roundedArg(),
  size: sizeArg(),
  status: statusArg(),
  surfaceVariant: surfaceVariantArg(),
  value: {
    control: { type: 'number' },
    description: 'Numeric value used by value-based components.',
  },
  variant: variantArg(),
} satisfies ArgTypes

const baseArgs = {
  checked: false,
  children: 'Preview',
  colorPalette: 'brand',
  count: 4,
  disabled: false,
  invalid: false,
  label: 'Storybook playground',
  loading: false,
  orientation: 'horizontal',
  placeholder: 'Type here',
  placement: 'bottom',
  readOnly: false,
  required: false,
  rounded: 'md',
  size: 'md',
  status: 'info',
  value: 45,
  variant: 'solid',
} satisfies PlaygroundArgs

const appearanceControls = [
  'children',
  'colorPalette',
  'size',
  'variant',
  'rounded',
  'disabled',
  'loading',
] as const

const inputControls = [
  'label',
  'placeholder',
  'colorPalette',
  'size',
  'variant',
  'disabled',
  'invalid',
  'readOnly',
  'required',
] as const

const overlayControls = [
  'label',
  'children',
  'colorPalette',
  'size',
  'variant',
  'placement',
  'disabled',
] as const

const stateControls = [
  'label',
  'children',
  'colorPalette',
  'size',
  'variant',
  'checked',
  'disabled',
  'invalid',
] as const

const buttonClick = fn()

const portalPlay = async ({ args, canvasElement }: PlayContext) => {
  const canvas = within(canvasElement)
  await userEvent.click(canvas.getByRole('button', { name: args.label ?? /open/i }))
  await expect(
    await within(canvasElement.ownerDocument.body).findByText(args.children ?? 'Preview')
  ).toBeInTheDocument()
}

const smokePlay = async ({ canvasElement }: PlayContext) => {
  await expect(within(canvasElement).getByTestId('storybook-playground')).toBeInTheDocument()
}

const textSmokePlay = async ({ args, canvasElement }: PlayContext) => {
  await expect(
    within(canvasElement).getByText(String(args.children ?? 'Preview'))
  ).toBeInTheDocument()
}

const checkboxPlay = async ({ args, canvasElement }: PlayContext) => {
  const checkbox = within(canvasElement).getByRole('checkbox', { name: args.label })
  await userEvent.click(checkbox)
  await expect(checkbox).toBeChecked()
}

const disclosurePlay = async ({ args, canvasElement }: PlayContext) => {
  const trigger = within(canvasElement).getByRole('button', { name: args.label })
  await expect(trigger).toHaveAttribute('aria-expanded', 'true')
  await userEvent.click(trigger)
  await expect(trigger).toHaveAttribute('aria-expanded', 'false')
}

const inputPlay = async ({ args, canvasElement }: PlayContext) => {
  const input = within(canvasElement).getByLabelText(String(args.label))
  await userEvent.clear(input)
  await userEvent.type(input, 'Edited value')
  await expect(input).toHaveValue('Edited value')
}

const placeholderInputPlay = async ({ args, canvasElement }: PlayContext) => {
  const input = within(canvasElement).getByPlaceholderText(String(args.placeholder))
  await userEvent.clear(input)
  await userEvent.type(input, 'Edited value')
  await expect(input).toHaveValue('Edited value')
}

const comboboxPlay = async ({ args, canvasElement }: PlayContext) => {
  const input = within(canvasElement).getByLabelText(String(args.label))
  await userEvent.type(input, 'Vue')
  const option = await within(canvasElement.ownerDocument.body).findByText('Vue')
  await userEvent.click(option)
  await expect(input).toHaveValue('Vue')
}

const menuPlay = async ({ args, canvasElement }: PlayContext) => {
  await userEvent.click(within(canvasElement).getByRole('button', { name: args.label }))
  await expect(
    await within(canvasElement.ownerDocument.body).findByText('Search')
  ).toBeInTheDocument()
}

const hoverPortalPlay = async ({ args, canvasElement }: PlayContext) => {
  await userEvent.hover(within(canvasElement).getByRole('button', { name: args.label }))
  await expect(
    await within(canvasElement.ownerDocument.body).findByText(String(args.children))
  ).toBeInTheDocument()
}

const nativeSelectPlay = async ({ args, canvasElement }: PlayContext) => {
  const select = within(canvasElement).getByRole('combobox', { name: args.label })
  await userEvent.selectOptions(select, 'vue')
  await expect(select).toHaveValue('vue')
}

const numberInputPlay = async ({ canvasElement }: PlayContext) => {
  const input = within(canvasElement).getByRole('spinbutton')
  await userEvent.clear(input)
  await userEvent.type(input, '12')
  await expect(input).toHaveValue('12')
}

const paginationPlay = async ({ canvasElement }: PlayContext) => {
  const canvas = within(canvasElement)
  await userEvent.click(canvas.getByRole('button', { name: 'Next page' }))
  await expect(canvas.getByRole('button', { name: 'Page 3' })).toBeInTheDocument()
}

const pinInputPlay = async ({ canvasElement }: PlayContext) => {
  const inputs = within(canvasElement).getAllByRole('textbox')
  await userEvent.clear(inputs[0])
  await userEvent.type(inputs[0], '4')
  await expect(inputs[0]).toHaveValue('4')
}

const radioPlay = async ({ args, canvasElement }: PlayContext) => {
  const radio = within(canvasElement).getByRole('radio', { name: args.children })
  await userEvent.click(radio)
  await expect(radio).toBeChecked()
}

const selectPlay = async ({ args, canvasElement }: PlayContext) => {
  const trigger = within(canvasElement).getByRole('button', { name: args.placeholder })
  await userEvent.click(trigger)
  const option = await within(canvasElement.ownerDocument.body).findByText('Vue')
  await userEvent.click(option)
  await expect(within(canvasElement).getByText('Vue')).toBeInTheDocument()
}

const sliderPlay = async ({ canvasElement }: PlayContext) => {
  const slider = within(canvasElement).getByRole('slider')
  await expect(slider).toHaveAttribute('aria-valuenow', '45')
  slider.focus()
  await userEvent.keyboard('{ArrowRight}')
  await expect(slider).not.toHaveAttribute('aria-valuenow', '45')
}

const stepsPlay = async ({ canvasElement }: PlayContext) => {
  const review = within(canvasElement).getByRole('button', { name: /review/i })
  await userEvent.click(review)
  await expect(review).toBeInTheDocument()
}

const switchPlay = async ({ args, canvasElement }: PlayContext) => {
  const canvas = within(canvasElement)
  const control =
    canvas.queryByRole('switch', { name: args.label }) ??
    canvas.getByRole('checkbox', { name: args.label })
  await userEvent.click(control)
  await expect(control).toBeChecked()
}

const tabsPlay = async ({ args, canvasElement }: PlayContext) => {
  const canvas = within(canvasElement)
  await userEvent.click(canvas.getByRole('tab', { name: 'Details' }))
  await expect(canvas.getByText(String(args.children))).toBeInTheDocument()
}

const tagsInputPlay = async ({ args, canvasElement }: PlayContext) => {
  const input = within(canvasElement).getByPlaceholderText(String(args.placeholder))
  await userEvent.type(input, 'Vue{enter}')
  await expect(within(canvasElement).getByText('Vue')).toBeInTheDocument()
}

const toastPlay = async ({ args, canvasElement }: PlayContext) => {
  await userEvent.click(within(canvasElement).getByRole('button', { name: 'Show Toast' }))
  await expect(
    await within(canvasElement.ownerDocument.body).findByText(String(args.label))
  ).toBeInTheDocument()
}

const togglePlay = async ({ args, canvasElement }: PlayContext) => {
  const button = within(canvasElement).getByRole('button', { name: args.label })
  await userEvent.click(button)
  await expect(button).toHaveAttribute('aria-pressed', 'true')
}

function pickArgTypes(keys: readonly ControlKey[], extra?: ArgTypes): ArgTypes {
  return {
    ...Object.fromEntries(keys.map((key) => [key, playgroundArgTypes[key]])),
    ...hiddenPropArgTypes,
    ...extra,
  }
}

function compactProps<T extends Record<string, unknown>>(props: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(props).filter(
      ([, value]) => value !== undefined && value !== null && value !== ''
    )
  ) as Partial<T>
}

function recipeProps(args: PlaygroundArgs, includeVariant = true) {
  return compactProps({
    colorPalette: args.colorPalette,
    disabled: args.disabled,
    invalid: args.invalid,
    readOnly: args.readOnly,
    required: args.required,
    size: args.size,
    variant: includeVariant ? args.variant : undefined,
  })
}

function roundedProps(args: PlaygroundArgs) {
  return args.rounded && args.rounded !== 'none' ? { rounded: args.rounded } : {}
}

function PlaygroundSurface({
  children,
  maxW = '520px',
}: {
  children: React.ReactNode
  maxW?: string
}) {
  return (
    <C.Box data-testid="storybook-playground" maxW={maxW} minW="260px" w="full">
      {children}
    </C.Box>
  )
}

function renderWithSurface(render: PlaygroundRenderer): PlaygroundRenderer {
  return (args) => <PlaygroundSurface>{render(args)}</PlaygroundSurface>
}

function renderDirect(componentName: string): PlaygroundRenderer {
  return (args) => {
    const Component = C[componentName] ?? C.Box
    return (
      <Component {...recipeProps(args)} {...roundedProps(args)}>
        {args.children}
      </Component>
    )
  }
}

function renderText(componentName: string): PlaygroundRenderer {
  return (args) => {
    const Component = C[componentName] ?? C.Text
    return (
      <Component {...recipeProps(args)} colorPalette={args.colorPalette}>
        {args.children}
      </Component>
    )
  }
}

function ActionBarPlayground(args: PlaygroundArgs) {
  return (
    <>
      <C.Checkbox.Root defaultChecked={args.checked}>
        <C.Checkbox.HiddenInput />
        <C.Checkbox.Control />
        <C.Checkbox.Label>{args.label}</C.Checkbox.Label>
      </C.Checkbox.Root>
      <C.ActionBar.Root open>
        <C.Portal>
          <C.ActionBar.Positioner>
            <C.ActionBar.Content>
              <C.ActionBar.SelectionTrigger>2 selected</C.ActionBar.SelectionTrigger>
              <C.ActionBar.Separator />
              <C.Button size="sm" variant="outline">
                <LuTrash2 /> Delete
              </C.Button>
              <C.Button size="sm" variant="outline">
                <LuShare /> Share
              </C.Button>
            </C.ActionBar.Content>
          </C.ActionBar.Positioner>
        </C.Portal>
      </C.ActionBar.Root>
    </>
  )
}

function AccordionPlayground(args: PlaygroundArgs) {
  return (
    <C.Accordion.Root collapsible defaultValue={['overview']} {...recipeProps(args)}>
      <C.Accordion.Item value="overview">
        <C.Accordion.ItemTrigger>
          <C.Span flex="1">{args.label}</C.Span>
          <C.Accordion.ItemIndicator />
        </C.Accordion.ItemTrigger>
        <C.Accordion.ItemContent>
          <C.Accordion.ItemBody>{args.children}</C.Accordion.ItemBody>
        </C.Accordion.ItemContent>
      </C.Accordion.Item>
    </C.Accordion.Root>
  )
}

function AlertPlayground(args: PlaygroundArgs) {
  return (
    <C.Alert.Root
      colorPalette={args.colorPalette}
      status={args.status as any}
      variant={args.variant as any}
    >
      <C.Alert.Indicator />
      <C.Alert.Content>
        <C.Alert.Title>{args.label}</C.Alert.Title>
        <C.Alert.Description>{args.children}</C.Alert.Description>
      </C.Alert.Content>
    </C.Alert.Root>
  )
}

function AvatarPlayground(args: PlaygroundArgs) {
  return (
    <C.Avatar.Root {...recipeProps(args, false)}>
      <C.Avatar.Fallback name={args.label} />
      <C.Avatar.Image src="https://i.pravatar.cc/120?img=13" />
    </C.Avatar.Root>
  )
}

function BlockquotePlayground(args: PlaygroundArgs) {
  return (
    <C.Blockquote.Root colorPalette={args.colorPalette} variant={args.variant as any}>
      <C.Blockquote.Icon />
      <C.Blockquote.Content>{args.children}</C.Blockquote.Content>
      <C.Blockquote.Caption>{args.label}</C.Blockquote.Caption>
    </C.Blockquote.Root>
  )
}

function BreadcrumbPlayground(args: PlaygroundArgs) {
  return (
    <C.Breadcrumb.Root {...recipeProps(args, false)}>
      <C.Breadcrumb.List>
        <C.Breadcrumb.Item>
          <C.Breadcrumb.Link href="#">Components</C.Breadcrumb.Link>
        </C.Breadcrumb.Item>
        <C.Breadcrumb.Separator />
        <C.Breadcrumb.Item>
          <C.Breadcrumb.CurrentLink>{args.label}</C.Breadcrumb.CurrentLink>
        </C.Breadcrumb.Item>
      </C.Breadcrumb.List>
    </C.Breadcrumb.Root>
  )
}

function ButtonPlayground(args: PlaygroundArgs) {
  return (
    <C.Button
      {...recipeProps(args)}
      {...roundedProps(args)}
      loading={args.loading}
      onClick={buttonClick}
    >
      {args.children}
      <HiArrowRight />
    </C.Button>
  )
}

function CardPlayground(args: PlaygroundArgs) {
  return (
    <C.Card.Root {...recipeProps(args)}>
      <C.Card.Header>
        <C.Heading size="md">{args.label}</C.Heading>
      </C.Card.Header>
      <C.Card.Body>
        <C.Text>{args.children}</C.Text>
      </C.Card.Body>
      <C.Card.Footer>
        <C.Button colorPalette={args.colorPalette} size="sm">
          Continue
        </C.Button>
      </C.Card.Footer>
    </C.Card.Root>
  )
}

function CarouselPlayground(args: PlaygroundArgs) {
  const count = Number(args.count) || 4
  return (
    <C.Carousel.Root maxW="md" slideCount={count}>
      <C.Carousel.ItemGroup>
        {Array.from({ length: count }).map((_, index) => (
          <C.Carousel.Item index={index} key={index}>
            <DecorativeBox fontSize="2rem" h="220px" rounded={args.rounded}>
              {index + 1}
            </DecorativeBox>
          </C.Carousel.Item>
        ))}
      </C.Carousel.ItemGroup>
      <C.Carousel.Control gap="3" justifyContent="center">
        <C.Carousel.PrevTrigger aria-label="Previous slide">
          <LuChevronLeft />
        </C.Carousel.PrevTrigger>
        <C.Carousel.Indicators />
        <C.Carousel.NextTrigger aria-label="Next slide">
          <LuChevronRight />
        </C.Carousel.NextTrigger>
      </C.Carousel.Control>
    </C.Carousel.Root>
  )
}

function CheckboxPlayground(args: PlaygroundArgs) {
  return (
    <C.Checkbox.Root defaultChecked={args.checked} {...recipeProps(args)}>
      <C.Checkbox.HiddenInput />
      <C.Checkbox.Control />
      <C.Checkbox.Label>{args.label}</C.Checkbox.Label>
    </C.Checkbox.Root>
  )
}

function CheckboxCardPlayground(args: PlaygroundArgs) {
  return (
    <C.CheckboxCard.Root defaultChecked={args.checked} {...recipeProps(args)}>
      <C.CheckboxCard.HiddenInput />
      <C.CheckboxCard.Control>
        <C.CheckboxCard.Content>
          <C.CheckboxCard.Label>{args.label}</C.CheckboxCard.Label>
          <C.CheckboxCard.Description>{args.children}</C.CheckboxCard.Description>
        </C.CheckboxCard.Content>
        <C.CheckboxCard.Indicator />
      </C.CheckboxCard.Control>
    </C.CheckboxCard.Root>
  )
}

function ClipboardPlayground(args: PlaygroundArgs) {
  return (
    <C.Clipboard.Root value={args.children}>
      <C.Clipboard.Trigger asChild>
        <C.Button size={args.size as any} variant={args.variant as any}>
          <LuCopy /> {args.label}
        </C.Button>
      </C.Clipboard.Trigger>
      <C.Clipboard.Indicator copied={<LuCheck />} />
    </C.Clipboard.Root>
  )
}

function CodeBlockPlayground(args: PlaygroundArgs) {
  return (
    <C.CodeBlock.Root code={`const label = "${args.children}"`} language="tsx">
      <C.CodeBlock.Content>
        <C.CodeBlock.Code>
          <C.CodeBlock.CodeText />
        </C.CodeBlock.Code>
      </C.CodeBlock.Content>
    </C.CodeBlock.Root>
  )
}

function CollapsiblePlayground(args: PlaygroundArgs) {
  return (
    <C.Collapsible.Root defaultOpen>
      <C.Collapsible.Trigger asChild>
        <C.Button size={args.size as any} variant="outline">
          {args.label}
        </C.Button>
      </C.Collapsible.Trigger>
      <C.Collapsible.Content>
        <C.Box borderWidth="1px" mt="3" p="4" rounded={args.rounded}>
          {args.children}
        </C.Box>
      </C.Collapsible.Content>
    </C.Collapsible.Root>
  )
}

function ColorModePlayground(args: PlaygroundArgs) {
  const { colorMode } = useColorMode()
  return (
    <C.HStack gap="3">
      <ColorModeButton />
      <C.Text>
        {args.label}: {colorMode}
      </C.Text>
    </C.HStack>
  )
}

function ColorPickerPlayground(args: PlaygroundArgs) {
  return (
    <C.ColorPicker.Root defaultValue={C.parseColor('#532A45')} {...recipeProps(args, false)}>
      <C.ColorPicker.Label>{args.label}</C.ColorPicker.Label>
      <C.ColorPicker.Control>
        <C.ColorPicker.Input />
        <C.ColorPicker.Trigger />
      </C.ColorPicker.Control>
      <C.Portal>
        <C.ColorPicker.Positioner>
          <C.ColorPicker.Content>
            <C.ColorPicker.Area />
            <C.ColorPicker.ChannelSlider channel="hue" />
          </C.ColorPicker.Content>
        </C.ColorPicker.Positioner>
      </C.Portal>
    </C.ColorPicker.Root>
  )
}

function ComboboxPlayground(args: PlaygroundArgs) {
  const { contains } = C.useFilter({ sensitivity: 'base' })
  const { collection, filter } = C.useListCollection({
    filter: contains,
    initialItems: frameworkItems,
  })

  return (
    <C.Combobox.Root
      collection={collection}
      disabled={args.disabled}
      invalid={args.invalid}
      onInputValueChange={(event: any) => filter(event.inputValue)}
      width="320px"
    >
      <C.Combobox.Label>{args.label}</C.Combobox.Label>
      <C.Combobox.Control>
        <C.Combobox.Input placeholder={args.placeholder} />
        <C.Combobox.IndicatorGroup>
          <C.Combobox.ClearTrigger />
          <C.Combobox.Trigger />
        </C.Combobox.IndicatorGroup>
      </C.Combobox.Control>
      <C.Portal>
        <C.Combobox.Positioner>
          <C.Combobox.Content>
            <C.Combobox.Empty>No items found</C.Combobox.Empty>
            {collection.items.map((item: FrameworkItem) => (
              <C.Combobox.Item item={item} key={item.value}>
                {item.label}
                <C.Combobox.ItemIndicator />
              </C.Combobox.Item>
            ))}
          </C.Combobox.Content>
        </C.Combobox.Positioner>
      </C.Portal>
    </C.Combobox.Root>
  )
}

function DataListPlayground(args: PlaygroundArgs) {
  return (
    <C.DataList.Root orientation={args.orientation as any} {...recipeProps(args)}>
      <C.DataList.Item>
        <C.DataList.ItemLabel>Status</C.DataList.ItemLabel>
        <C.DataList.ItemValue>
          <C.Badge colorPalette={args.colorPalette}>{args.label}</C.Badge>
        </C.DataList.ItemValue>
      </C.DataList.Item>
      <C.DataList.Item>
        <C.DataList.ItemLabel>Details</C.DataList.ItemLabel>
        <C.DataList.ItemValue>{args.children}</C.DataList.ItemValue>
      </C.DataList.Item>
    </C.DataList.Root>
  )
}

function DatePickerPlayground(args: PlaygroundArgs) {
  return (
    <C.DatePicker.Root
      disabled={args.disabled}
      invalid={args.invalid}
      maxW="20rem"
      readOnly={args.readOnly}
    >
      <C.DatePicker.Label>{args.label}</C.DatePicker.Label>
      <C.DatePicker.Control>
        <C.DatePicker.Input />
        <C.DatePicker.IndicatorGroup>
          <C.DatePicker.Trigger aria-label="Open calendar">
            <LuCalendar />
          </C.DatePicker.Trigger>
        </C.DatePicker.IndicatorGroup>
      </C.DatePicker.Control>
      <C.Portal>
        <C.DatePicker.Positioner>
          <C.DatePicker.Content>
            <C.DatePicker.View view="day">
              <C.DatePicker.Header />
              <C.DatePicker.DayTable />
            </C.DatePicker.View>
            <C.DatePicker.View view="month">
              <C.DatePicker.Header />
              <C.DatePicker.MonthTable />
            </C.DatePicker.View>
            <C.DatePicker.View view="year">
              <C.DatePicker.Header />
              <C.DatePicker.YearTable />
            </C.DatePicker.View>
          </C.DatePicker.Content>
        </C.DatePicker.Positioner>
      </C.Portal>
    </C.DatePicker.Root>
  )
}

function DatePickerCalendarPlayground(args: PlaygroundArgs) {
  return (
    <C.DatePicker.Root disabled={args.disabled} inline width="fit-content">
      <C.DatePicker.Content unstyled>
        <C.DatePicker.View view="day">
          <C.DatePicker.Header />
          <C.DatePicker.DayTable />
        </C.DatePicker.View>
      </C.DatePicker.Content>
    </C.DatePicker.Root>
  )
}

function DialogPlayground(args: PlaygroundArgs) {
  return (
    <C.Dialog.Root>
      <C.Dialog.Trigger asChild>
        <C.Button colorPalette={args.colorPalette} variant={args.variant as any}>
          {args.label}
        </C.Button>
      </C.Dialog.Trigger>
      <C.Portal>
        <C.Dialog.Backdrop />
        <C.Dialog.Positioner>
          <C.Dialog.Content>
            <C.Dialog.Header>
              <C.Dialog.Title>{args.label}</C.Dialog.Title>
            </C.Dialog.Header>
            <C.Dialog.Body>{args.children}</C.Dialog.Body>
            <C.Dialog.Footer>
              <C.Dialog.ActionTrigger asChild>
                <C.Button variant="outline">Cancel</C.Button>
              </C.Dialog.ActionTrigger>
              <C.Button colorPalette={args.colorPalette}>Save</C.Button>
            </C.Dialog.Footer>
          </C.Dialog.Content>
        </C.Dialog.Positioner>
      </C.Portal>
    </C.Dialog.Root>
  )
}

function DrawerPlayground(args: PlaygroundArgs) {
  return (
    <C.Drawer.Root placement={args.placement?.split('-')[0] as any}>
      <C.Drawer.Trigger asChild>
        <C.Button colorPalette={args.colorPalette} variant={args.variant as any}>
          {args.label}
        </C.Button>
      </C.Drawer.Trigger>
      <C.Portal>
        <C.Drawer.Backdrop />
        <C.Drawer.Positioner>
          <C.Drawer.Content>
            <C.Drawer.Header>
              <C.Drawer.Title>{args.label}</C.Drawer.Title>
            </C.Drawer.Header>
            <C.Drawer.Body>{args.children}</C.Drawer.Body>
          </C.Drawer.Content>
        </C.Drawer.Positioner>
      </C.Portal>
    </C.Drawer.Root>
  )
}

function EditablePlayground(args: PlaygroundArgs) {
  return (
    <C.Editable.Root defaultValue={args.children} disabled={args.disabled} readOnly={args.readOnly}>
      <C.Editable.Area>
        <C.Editable.Preview />
        <C.Editable.Input aria-label={args.label} />
      </C.Editable.Area>
    </C.Editable.Root>
  )
}

function FieldPlayground(args: PlaygroundArgs) {
  return (
    <C.Field.Root disabled={args.disabled} invalid={args.invalid} required={args.required}>
      <C.Field.Label>{args.label}</C.Field.Label>
      <C.Input placeholder={args.placeholder} />
      <C.Field.HelperText>{args.children}</C.Field.HelperText>
      <C.Field.ErrorText>Required field</C.Field.ErrorText>
    </C.Field.Root>
  )
}

function FieldsetPlayground(args: PlaygroundArgs) {
  return (
    <C.Fieldset.Root disabled={args.disabled} invalid={args.invalid}>
      <C.Fieldset.Legend>{args.label}</C.Fieldset.Legend>
      <C.Fieldset.HelperText>{args.children}</C.Fieldset.HelperText>
      <C.Fieldset.Content>
        <C.Input placeholder={args.placeholder} />
      </C.Fieldset.Content>
    </C.Fieldset.Root>
  )
}

function FileUploadPlayground(args: PlaygroundArgs) {
  return (
    <C.FileUpload.Root disabled={args.disabled}>
      <C.FileUpload.HiddenInput />
      <C.FileUpload.Trigger asChild>
        <C.Button size={args.size as any} variant={args.variant as any}>
          <LuUpload /> {args.label}
        </C.Button>
      </C.FileUpload.Trigger>
      <C.FileUpload.List />
    </C.FileUpload.Root>
  )
}

function FloatingPanelPlayground(args: PlaygroundArgs) {
  return (
    <C.FloatingPanel.Root>
      <C.FloatingPanel.Trigger asChild>
        <C.Button variant={args.variant as any}>{args.label}</C.Button>
      </C.FloatingPanel.Trigger>
      <C.Portal>
        <C.FloatingPanel.Positioner>
          <C.FloatingPanel.Content>
            <C.FloatingPanel.Header>
              <C.FloatingPanel.DragTrigger>
                <LuGripHorizontal />
                <C.FloatingPanel.Title>{args.label}</C.FloatingPanel.Title>
              </C.FloatingPanel.DragTrigger>
              <C.FloatingPanel.Control>
                <C.FloatingPanel.StageTrigger asChild stage="minimized">
                  <C.IconButton aria-label="Minimize" size="2xs" variant="ghost">
                    <LuMinus />
                  </C.IconButton>
                </C.FloatingPanel.StageTrigger>
                <C.FloatingPanel.StageTrigger asChild stage="default">
                  <C.IconButton aria-label="Restore" size="2xs" variant="ghost">
                    <LuSquare />
                  </C.IconButton>
                </C.FloatingPanel.StageTrigger>
                <C.FloatingPanel.CloseTrigger asChild>
                  <C.IconButton aria-label="Close" size="2xs" variant="ghost">
                    <LuX />
                  </C.IconButton>
                </C.FloatingPanel.CloseTrigger>
              </C.FloatingPanel.Control>
            </C.FloatingPanel.Header>
            <C.FloatingPanel.Body>{args.children}</C.FloatingPanel.Body>
            <C.FloatingPanel.ResizeTriggers />
          </C.FloatingPanel.Content>
        </C.FloatingPanel.Positioner>
      </C.Portal>
    </C.FloatingPanel.Root>
  )
}

function FormatPlayground(args: PlaygroundArgs) {
  return (
    <C.Stack gap="2">
      <C.Text>
        Number: <C.FormatNumber value={Number(args.value) || 0} />
      </C.Text>
      <C.Text>
        Bytes: <C.FormatByte value={(Number(args.value) || 0) * 1024} />
      </C.Text>
    </C.Stack>
  )
}

function HoverCardPlayground(args: PlaygroundArgs) {
  return (
    <C.HoverCard.Root positioning={{ placement: args.placement as any }}>
      <C.HoverCard.Trigger asChild>
        <C.Button variant={args.variant as any}>{args.label}</C.Button>
      </C.HoverCard.Trigger>
      <C.Portal>
        <C.HoverCard.Positioner>
          <C.HoverCard.Content>
            <C.Text>{args.children}</C.Text>
          </C.HoverCard.Content>
        </C.HoverCard.Positioner>
      </C.Portal>
    </C.HoverCard.Root>
  )
}

function InputPlayground(args: PlaygroundArgs) {
  return (
    <C.Input
      {...recipeProps(args)}
      aria-label={args.label}
      defaultValue=""
      placeholder={args.placeholder}
    />
  )
}

function ListboxPlayground(args: PlaygroundArgs) {
  return (
    <C.Listbox.Root collection={frameworkCollection} width="320px" {...recipeProps(args, false)}>
      <C.Listbox.Label>{args.label}</C.Listbox.Label>
      <C.Listbox.Content>
        {frameworkCollection.items.map((item: FrameworkItem) => (
          <C.Listbox.Item item={item} key={item.value}>
            <C.Listbox.ItemText>{item.label}</C.Listbox.ItemText>
            <C.Listbox.ItemIndicator />
          </C.Listbox.Item>
        ))}
      </C.Listbox.Content>
    </C.Listbox.Root>
  )
}

function MenuPlayground(args: PlaygroundArgs) {
  return (
    <C.Menu.Root positioning={{ placement: args.placement as any }}>
      <C.Menu.Trigger asChild>
        <C.Button variant={args.variant as any}>{args.label}</C.Button>
      </C.Menu.Trigger>
      <C.Portal>
        <C.Menu.Positioner>
          <C.Menu.Content>
            <C.Menu.Item value="search">
              <LuSearch /> Search
            </C.Menu.Item>
            <C.Menu.Item value="settings">
              <LuSettings /> Settings
            </C.Menu.Item>
          </C.Menu.Content>
        </C.Menu.Positioner>
      </C.Portal>
    </C.Menu.Root>
  )
}

function NativeSelectPlayground(args: PlaygroundArgs) {
  return (
    <C.NativeSelect.Root {...recipeProps(args)} width="320px">
      <C.NativeSelect.Field aria-label={args.label}>
        <option value="react">React</option>
        <option value="vue">Vue</option>
        <option value="svelte">Svelte</option>
      </C.NativeSelect.Field>
      <C.NativeSelect.Indicator />
    </C.NativeSelect.Root>
  )
}

function NumberInputPlayground(args: PlaygroundArgs) {
  return (
    <C.NumberInput.Root defaultValue={String(args.value ?? 10)} {...recipeProps(args)}>
      <C.NumberInput.Label>{args.label}</C.NumberInput.Label>
      <C.NumberInput.Control />
      <C.NumberInput.Input />
    </C.NumberInput.Root>
  )
}

function PaginationPlayground(args: PlaygroundArgs) {
  return (
    <C.Pagination.Root count={20} defaultPage={2} pageSize={5} {...recipeProps(args)}>
      <C.ButtonGroup size={args.size as any} variant="ghost">
        <C.Pagination.PrevTrigger asChild>
          <C.IconButton aria-label="Previous page">
            <LuChevronLeft />
          </C.IconButton>
        </C.Pagination.PrevTrigger>
        <C.Pagination.Items
          render={(page: any) => (
            <C.IconButton
              aria-label={`Page ${page.value}`}
              variant={{ _selected: 'outline', base: 'ghost' } as any}
            >
              {page.value}
            </C.IconButton>
          )}
        />
        <C.Pagination.NextTrigger asChild>
          <C.IconButton aria-label="Next page">
            <LuChevronRight />
          </C.IconButton>
        </C.Pagination.NextTrigger>
      </C.ButtonGroup>
    </C.Pagination.Root>
  )
}

function PasswordInputPlayground(args: PlaygroundArgs) {
  return (
    <AnyPasswordInput
      {...recipeProps(args)}
      aria-label={args.label}
      defaultValue=""
      placeholder={args.placeholder}
    />
  )
}

function PinInputPlayground(args: PlaygroundArgs) {
  return (
    <C.PinInput.Root defaultValue={['1', '2', '3']} disabled={args.disabled} invalid={args.invalid}>
      <C.PinInput.Label>{args.label}</C.PinInput.Label>
      <C.PinInput.Control>
        <C.PinInput.Input index={0} />
        <C.PinInput.Input index={1} />
        <C.PinInput.Input index={2} />
      </C.PinInput.Control>
    </C.PinInput.Root>
  )
}

function PopoverPlayground(args: PlaygroundArgs) {
  return (
    <C.Popover.Root positioning={{ placement: args.placement as any }}>
      <C.Popover.Trigger asChild>
        <C.Button variant={args.variant as any}>{args.label}</C.Button>
      </C.Popover.Trigger>
      <C.Portal>
        <C.Popover.Positioner>
          <C.Popover.Content>
            <C.Popover.Arrow />
            <C.Popover.Body>{args.children}</C.Popover.Body>
          </C.Popover.Content>
        </C.Popover.Positioner>
      </C.Portal>
    </C.Popover.Root>
  )
}

function ProgressPlayground(args: PlaygroundArgs) {
  return (
    <C.Progress.Root
      colorPalette={args.colorPalette}
      size={args.size as any}
      value={Number(args.value) || 45}
    >
      <C.Progress.Track>
        <C.Progress.Range />
      </C.Progress.Track>
    </C.Progress.Root>
  )
}

function ProgressCirclePlayground(args: PlaygroundArgs) {
  return (
    <C.ProgressCircle.Root
      colorPalette={args.colorPalette}
      size={args.size as any}
      value={Number(args.value) || 45}
    >
      <C.ProgressCircle.Circle>
        <C.ProgressCircle.Track />
        <C.ProgressCircle.Range />
      </C.ProgressCircle.Circle>
      <C.ProgressCircle.ValueText />
    </C.ProgressCircle.Root>
  )
}

function ProsePlayground(args: PlaygroundArgs) {
  return (
    <Prose>
      <h2>{args.label}</h2>
      <p>{args.children}</p>
      <p>
        Use <code>Controls</code> to adjust the text in this playground.
      </p>
    </Prose>
  )
}

function QrCodePlayground(args: PlaygroundArgs) {
  return (
    <C.QrCode.Root size={args.size as any} value={args.children ?? 'https://chakra-ui.com'}>
      <C.QrCode.Frame>
        <C.QrCode.Pattern />
      </C.QrCode.Frame>
    </C.QrCode.Root>
  )
}

function RadioPlayground(args: PlaygroundArgs) {
  return (
    <C.RadioGroup.Root colorPalette={args.colorPalette} defaultValue="one" size={args.size as any}>
      <C.HStack gap="4">
        <C.RadioGroup.Item disabled={args.disabled} value="one">
          <C.RadioGroup.ItemHiddenInput />
          <C.RadioGroup.ItemIndicator />
          <C.RadioGroup.ItemText>{args.label}</C.RadioGroup.ItemText>
        </C.RadioGroup.Item>
        <C.RadioGroup.Item disabled={args.disabled} value="two">
          <C.RadioGroup.ItemHiddenInput />
          <C.RadioGroup.ItemIndicator />
          <C.RadioGroup.ItemText>{args.children}</C.RadioGroup.ItemText>
        </C.RadioGroup.Item>
      </C.HStack>
    </C.RadioGroup.Root>
  )
}

function RadioCardPlayground(args: PlaygroundArgs) {
  return (
    <C.RadioCard.Root colorPalette={args.colorPalette} defaultValue="one" size={args.size as any}>
      <C.RadioCard.Item disabled={args.disabled} value="one">
        <C.RadioCard.ItemHiddenInput />
        <C.RadioCard.ItemControl>
          <C.RadioCard.ItemContent>
            <C.RadioCard.ItemText>{args.label}</C.RadioCard.ItemText>
            <C.RadioCard.ItemDescription>{args.children}</C.RadioCard.ItemDescription>
          </C.RadioCard.ItemContent>
          <C.RadioCard.ItemIndicator />
        </C.RadioCard.ItemControl>
      </C.RadioCard.Item>
    </C.RadioCard.Root>
  )
}

function RatingPlayground(args: PlaygroundArgs) {
  return (
    <C.RatingGroup.Root
      colorPalette={args.colorPalette}
      count={5}
      defaultValue={Number(args.value) || 3}
      size={args.size as any}
    >
      <C.RatingGroup.Label>{args.label}</C.RatingGroup.Label>
      <C.RatingGroup.HiddenInput />
      <C.RatingGroup.Control />
    </C.RatingGroup.Root>
  )
}

function RichTextEditorPlayground(args: PlaygroundArgs) {
  const editor = useEditor({
    content: `<p>${args.children}</p>`,
    extensions: [StarterKit],
    immediatelyRender: false,
  })

  if (!editor) return null

  return (
    <RichTextEditor.Root disabled={args.disabled} editor={editor}>
      <RichTextEditor.Toolbar>
        <C.Text fontWeight="medium">{args.label}</C.Text>
      </RichTextEditor.Toolbar>
      <RichTextEditor.Content />
    </RichTextEditor.Root>
  )
}

function ScrollAreaPlayground(args: PlaygroundArgs) {
  return (
    <C.ScrollArea.Root height="180px" width="320px" {...recipeProps(args, false)}>
      <C.ScrollArea.Viewport>
        <C.Box p="4">
          {Array.from({ length: Number(args.count) || 6 }).map((_, index) => (
            <C.Text key={index} py="2">
              {args.children} {index + 1}
            </C.Text>
          ))}
        </C.Box>
      </C.ScrollArea.Viewport>
      <C.ScrollArea.Scrollbar />
      <C.ScrollArea.Corner />
    </C.ScrollArea.Root>
  )
}

function SegmentedControlPlayground(args: PlaygroundArgs) {
  return (
    <C.SegmentGroup.Root
      colorPalette={args.colorPalette}
      defaultValue="react"
      orientation={args.orientation as any}
      size={args.size as any}
    >
      <C.SegmentGroup.Indicator />
      <C.SegmentGroup.Items items={['React', 'Vue', 'Svelte']} />
    </C.SegmentGroup.Root>
  )
}

function SelectPlayground(args: PlaygroundArgs) {
  return (
    <C.Select.Root
      collection={frameworkCollection}
      disabled={args.disabled}
      invalid={args.invalid}
      size={args.size as any}
      width="320px"
    >
      <C.Select.HiddenSelect />
      <C.Select.Label>{args.label}</C.Select.Label>
      <C.Select.Control>
        <C.Select.Trigger>
          <C.Select.ValueText placeholder={args.placeholder} />
        </C.Select.Trigger>
        <C.Select.IndicatorGroup>
          <C.Select.Indicator />
        </C.Select.IndicatorGroup>
      </C.Select.Control>
      <C.Portal>
        <C.Select.Positioner>
          <C.Select.Content>
            {frameworkCollection.items.map((item: FrameworkItem) => (
              <C.Select.Item item={item} key={item.value}>
                {item.label}
                <C.Select.ItemIndicator />
              </C.Select.Item>
            ))}
          </C.Select.Content>
        </C.Select.Positioner>
      </C.Portal>
    </C.Select.Root>
  )
}

function SliderPlayground(args: PlaygroundArgs) {
  return (
    <C.Slider.Root
      colorPalette={args.colorPalette}
      defaultValue={[Number(args.value) || 45]}
      size={args.size as any}
      width="320px"
    >
      <C.Slider.Label>{args.label}</C.Slider.Label>
      <C.Slider.Control>
        <C.Slider.Track>
          <C.Slider.Range />
        </C.Slider.Track>
        <C.Slider.Thumb index={0} />
      </C.Slider.Control>
    </C.Slider.Root>
  )
}

function SplitterPlayground(args: PlaygroundArgs) {
  return (
    <C.Splitter.Root borderWidth="1px" minH="48" panels={[{ id: 'a' }, { id: 'b' }]}>
      <C.Splitter.Panel id="a">
        <C.Center boxSize="full">{args.label}</C.Center>
      </C.Splitter.Panel>
      <C.Splitter.ResizeTrigger id="a:b" />
      <C.Splitter.Panel id="b">
        <C.Center boxSize="full">{args.children}</C.Center>
      </C.Splitter.Panel>
    </C.Splitter.Root>
  )
}

function StatPlayground(args: PlaygroundArgs) {
  return (
    <C.Stat.Root>
      <C.Stat.Label>{args.label}</C.Stat.Label>
      <C.Stat.ValueText>
        <C.FormatNumber value={Number(args.value) || 45} />
      </C.Stat.ValueText>
      <C.Stat.HelpText>{args.children}</C.Stat.HelpText>
    </C.Stat.Root>
  )
}

function StepsPlayground(args: PlaygroundArgs) {
  return (
    <C.Steps.Root
      colorPalette={args.colorPalette}
      count={3}
      defaultStep={1}
      orientation={args.orientation as any}
      size={args.size as any}
    >
      <C.Steps.List>
        {['Plan', 'Build', 'Review'].map((step, index) => (
          <C.Steps.Item index={index} key={step}>
            <C.Steps.Trigger>
              <C.Steps.Indicator />
              <C.Steps.Title>{step}</C.Steps.Title>
            </C.Steps.Trigger>
            <C.Steps.Separator />
          </C.Steps.Item>
        ))}
      </C.Steps.List>
    </C.Steps.Root>
  )
}

function SwitchPlayground(args: PlaygroundArgs) {
  return (
    <C.Switch.Root defaultChecked={args.checked} {...recipeProps(args)}>
      <C.Switch.HiddenInput />
      <C.Switch.Control />
      <C.Switch.Label>{args.label}</C.Switch.Label>
    </C.Switch.Root>
  )
}

function TablePlayground(args: PlaygroundArgs) {
  return (
    <C.Table.Root size={args.size as any} variant={args.variant as any}>
      <C.Table.Header>
        <C.Table.Row>
          <C.Table.ColumnHeader>{args.label}</C.Table.ColumnHeader>
          <C.Table.ColumnHeader>Value</C.Table.ColumnHeader>
        </C.Table.Row>
      </C.Table.Header>
      <C.Table.Body>
        <C.Table.Row>
          <C.Table.Cell>{args.children}</C.Table.Cell>
          <C.Table.Cell>
            <C.Badge colorPalette={args.colorPalette}>Active</C.Badge>
          </C.Table.Cell>
        </C.Table.Row>
      </C.Table.Body>
    </C.Table.Root>
  )
}

function TabsPlayground(args: PlaygroundArgs) {
  return (
    <C.Tabs.Root
      colorPalette={args.colorPalette}
      defaultValue="overview"
      orientation={args.orientation as any}
      size={args.size as any}
    >
      <C.Tabs.List>
        <C.Tabs.Trigger value="overview">Overview</C.Tabs.Trigger>
        <C.Tabs.Trigger value="details">Details</C.Tabs.Trigger>
      </C.Tabs.List>
      <C.Tabs.Content value="overview">{args.label}</C.Tabs.Content>
      <C.Tabs.Content value="details">{args.children}</C.Tabs.Content>
    </C.Tabs.Root>
  )
}

function TagsInputPlayground(args: PlaygroundArgs) {
  return (
    <C.TagsInput.Root defaultValue={['React']} width="320px" {...recipeProps(args, false)}>
      <C.TagsInput.Label>{args.label}</C.TagsInput.Label>
      <C.TagsInput.Control>
        <C.TagsInput.Context>
          {(api: any) =>
            api.value.map((value: string, index: number) => (
              <C.TagsInput.Item index={index} key={value} value={value}>
                <C.TagsInput.ItemPreview>
                  <C.TagsInput.ItemText>{value}</C.TagsInput.ItemText>
                  <C.TagsInput.ItemDeleteTrigger />
                </C.TagsInput.ItemPreview>
                <C.TagsInput.ItemInput />
              </C.TagsInput.Item>
            ))
          }
        </C.TagsInput.Context>
        <C.TagsInput.Input placeholder={args.placeholder} />
      </C.TagsInput.Control>
    </C.TagsInput.Root>
  )
}

function TimelinePlayground(args: PlaygroundArgs) {
  return (
    <C.Timeline.Root size={args.size as any} variant={args.variant as any}>
      <C.Timeline.Item>
        <C.Timeline.Connector>
          <C.Timeline.Separator />
          <C.Timeline.Indicator colorPalette={args.colorPalette}>
            <LuCheck />
          </C.Timeline.Indicator>
        </C.Timeline.Connector>
        <C.Timeline.Content>
          <C.Timeline.Title>{args.label}</C.Timeline.Title>
          <C.Timeline.Description>{args.children}</C.Timeline.Description>
        </C.Timeline.Content>
      </C.Timeline.Item>
    </C.Timeline.Root>
  )
}

function ToastPlayground(args: PlaygroundArgs) {
  return (
    <>
      <C.Button
        onClick={() =>
          toaster.create({
            description: args.children,
            title: args.label,
            type: args.status as any,
          })
        }
        variant={args.variant as any}
      >
        Show Toast
      </C.Button>
      <Toaster />
    </>
  )
}

function TogglePlayground(args: PlaygroundArgs) {
  return (
    <C.Toggle.Root defaultPressed={args.checked} {...recipeProps(args)}>
      <LuStar />
      {args.label}
    </C.Toggle.Root>
  )
}

function TooltipPlayground(args: PlaygroundArgs) {
  return (
    <Tooltip content={args.children} positioning={{ placement: args.placement as any }}>
      <C.Button size={args.size as any} variant={args.variant as any}>
        {args.label}
      </C.Button>
    </Tooltip>
  )
}

function ToggleTipPlayground(args: PlaygroundArgs) {
  return (
    <ToggleTip content={args.children} positioning={{ placement: args.placement as any }}>
      <C.Button aria-label={args.label} size={args.size as any} variant={args.variant as any}>
        <LuInfo />
      </C.Button>
    </ToggleTip>
  )
}

function TreeViewPlayground(args: PlaygroundArgs) {
  return (
    <C.TreeView.Root collection={treeCollection} maxW="sm">
      <C.TreeView.Label>{args.label}</C.TreeView.Label>
      <C.TreeView.Tree>
        <C.TreeView.Node
          indentGuide={<C.TreeView.BranchIndentGuide />}
          render={({ node, nodeState }: any) =>
            nodeState.isBranch ? (
              <C.TreeView.BranchControl>
                <LuFolder />
                <C.TreeView.BranchText>{node.name}</C.TreeView.BranchText>
              </C.TreeView.BranchControl>
            ) : (
              <C.TreeView.Item>
                <LuFile />
                <C.TreeView.ItemText>{node.name}</C.TreeView.ItemText>
              </C.TreeView.Item>
            )
          }
        />
      </C.TreeView.Tree>
    </C.TreeView.Root>
  )
}

function simpleLayout(
  componentName:
    'Box' | 'Center' | 'Container' | 'Flex' | 'Grid' | 'Group' | 'SimpleGrid' | 'Stack' | 'Wrap'
) {
  return (args: PlaygroundArgs) => {
    const Component = C[componentName]
    const child = (
      <C.Box bg="colorPalette.subtle" color="colorPalette.fg" p="3" rounded={args.rounded}>
        {args.children}
      </C.Box>
    )

    if (componentName === 'Grid') {
      return (
        <Component
          colorPalette={args.colorPalette}
          gap="3"
          templateColumns="repeat(2, minmax(0, 1fr))"
        >
          {child}
          {child}
        </Component>
      )
    }

    if (componentName === 'SimpleGrid') {
      return (
        <Component colorPalette={args.colorPalette} columns={2} gap="3">
          {child}
          {child}
        </Component>
      )
    }

    if (
      componentName === 'Flex' ||
      componentName === 'Group' ||
      componentName === 'Stack' ||
      componentName === 'Wrap'
    ) {
      return (
        <Component
          align="center"
          colorPalette={args.colorPalette}
          direction={args.orientation === 'vertical' ? 'column' : undefined}
          gap="3"
        >
          {child}
          {child}
        </Component>
      )
    }

    return (
      <Component borderWidth="1px" colorPalette={args.colorPalette} p="4" rounded={args.rounded}>
        {child}
      </Component>
    )
  }
}

const frameworkItems = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Angular', value: 'angular' },
]

type FrameworkItem = (typeof frameworkItems)[number]

const frameworkCollection = C.createListCollection({ items: frameworkItems })

const treeCollection = C.createTreeCollection({
  nodeToString: (node: any) => node.name,
  nodeToValue: (node: any) => node.id,
  rootNode: {
    children: [
      {
        children: [
          { id: 'components', name: 'components' },
          { id: 'storybook', name: 'storybook' },
        ],
        id: 'src',
        name: 'src',
      },
      { id: 'package', name: 'package.json' },
    ],
    id: 'ROOT',
    name: '',
  },
})

const playgroundSpecs: Record<string, PlaygroundSpec> = {
  AbsoluteCenter: {
    controls: ['children', 'colorPalette', 'rounded'],
    render: (args) => (
      <C.Box bg="bg.muted" h="160px" position="relative" rounded={args.rounded}>
        <C.AbsoluteCenter
          bg="bg.panel"
          borderWidth="1px"
          colorPalette={args.colorPalette}
          p="4"
          rounded={args.rounded}
        >
          {args.children}
        </C.AbsoluteCenter>
      </C.Box>
    ),
  },
  Accordion: { controls: stateControls, play: disclosurePlay, render: AccordionPlayground },
  ActionBar: { controls: stateControls, render: ActionBarPlayground },
  Alert: {
    args: { variant: 'subtle' },
    controls: ['label', 'children', 'colorPalette', 'variant', 'status'],
    render: AlertPlayground,
  },
  AspectRatio: {
    controls: ['children', 'rounded'],
    render: (args) => (
      <C.AspectRatio maxW="360px" ratio={16 / 9}>
        <C.Center bg="bg.muted" rounded={args.rounded}>
          {args.children}
        </C.Center>
      </C.AspectRatio>
    ),
  },
  Avatar: { controls: ['label', 'colorPalette', 'size', 'variant'], render: AvatarPlayground },
  Badge: { controls: appearanceControls, play: textSmokePlay, render: renderDirect('Badge') },
  Bleed: {
    controls: ['children', 'colorPalette', 'rounded'],
    render: (args) => (
      <C.Box bg="bg.muted" p="6">
        <C.Bleed inline="4">
          <C.Box
            bg="colorPalette.subtle"
            color="colorPalette.fg"
            colorPalette={args.colorPalette}
            p="4"
            rounded={args.rounded}
          >
            {args.children}
          </C.Box>
        </C.Bleed>
      </C.Box>
    ),
  },
  Blockquote: {
    args: { variant: 'solid' },
    controls: ['label', 'children', 'colorPalette', 'variant'],
    render: BlockquotePlayground,
  },
  Box: { controls: ['children', 'colorPalette', 'rounded'], render: simpleLayout('Box') },
  Breadcrumb: { controls: ['label', 'size'], render: BreadcrumbPlayground },
  Button: {
    args: { children: 'Next' },
    controls: appearanceControls,
    play: async ({ canvasElement }) => {
      buttonClick.mockClear?.()
      const button = within(canvasElement).getByRole('button', { name: /next/i })
      await userEvent.click(button)
      await expect(buttonClick).toHaveBeenCalled()
    },
    render: ButtonPlayground,
  },
  Card: {
    args: { variant: 'outline' },
    controls: ['label', 'children', 'colorPalette', 'size', 'variant'],
    render: CardPlayground,
  },
  Carousel: { controls: ['count', 'rounded'], render: CarouselPlayground },
  Center: { controls: ['children', 'colorPalette', 'rounded'], render: simpleLayout('Center') },
  Checkbox: { controls: stateControls, play: checkboxPlay, render: CheckboxPlayground },
  CheckboxCard: { controls: stateControls, play: checkboxPlay, render: CheckboxCardPlayground },
  Checkmark: {
    controls: ['colorPalette', 'size', 'variant', 'checked', 'disabled'],
    render: (args) => <C.Checkmark checked={args.checked} {...recipeProps(args)} />,
  },
  ClientOnly: {
    controls: ['children'],
    play: textSmokePlay,
    render: (args) => (
      <C.ClientOnly fallback={<C.Text>Loading...</C.Text>}>
        <C.Text>{args.children}</C.Text>
      </C.ClientOnly>
    ),
  },
  Clipboard: { controls: ['label', 'children', 'size', 'variant'], render: ClipboardPlayground },
  CloseButton: {
    controls: ['label', 'colorPalette', 'size', 'variant', 'disabled'],
    render: (args) => <C.CloseButton aria-label={args.label} {...recipeProps(args)} />,
  },
  Code: {
    controls: ['children', 'colorPalette', 'size', 'variant'],
    play: textSmokePlay,
    render: renderText('Code'),
  },
  CodeBlock: { controls: ['children'], render: CodeBlockPlayground },
  Collapsible: {
    controls: ['label', 'children', 'size', 'rounded'],
    play: disclosurePlay,
    render: CollapsiblePlayground,
  },
  ColorMode: { controls: ['label'], render: ColorModePlayground },
  ColorPicker: {
    controls: ['label', 'size', 'disabled', 'invalid'],
    render: ColorPickerPlayground,
  },
  ColorSwatch: {
    controls: ['size', 'rounded'],
    render: (args) => (
      <C.ColorSwatch rounded={args.rounded} size={args.size as any} value="#532A45" />
    ),
  },
  Combobox: { controls: inputControls, play: comboboxPlay, render: ComboboxPlayground },
  Container: {
    controls: ['children', 'colorPalette', 'rounded'],
    render: simpleLayout('Container'),
  },
  DataList: {
    controls: ['label', 'children', 'colorPalette', 'size', 'variant', 'orientation'],
    render: DataListPlayground,
  },
  DatePicker: { controls: inputControls, render: DatePickerPlayground },
  DatePickerCalendar: { controls: ['disabled'], render: DatePickerCalendarPlayground },
  Dialog: { controls: overlayControls, play: portalPlay, render: DialogPlayground },
  DownloadTrigger: {
    controls: ['label', 'children', 'size', 'variant'],
    render: (args) => (
      <C.DownloadTrigger
        asChild
        data={args.children}
        fileName="storybook.txt"
        mimeType="text/plain"
      >
        <C.Button size={args.size as any} variant={args.variant as any}>
          <LuDownload /> {args.label}
        </C.Button>
      </C.DownloadTrigger>
    ),
  },
  Drawer: { controls: overlayControls, play: portalPlay, render: DrawerPlayground },
  Editable: { controls: ['label', 'children', 'disabled', 'readOnly'], render: EditablePlayground },
  Em: { controls: ['children'], play: textSmokePlay, render: renderText('Em') },
  Field: { controls: inputControls, play: placeholderInputPlay, render: FieldPlayground },
  Fieldset: { controls: inputControls, play: placeholderInputPlay, render: FieldsetPlayground },
  FileUpload: { controls: ['label', 'size', 'variant', 'disabled'], render: FileUploadPlayground },
  Flex: {
    controls: ['children', 'colorPalette', 'orientation', 'rounded'],
    render: simpleLayout('Flex'),
  },
  Float: {
    controls: ['children', 'placement', 'colorPalette'],
    render: (args) => (
      <C.Box bg="bg.muted" boxSize="120px" position="relative" rounded="md">
        <C.Float placement={args.placement as any}>
          <C.Circle
            bg="colorPalette.solid"
            color="colorPalette.contrast"
            colorPalette={args.colorPalette}
            size="8"
          >
            {args.children?.slice(0, 1)}
          </C.Circle>
        </C.Float>
      </C.Box>
    ),
  },
  FloatingPanel: { controls: overlayControls, play: portalPlay, render: FloatingPanelPlayground },
  For: {
    controls: ['children', 'count'],
    render: (args) => (
      <C.For each={Array.from({ length: Number(args.count) || 3 }, (_, index) => index + 1)}>
        {(item: number) => (
          <C.Badge key={item}>
            {args.children} {item}
          </C.Badge>
        )}
      </C.For>
    ),
  },
  Format: { controls: ['value'], render: FormatPlayground },
  FormatByte: {
    controls: ['value'],
    render: (args) => <C.FormatByte value={(Number(args.value) || 12) * 1024} />,
  },
  FormatNumber: {
    controls: ['value'],
    render: (args) => <C.FormatNumber value={Number(args.value) || 1450.45} />,
  },
  Grid: { controls: ['children', 'colorPalette', 'rounded'], render: simpleLayout('Grid') },
  Group: {
    controls: ['children', 'colorPalette', 'orientation', 'rounded'],
    render: simpleLayout('Group'),
  },
  Heading: {
    args: { children: 'Storybook heading' },
    controls: ['children', 'size'],
    play: textSmokePlay,
    render: renderText('Heading'),
  },
  Highlight: {
    args: { children: 'With Highlight, you can spotlight words.' },
    controls: ['children'],
    render: (args) => (
      <C.Highlight
        query="spotlight"
        styles={{ bg: 'orange.subtle', color: 'orange.fg', px: '0.5' }}
      >
        {args.children}
      </C.Highlight>
    ),
  },
  HoverCard: { controls: overlayControls, play: hoverPortalPlay, render: HoverCardPlayground },
  Icon: {
    controls: ['colorPalette', 'size'],
    render: (args) => (
      <C.Icon color="colorPalette.fg" colorPalette={args.colorPalette} size={args.size as any}>
        <LuBell />
      </C.Icon>
    ),
  },
  IconButton: {
    controls: ['label', 'colorPalette', 'size', 'variant', 'disabled'],
    render: (args) => (
      <C.IconButton aria-label={args.label} {...recipeProps(args)}>
        <LuSearch />
      </C.IconButton>
    ),
  },
  Image: {
    controls: ['label', 'rounded'],
    render: (args) => (
      <C.Image
        alt={args.label}
        rounded={args.rounded}
        src="https://picsum.photos/seed/storybook/420/240"
      />
    ),
  },
  Input: { controls: inputControls, play: inputPlay, render: InputPlayground },
  Kbd: {
    controls: ['children', 'size', 'variant'],
    play: textSmokePlay,
    render: renderText('Kbd'),
  },
  Link: {
    controls: ['children', 'colorPalette', 'variant'],
    play: textSmokePlay,
    render: (args) => (
      <C.Link colorPalette={args.colorPalette} href="#" variant={args.variant as any}>
        {args.children}
      </C.Link>
    ),
  },
  LinkOverlay: {
    controls: ['label', 'children'],
    render: (args) => (
      <C.Stack position="relative">
        <C.Heading size="sm">{args.label}</C.Heading>
        <C.Text>{args.children}</C.Text>
        <C.LinkOverlay asChild href="#">
          <C.Link>Open link</C.Link>
        </C.LinkOverlay>
      </C.Stack>
    ),
  },
  List: {
    controls: ['children', 'colorPalette', 'variant'],
    render: (args) => (
      <C.List.Root gap="2" variant={args.variant as any}>
        <C.List.Item>{args.children}</C.List.Item>
        <C.List.Item>Controls enabled</C.List.Item>
      </C.List.Root>
    ),
  },
  Listbox: { controls: ['label', 'size', 'disabled'], render: ListboxPlayground },
  Loader: {
    controls: ['label', 'children', 'size', 'variant', 'loading'],
    render: (args) => (
      <C.Loader size={args.size as any} text={args.label}>
        {args.children}
      </C.Loader>
    ),
  },
  Mark: {
    controls: ['children', 'colorPalette', 'variant'],
    play: textSmokePlay,
    render: renderText('Mark'),
  },
  Marquee: {
    controls: ['children', 'orientation'],
    render: (args) => (
      <C.Marquee gap="8" orientation={args.orientation as any}>
        <C.Badge>{args.children}</C.Badge>
        <C.Badge>Live controls</C.Badge>
      </C.Marquee>
    ),
  },
  Menu: { controls: overlayControls, play: menuPlay, render: MenuPlayground },
  NativeSelect: { controls: inputControls, play: nativeSelectPlay, render: NativeSelectPlayground },
  NumberInput: {
    controls: ['label', 'value', 'size', 'variant', 'disabled', 'invalid'],
    play: numberInputPlay,
    render: NumberInputPlayground,
  },
  Overlay: { controls: overlayControls, play: portalPlay, render: DialogPlayground },
  Pagination: { controls: ['size', 'variant'], play: paginationPlay, render: PaginationPlayground },
  PasswordInput: { controls: inputControls, play: inputPlay, render: PasswordInputPlayground },
  PinInput: {
    controls: ['label', 'size', 'disabled', 'invalid'],
    play: pinInputPlay,
    render: PinInputPlayground,
  },
  Popover: { controls: overlayControls, play: portalPlay, render: PopoverPlayground },
  Portal: {
    controls: ['children'],
    play: textSmokePlay,
    render: (args) => (
      <C.Portal disabled>
        <C.Text>{args.children}</C.Text>
      </C.Portal>
    ),
  },
  Presence: {
    controls: ['label', 'children'],
    render: (args) => (
      <C.Presence present>
        <C.Box bg="bg.muted" p="4">
          {args.children}
        </C.Box>
      </C.Presence>
    ),
  },
  Progress: { controls: ['value', 'colorPalette', 'size'], render: ProgressPlayground },
  ProgressCircle: { controls: ['value', 'colorPalette', 'size'], render: ProgressCirclePlayground },
  Prose: { controls: ['label', 'children'], render: ProsePlayground },
  QrCode: { controls: ['children', 'size'], render: QrCodePlayground },
  Radio: { controls: stateControls, play: radioPlay, render: RadioPlayground },
  RadioCard: { controls: stateControls, render: RadioCardPlayground },
  RadioMark: {
    controls: ['colorPalette', 'size', 'variant', 'checked', 'disabled'],
    render: (args) => <C.Radiomark checked={args.checked} {...recipeProps(args)} />,
  },
  Rating: {
    controls: ['label', 'value', 'colorPalette', 'size', 'disabled', 'readOnly'],
    render: RatingPlayground,
  },
  RichTextEditor: { controls: ['label', 'children', 'disabled'], render: RichTextEditorPlayground },
  ScrollArea: { controls: ['children', 'count', 'size', 'variant'], render: ScrollAreaPlayground },
  SegmentedControl: {
    controls: ['colorPalette', 'size', 'orientation'],
    render: SegmentedControlPlayground,
  },
  Select: { controls: inputControls, play: selectPlay, render: SelectPlayground },
  Separator: {
    controls: ['children', 'size', 'variant', 'orientation'],
    render: (args) => (
      <C.Separator
        orientation={args.orientation as any}
        size={args.size as any}
        variant={args.variant as any}
      >
        {args.children}
      </C.Separator>
    ),
  },
  Show: {
    controls: ['children'],
    play: textSmokePlay,
    render: (args) => <C.Show when>{args.children}</C.Show>,
  },
  SimpleGrid: {
    controls: ['children', 'colorPalette', 'rounded'],
    render: simpleLayout('SimpleGrid'),
  },
  Skeleton: {
    controls: ['children', 'loading', 'rounded'],
    render: (args) => (
      <C.Skeleton loading={args.loading} rounded={args.rounded}>
        <C.Box p="4">{args.children}</C.Box>
      </C.Skeleton>
    ),
  },
  SkipNav: {
    controls: ['children'],
    play: textSmokePlay,
    render: (args) => (
      <C.Box>
        <C.SkipNavLink>Skip to Content</C.SkipNavLink>
        <C.SkipNavContent>
          <C.Text>{args.children}</C.Text>
        </C.SkipNavContent>
      </C.Box>
    ),
  },
  Slider: {
    controls: ['label', 'value', 'colorPalette', 'size'],
    play: sliderPlay,
    render: SliderPlayground,
  },
  Spinner: {
    controls: ['colorPalette', 'size'],
    render: (args) => <C.Spinner colorPalette={args.colorPalette} size={args.size as any} />,
  },
  Splitter: { controls: ['label', 'children'], render: SplitterPlayground },
  Stack: {
    controls: ['children', 'colorPalette', 'orientation', 'rounded'],
    render: simpleLayout('Stack'),
  },
  Stat: { controls: ['label', 'children', 'value'], render: StatPlayground },
  Status: {
    controls: ['colorPalette', 'size'],
    render: (args) => (
      <C.Status.Root colorPalette={args.colorPalette} size={args.size as any}>
        <C.Status.Indicator /> {args.children}
      </C.Status.Root>
    ),
  },
  Steps: {
    controls: ['colorPalette', 'size', 'variant', 'orientation'],
    play: stepsPlay,
    render: StepsPlayground,
  },
  Switch: { controls: stateControls, play: switchPlay, render: SwitchPlayground },
  Table: {
    controls: ['label', 'children', 'colorPalette', 'size', 'variant'],
    render: TablePlayground,
  },
  Tabs: {
    controls: ['label', 'children', 'colorPalette', 'size', 'variant', 'orientation'],
    play: tabsPlay,
    render: TabsPlayground,
  },
  Tag: {
    controls: appearanceControls,
    play: textSmokePlay,
    render: (args) => (
      <C.Tag.Root {...recipeProps(args)}>
        <C.Tag.Label>{args.children}</C.Tag.Label>
      </C.Tag.Root>
    ),
  },
  TagsInput: { controls: inputControls, play: tagsInputPlay, render: TagsInputPlayground },
  Text: { controls: ['children', 'size'], play: textSmokePlay, render: renderText('Text') },
  Textarea: {
    controls: inputControls,
    play: inputPlay,
    render: (args) => (
      <C.Textarea {...recipeProps(args)} aria-label={args.label} placeholder={args.placeholder} />
    ),
  },
  Theme: {
    controls: ['children'],
    play: textSmokePlay,
    render: (args) => (
      <C.Theme appearance="dark">
        <C.Box bg="bg.panel" p="4">
          {args.children}
        </C.Box>
      </C.Theme>
    ),
  },
  Timeline: {
    controls: ['label', 'children', 'colorPalette', 'size', 'variant'],
    render: TimelinePlayground,
  },
  Toast: {
    controls: ['label', 'children', 'variant', 'status'],
    play: toastPlay,
    render: ToastPlayground,
  },
  Toggle: { controls: stateControls, play: togglePlay, render: TogglePlayground },
  ToggleTip: { controls: overlayControls, play: portalPlay, render: ToggleTipPlayground },
  Tooltip: { controls: overlayControls, play: hoverPortalPlay, render: TooltipPlayground },
  TreeView: { controls: ['label'], render: TreeViewPlayground },
  VisuallyHidden: {
    controls: ['children'],
    render: (args) => (
      <C.Box>
        <C.VisuallyHidden>{args.children}</C.VisuallyHidden>
        <C.Text>Hidden text is present for assistive tech.</C.Text>
      </C.Box>
    ),
  },
  Wrap: {
    controls: ['children', 'colorPalette', 'orientation', 'rounded'],
    render: simpleLayout('Wrap'),
  },
}

function createFallbackSpec(componentName: string): PlaygroundSpec {
  return {
    controls: appearanceControls,
    render: renderDirect(componentName),
  }
}

export function createComponentPlayground(componentName: string): StoryObj {
  const spec = playgroundSpecs[componentName] ?? createFallbackSpec(componentName)
  const controls = spec.controls ?? appearanceControls

  return {
    args: {
      ...baseArgs,
      ...spec.args,
    },
    argTypes: pickArgTypes(controls, spec.argTypes),
    name: 'Playground',
    parameters: {
      controls: {
        include: [...controls],
      },
    },
    play: spec.play ?? smokePlay,
    render: renderWithSurface(spec.render) as any,
    tags: ['test'],
  }
}
