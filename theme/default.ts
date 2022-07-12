import { createText, createBox, createTheme, shadow } from '@shopify/restyle'

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

    cardBackground: palette.blackLight,
    
    mainText: palette.white,
    supportText: palette.grey,
    
    shadow: palette.black,
    accentShadow: palette.blue,

    heroColor: palette.white,
    heroShadow: palette.black,

    black: '#000'
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
    hero: {
      fontFamily: 'Inter-Bold',
      fontSize: 24,
      color: 'heroColor',
      textShadowColor: 'heroShadow',
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 1
    },
    header: {
      fontFamily: 'Inter-Regular',
      fontSize: 24,
      color: 'mainText'
    },
    card: {
      fontFamily: 'Inter-Regular',
      fontSize: 12,
      color: 'mainText'
    },
    defaults: {
      fontFamily: 'Inter-Regular',
      fontSize: 14,
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

    cardBackground: palette.white,

    mainText: palette.black,

    shadow: palette.black
  }
}