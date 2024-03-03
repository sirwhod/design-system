import { keyframes, styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

export const TooltipContent = styled(Tooltip.Content, {
  display: 'flex',
  padding: '$3 $4',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$2',

  borderRadius: '$sm',
  backgroundColor: '$gray900',

  '&[data-state=¨delayed-open¨][data-side="top"]': {
    animationName: `${slideDownAndFade}`,
  },

  '&[data-state="delayed-open"][data-side="right"]': {
    animationName: `${slideLeftAndFade}`,
  },

  '&[data-state="delayed-open"][data-side="bottom"]': {
    animationName: `${slideUpAndFade}`,
  },

  '&[data-state="delayed-open"][data-side="left"]': {
    animationName: `${slideRightAndFade}`,
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
