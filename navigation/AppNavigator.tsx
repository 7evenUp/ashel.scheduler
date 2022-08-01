import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@shopify/restyle'
import { IdeasScreen, GoalsScreen, SettingsScreen } from '../screens'
import { palette, Text, Theme } from '../theme/default'
import { AppRoutes } from './types'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import { useDate } from '../hooks/useDate'
import { RootState } from '../store/store'
import { createNewDay } from '../store/goalsSlice'

const Tab = createBottomTabNavigator<AppRoutes>()

const AppTabs = () => {
  const [loading, setLoading] = useState(true)
  const theme = useTheme<Theme>()
  const dispatch = useDispatch()
  const todayStr = useDate()
  const goals = useSelector((state: RootState) => state.goals.value)
  useEffect(() => {
    const getAllKeys = async () => {
      let keys: readonly string[] = []
      try {
        keys = await AsyncStorage.getAllKeys()
      } catch(e) {
        console.error(e)
      }
      console.log('ASYNC STORAGE GET ITEM')
      console.log(await AsyncStorage.getItem("persist:root"))
    
      console.log('ASYNC STORAGE KEYS')
      console.log(keys)
    }

    console.log('=============== App is Loading ===============')

    // if (todayStr in goals)
    if (goals.hasOwnProperty(todayStr)) {
      console.log('содержит')
    } else {
      dispatch(createNewDay())
      console.log('Ne soderzhit')
    }

    console.log('=============== App is Loaded ===============')

    getAllKeys()
    setLoading(false)
  }, [])

  if (loading) return null
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: palette.whiteDark,
        tabBarStyle: {
          backgroundColor: palette.blackLight,
          borderTopColor: palette.black,
          paddingVertical: 0
        },
        headerShown: false,
        tabBarShowLabel: false
      })}
      sceneContainerStyle={{
        backgroundColor: theme.colors.mainBackground,
        flex: 1,
      }}
      initialRouteName='Goals'
    >
      <Tab.Screen
        name='Ideas'
        component={IdeasScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name={'bulb-outline'} size={30} color={color} />,
          tabBarActiveTintColor: palette.yellow,
        }}
      />
      <Tab.Screen
        name='Goals'
        component={GoalsScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name={'list-outline'} size={40} color={color} />,
          tabBarActiveTintColor: palette.red,
        }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name={'settings-outline'} size={30} color={color} />,
          tabBarActiveTintColor: palette.green,
        }}
      />
    </Tab.Navigator>
  )
}

const RootStack = createStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={(props) => ({ headerShown: false })}>
        <RootStack.Screen name="App" component={AppTabs} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator