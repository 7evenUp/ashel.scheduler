import { Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { GoalsTabRoutes } from '../../../navigation/types'
import { useTopTabsScreenOptions } from '../../../hooks/useTopTabsScreenOptions'

const TopTab = createMaterialTopTabNavigator<GoalsTabRoutes>()

const A = () => <Text>A</Text>
const B = () => <Text>B</Text>
const C = () => <Text>C</Text>
const D = () => <Text>D</Text>

export const GoalsTabs = () => {
  const screenOptions = useTopTabsScreenOptions(4)

  return (
    <TopTab.Navigator
      screenOptions={screenOptions}
      sceneContainerStyle={{
        backgroundColor: 'rgba(0,0,0,0)'
      }}
    >
      <TopTab.Screen name="Day" component={A} options={{tabBarLabel: 'День'}} />
      <TopTab.Screen name="Week" component={B} options={{tabBarLabel: 'Неделя'}} />
      <TopTab.Screen name="Month" component={C} options={{tabBarLabel: 'Месяц'}} />
      <TopTab.Screen name="Year" component={D} options={{tabBarLabel: 'Год'}} />
    </TopTab.Navigator>
  )
}