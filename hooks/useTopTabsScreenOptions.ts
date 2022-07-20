import { Dimensions } from 'react-native'
import { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs'
import { useTheme } from '@shopify/restyle'
import { Theme } from '../theme/default'

// Хук для получения стилей для Navigation/MaterialTopTabs

export const useTopTabsScreenOptions = (routesQty: number): MaterialTopTabNavigationOptions => {
  const theme = useTheme<Theme>()
  const { width } = Dimensions.get('window')
  const HORIZONTAL_MARGIN = theme.spacing.xs
  const HORIZONTAL_PADDING = theme.spacing.s
  const NAV_WIDTH = width - HORIZONTAL_MARGIN * 2
  const NAV_WIDTH_WITH_PADDING = NAV_WIDTH - HORIZONTAL_PADDING * 2
  const NAV_TAB_WIDTH = NAV_WIDTH_WITH_PADDING / routesQty
  const INDICATOR_HEIGHT = 39
  const BAR_HEIGHT = 55
  const BORDER_RADIUS = 25

  return {
    tabBarStyle: {
      height: BAR_HEIGHT,
      width: NAV_WIDTH,
      borderRadius: BORDER_RADIUS,
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop: theme.spacing.xl,
      backgroundColor: theme.colors.mainSubBackground,
      elevation: 0, // remove shadow on Android
      shadowOpacity: 0, // remove shadow on iOS
    },
    tabBarContentContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    tabBarPressColor: theme.colors.mainSubBackground,
    tabBarItemStyle: {
      padding: 0,
      width: NAV_TAB_WIDTH
    },
    tabBarActiveTintColor: theme.colors.mainText,
    tabBarInactiveTintColor: theme.colors.supportText,
    tabBarLabelStyle: {
      fontSize: 14,
      textTransform: 'capitalize'
    },
    tabBarIndicatorContainerStyle: {
      width: NAV_WIDTH_WITH_PADDING,
      left: HORIZONTAL_PADDING
    },
    tabBarIndicatorStyle: {
      height: INDICATOR_HEIGHT,
      top: BAR_HEIGHT / 2 - INDICATOR_HEIGHT / 2,
      borderRadius: BORDER_RADIUS,
      backgroundColor: theme.colors.mainBackground,
    }
  }
}