import { Heading, HeadingProps } from '@ignite-ui/react'

import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
  },
} as Meta

export const Primary: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    children: 'H1 heading',
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão o heading é sempre um h2',
      },
    },
  },
}
