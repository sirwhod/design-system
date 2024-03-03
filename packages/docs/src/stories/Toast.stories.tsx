import { Box, Toast } from '@sirwhod-ignite-ui/react'

import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    triggerText: 'open',
    title: 'Data display/Toast',
    action: () => {
      console.log('test')
    },
  },
  decorators: [
    (Story) => {
      const [open, setOpen] = useState<boolean>(false)
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story({ open, setOpen })}
        </Box>
      )
    },
  ],
} as Meta

export const Primary: StoryObj = {}
