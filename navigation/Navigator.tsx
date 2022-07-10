import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { IdeasScreen, GoalsScreen } from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: 'bulb-outline' | 'list-outline' | '' = 'bulb-outline'
  
            if (route.name === 'ideas') iconName = 'bulb-outline' 
            else if (route.name === 'goals') iconName = 'list-outline'
  
            return <Ionicons name={iconName} size={30} color={color} />;
          },
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: '#7DD0FF',
          tabBarInactiveTintColor: '#F1F1F1',
          tabBarStyle: { backgroundColor: '#2C2C2C', borderTopColor: '#212121', paddingVertical: 0 },
          headerShown: false,
          tabBarShowLabel: false
        })}
        sceneContainerStyle={{
          backgroundColor: '#212121',
          flex: 1,
        }}
      >
        <Tab.Screen name='ideas' component={IdeasScreen} />
        <Tab.Screen name='goals' component={GoalsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})