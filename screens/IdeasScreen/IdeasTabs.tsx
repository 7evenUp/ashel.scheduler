import { Dimensions, StyleSheet, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useTheme } from '@shopify/restyle'
import { Theme } from '../../theme/default'

const A = () => {
  return <Text style={{backgroundColor: 'red'}}>ABC</Text>
}

const B = () => {
  return <Text>BAC</Text>
}

const C = () => {
  return <Text>CAB</Text>
}

const TopTab = createMaterialTopTabNavigator()

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
          marginVertical: theme.spacing.xl,
          backgroundColor: theme.colors.mainSubBackground
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
      <TopTab.Screen name="Мои идеи" component={A}/>
      <TopTab.Screen name="Поток мыслей" component={B}/>
      <TopTab.Screen name="Новая +" component={C}/>
    </TopTab.Navigator>
  )
}

export default IdeasTabs

const styles = StyleSheet.create({})