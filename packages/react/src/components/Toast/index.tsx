import { ReactNode } from 'react'

import * as ToastRadix from '@radix-ui/react-toast'
import { ToastContainer, ToastTitle, ToastViewport } from './styles'
import { Button } from '../Button'

export interface ToastProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  triggerText: string
  title: string
  action?: ReactNode
}

export function Toast({
  open,
  setOpen,
  triggerText,
  title,
  action,
}: ToastProps) {
  return (
    <ToastRadix.Provider swipeDirection="right">
      <Button
        onClick={() => {
          setOpen(true)
        }}
      >
        {triggerText}
      </Button>

      <ToastContainer className="ToastRoot" open={open} onOpenChange={setOpen}>
        <ToastTitle className="ToastTitle">{title}</ToastTitle>
        <ToastRadix.Description asChild></ToastRadix.Description>
        {!!action && (
          <ToastRadix.Action asChild altText="Goto schedule to undo">
            {action}
          </ToastRadix.Action>
        )}
      </ToastContainer>
      <ToastViewport />
    </ToastRadix.Provider>
  )
}
