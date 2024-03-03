import {
  Box,
  Button,
  Text,
  Tooltip,
  TooltipProps,
} from '@sirwhod-ignite-ui/react'

import { Plus } from 'phosphor-react'

import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    content: <Text size="sm">Add more infos</Text>,
    children: (
      <Button variant="secondary" size="sm">
        <Plus weight="bold" />
      </Button>
    ),
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta

export const Primary: StoryObj<TooltipProps> = {}
