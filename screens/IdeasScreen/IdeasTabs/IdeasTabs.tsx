import { Dimensions, StyleSheet, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useTheme } from '@shopify/restyle'
import MyIdeasTab from './MyIdeasTab/MyIdeasTab'
import StreamTab from './StreamTab/StreamTab'
import NewTab from './NewTab/NewTab'
import { Theme } from '../../../theme/default'
import { IdeasTabRoutes } from '../../../navigation/types'

const TopTab = createMaterialTopTabNavigator<IdeasTabRoutes>()

const { width } = Dimensions.get('window')
const HORIZONTAL_MARGIN = 12
const HORIZONTAL_PADDING = 8
const AMOUNT_OF_ROUTES = 3
const NAV_WIDTH = width - HORIZONTAL_MARGIN * 2
const NAV_WIDTH_WITH_PADDING = NAV_WIDTH - HORIZONTAL_PADDING * 2
const NAV_TAB_WIDTH = NAV_WIDTH_WITH_PADDING / AMOUNT_OF_ROUTES

const IdeasTabs = () => {
  const theme = useTheme<Theme>()
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 55,
          width: NAV_WIDTH,
          borderRadius: 25,
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
          height: 39,
          top: 55 / 2 - 39 / 2,
          borderRadius: 25,
          backgroundColor: theme.colors.mainBackground,
        }
      }}
      sceneContainerStyle={{
        backgroundColor: 'rgba(0,0,0,0)'
      }}
    >
      <TopTab.Screen name="MyIdeas" component={MyIdeasTab} options={{tabBarLabel: 'Мои идеи'}} />
      <TopTab.Screen name="Stream" component={StreamTab} options={{tabBarLabel: 'Поток мыслей'}} />
      <TopTab.Screen name="New" component={NewTab} options={{tabBarLabel: 'Новая +'}} />
    </TopTab.Navigator>
  )
}

export default IdeasTabs

const styles = StyleSheet.create({})