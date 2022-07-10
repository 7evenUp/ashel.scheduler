import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as NavigationBar from 'expo-navigation-bar'
import Navigator from './navigation/Navigator'

export default function App() {
  NavigationBar.setBackgroundColorAsync("#2C2C2C")
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </>
  )
}
