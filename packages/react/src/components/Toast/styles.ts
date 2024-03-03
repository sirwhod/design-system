import { styled } from '../../styles'

import * as Toast from '@radix-ui/react-toast'

export const ToastContainer = styled(Toast.Root, {
  display: 'flex',
  width: '360px',
  padding: '12px 20px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4px',
})
export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontFamily: '$default',
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '160%' /* 32px */,
})
export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: 'var(--viewport-padding)',
  gap: '10px',
  width: '390px',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})
