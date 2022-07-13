import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@shopify/restyle'
import { IdeasScreen, GoalsScreen, SettingsScreen } from '../screens'
import { palette, Theme } from '../theme/default'
import { AppRoutes } from './types'

const Tab = createBottomTabNavigator<AppRoutes>()

const AppTabs = () => {
  const theme = useTheme<Theme>()
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

const Stack = createStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={(props) => ({ headerShown: false })}>
        <Stack.Screen name="App" component={AppTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator