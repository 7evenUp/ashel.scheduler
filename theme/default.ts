import { createText, createBox, createTheme } from '@shopify/restyle'

export const palette = {
  blue: '#7DD0FF',
  red: '#FF7D7E',
  green: '#9FFF7D',
  yellow: '#FEF279',
  black: '#212121',
  blackLight: '#2C2C2C',
  white: '#fff',
  whiteDark: '#F1F1F1',
  grey: '#AAAAAA',
}

const theme = createTheme({
  colors: {
    mainBackground: palette.black,
    mainSubBackground: palette.blackLight,
    
    mainText: palette.white,
    supportText: palette.grey,
    
    shadow: palette.black,
    accentShadow: palette.blue
  },
  spacing: {
    s: 8,
    xs: 12,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    header: {
      fontFamily: 'Inter-Regular',
      fontSize: 24,
      color: 'mainText'
    }
  }
})

export type Theme = typeof theme
export const Text = createText<Theme>()
export const Box = createBox<Theme>()
export default theme

export const lightTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: palette.white,
    mainSubBackground: palette.whiteDark,

    mainText: palette.black,

    shadow: palette.whiteDark
  }
}