import React, { useContext } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from '@shopify/restyle'
import { ThemeContext } from './ContextProvider'
import theme, { lightTheme } from './default'

const Theme = ({children}: {children: React.ReactNode}) => {
  const context = useContext(ThemeContext)
  
  return (
    <>
      <StatusBar style={context.isLightTheme ? 'dark' : 'light'} />
      <ThemeProvider theme={context.isLightTheme ? lightTheme : theme}>
        {children}
      </ThemeProvider>
    </>
  )
}

export default Theme