import { Button, StyleSheet, Switch } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemeContext } from '../../theme/ContextProvider'
import { Text } from '../../theme/default'
import { useNavigation } from '@react-navigation/native'

const SettingsScreen = () => {
  const context = useContext(ThemeContext)
  const nav = useNavigation()
  return (
    <SafeAreaView>
      <Text variant='header'>Settings</Text>
      <Switch
        value={context.isLightTheme}
        onValueChange={(value: boolean) => context.changeTheme(value)}
      />
      <Button title="Go to Auth" onPress={() => nav.navigate('Auth')} />
    </SafeAreaView>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  
})