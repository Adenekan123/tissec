'use client'

import { theme } from '@/styles/theme'
import {Header} from '@/component/home'
import { ThemeProvider } from '@mui/material'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <ThemeProvider theme={theme}>
        <Header/>
        {children}
      </ThemeProvider>
  )
}
