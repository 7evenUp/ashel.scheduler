import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as NavigationBar from 'expo-navigation-bar'
import AppNavigator from './navigation/AppNavigator'
import ContextProvider from './theme/ContextProvider'
import { palette } from './theme/default'
import Theme from './theme/Theme'
import { useFonts } from 'expo-font'
import { persistor, store } from './store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { AppLoading } from './components'

// 1. Complete theme            |+|
// 2. Create Setting Screen     |+|
// 3. Create Top Tabs Navigator |+|


const fonts = {
  'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
  'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
}

export default function App() {
  NavigationBar.setBackgroundColorAsync(palette.blackLight)
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) return null

  return (
    <ContextProvider>
      <Provider store={store}>
        <PersistGate loading={<AppLoading />} persistor={persistor} >
          <Theme>
            <SafeAreaProvider>
              <AppNavigator />
            </SafeAreaProvider>
          </Theme>
        </PersistGate>
        
      </Provider>
    </ContextProvider>
  )
}
