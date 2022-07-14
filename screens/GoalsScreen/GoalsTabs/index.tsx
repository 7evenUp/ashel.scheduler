import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { GoalsTabRoutes } from '../../../navigation/types'
import { useTopTabsScreenOptions } from '../../../hooks/useTopTabsScreenOptions'
import DayTab from './DayTab/DayTab'
import WeekTab from './WeekTab/WeekTab'
import MonthTab from './MonthTab/MonthTab'
import YearTab from './YearTab/YearTab'

const TopTab = createMaterialTopTabNavigator<GoalsTabRoutes>()

export const GoalsTabs = () => {
  const screenOptions = useTopTabsScreenOptions(4)

  return (
    <TopTab.Navigator
      screenOptions={screenOptions}
      sceneContainerStyle={{
        backgroundColor: 'rgba(0,0,0,0)'
      }}
    >
      <TopTab.Screen name="Day" component={DayTab} options={{tabBarLabel: 'День'}} />
      <TopTab.Screen name="Week" component={WeekTab} options={{tabBarLabel: 'Неделя'}} />
      <TopTab.Screen name="Month" component={MonthTab} options={{tabBarLabel: 'Месяц'}} />
      <TopTab.Screen name="Year" component={YearTab} options={{tabBarLabel: 'Год'}} />
    </TopTab.Navigator>
  )
}