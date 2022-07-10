import { StyleSheet, Switch } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemeContext } from '../../theme/ContextProvider'
import { Text } from '../../theme/default'

const SettingsScreen = () => {
  const context = useContext(ThemeContext)
  return (
    <SafeAreaView>
      <Text variant='header'>Settings</Text>
      <Switch
        value={context.isLightTheme}
        onValueChange={(value: boolean) => context.changeTheme(value)}
      />
    </SafeAreaView>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  
})