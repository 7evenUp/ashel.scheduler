import React, { createContext, useState } from 'react'

export const ThemeContext = createContext({
  isLightTheme: false,
  changeTheme: (value: boolean) => {}
})

const ContextProvider = ({children}: {children: React.ReactNode}) => {
  const [lightTheme, setLightTheme] = useState(false)
  return (
    <ThemeContext.Provider value={{
      isLightTheme: lightTheme,
      changeTheme: (value: boolean) => setLightTheme(value)
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ContextProvider