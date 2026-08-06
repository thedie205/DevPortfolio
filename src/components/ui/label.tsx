'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({
  className,
  children,
  ...props
}: LabelProps) {
  return (
    <label
      className={cn(
        'flex items-center gap-2 pb-2 text-sm font-medium leading-none select-none',
        className
      )}
      {...props}
    >
      {children}
    </label>
  )
}