import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@shopify/restyle'
import { IdeasScreen, GoalsScreen, SettingsScreen } from '../screens'
import { palette, Theme } from '../theme/default'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab = createBottomTabNavigator()

const Navigator = () => {
  const theme = useTheme<Theme>()

  return (
    <NavigationContainer>
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
          name='ideas'
          component={IdeasScreen}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name={'bulb-outline'} size={30} color={color} />,
            tabBarActiveTintColor: palette.yellow,
          }}
        />
        <Tab.Screen
          name='goals'
          component={GoalsScreen}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name={'list-outline'} size={40} color={color} />,
            tabBarActiveTintColor: palette.red,
          }}
        />
        <Tab.Screen
          name='settings'
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name={'settings-outline'} size={30} color={color} />,
            tabBarActiveTintColor: palette.green,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigator