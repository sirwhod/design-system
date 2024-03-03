import { Avatar, AvatarProps } from '@sirwhod-ignite-ui/react'

import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/sirwhod.png',
    alt: 'Rodrigo Brandão',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: '',
    alt: 'Fallback',
  },
}
