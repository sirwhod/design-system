import { Box, Text, TextInput, TextInputProps } from '@sirwhod-ignite-ui/react'

import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">E-mail address</Text>
          <Story />
        </Box>
      )
    },
  ],
} as Meta

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Add anything on input.',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'call.com/',
    placeholder: 'your-username',
  },
}
