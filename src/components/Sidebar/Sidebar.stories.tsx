import type { Meta } from '@storybook/nextjs-vite'

const meta = {
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Layout / Sidebar',
} satisfies Meta

export default meta

export { SidebarBasic as Basic } from './examples/sidebar-basic'
export { SidebarControlled as Controlled } from './examples/sidebar-controlled'
export { SidebarFloating as Floating } from './examples/sidebar-floating'
