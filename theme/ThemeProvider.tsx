import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider as RestyleThemeProvider } from '@shopify/restyle'
import theme, { lightTheme } from './default'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const isLight = useSelector((state: RootState) => state.theme.isLight)
  
  return (
    <>
      <StatusBar style={isLight ? 'dark' : 'light'} />
      <RestyleThemeProvider theme={isLight ? lightTheme : theme}>
        {children}
      </RestyleThemeProvider>
    </>
  )
}

export default ThemeProvider