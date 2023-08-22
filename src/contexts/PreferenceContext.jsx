import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { createContext, useEffect, useState } from 'react'

const preferenceThemeStorage = localStorage.getItem('themeMode') || 'light'

export const PreferenceContext = createContext({
  mode: preferenceThemeStorage,
  setMode: () => {}
})

export function PreferenceProvider({ children }) {
  const [mode, setMode] = useState(preferenceThemeStorage)

  useEffect(() => {
    localStorage.setItem('themeMode', mode)
  }, [mode])

  const theme = createTheme({
    palette: {
      mode
    }
  })

  return (
    <PreferenceContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </PreferenceContext.Provider>
  )
}
