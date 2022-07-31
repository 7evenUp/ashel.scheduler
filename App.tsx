import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as NavigationBar from 'expo-navigation-bar'
import AppNavigator from './navigation/AppNavigator'
import { palette } from './theme/default'
import ThemeProvider from './theme/ThemeProvider'
import { useFonts } from 'expo-font'
import { persistor, store } from './store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { AppLoading } from './components'

const fonts = {
  'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
  'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
}

export default function App() {
  NavigationBar.setBackgroundColorAsync(palette.blackLight)
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) return null

  return (
    <Provider store={store}>
      {/* <PersistGate loading={<AppLoading />} persistor={persistor} > */}
        <ThemeProvider>
          <SafeAreaProvider>
            <AppNavigator />
          </SafeAreaProvider>
        </ThemeProvider>
      {/* </PersistGate> */}
    </Provider>
  )
}
