'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { FC, ReactNode } from 'react'
import { NextUIProvider } from '@nextui-org/system'
import { useRouter } from 'next/navigation'

export interface ProvidersProps {
  children: ReactNode
  themeProps?: ThemeProviderProps
}

export const Providers: FC<ProvidersProps> = ({ children, themeProps }) => {
  const router = useRouter()
  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </NextUIProvider>
  )
}
