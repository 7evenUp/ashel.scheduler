import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MyIdeasTab from './MyIdeasTab/MyIdeasTab'
import StreamTab from './StreamTab/StreamTab'
import NewTab from './NewTab/NewTab'
import { IdeasTabRoutes } from '../../../navigation/types'
import { useTopTabsScreenOptions } from '../../../hooks/useTopTabsScreenOptions'

const TopTab = createMaterialTopTabNavigator<IdeasTabRoutes>()

export const IdeasTabs = () => {
  const screenOptions = useTopTabsScreenOptions(3)
  return (
    <TopTab.Navigator
      screenOptions={screenOptions}
      sceneContainerStyle={{ backgroundColor: 'rgba(0,0,0,0)' }}
    >
      <TopTab.Screen name="MyIdeas" component={MyIdeasTab} options={{tabBarLabel: 'Мои идеи'}} />
      <TopTab.Screen name="Stream" component={StreamTab} options={{tabBarLabel: 'Поток мыслей'}} />
      <TopTab.Screen name="New" component={NewTab} options={{tabBarLabel: 'Новая +'}} />
    </TopTab.Navigator>
  )
}