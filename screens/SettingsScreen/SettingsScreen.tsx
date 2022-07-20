import { Button, Dimensions, StyleSheet, Switch } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Box, Text, Theme } from '../../theme/default'
import { useNavigation } from '@react-navigation/native'
import { persistor, RootState } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../../store/themeSlice'
import { useTheme } from '@shopify/restyle'

const {width} = Dimensions.get('window')

const SettingsScreen = () => {
  const nav = useNavigation()
  const theme = useTheme<Theme>()
  const dispatch = useDispatch()
  const isLightTheme = useSelector((state: RootState) => state.theme.isLight)

  return (
    <SafeAreaView>
      <Box alignItems='center'>
        <Text variant='header'>Настройки</Text>
        <Box
          backgroundColor='mainSubBackground'
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
          width={width}
          paddingHorizontal='xs'
          marginVertical='m'
        >
          <Text>Тема приложения: {isLightTheme ? 'Светлая' : 'Тёмная'}</Text>
          <Switch
            value={isLightTheme}
            onValueChange={(value: boolean) => { dispatch(changeTheme()) }}
            thumbColor={isLightTheme ? theme.colors.accent : theme.colors.mainText}
            trackColor={{false: theme.colors.mainBackground, true: theme.colors.accentLight}}
          />
        </Box>
        <Button title="Удалить кэш" onPress={async () => {
          console.log('Clicked')
          await persistor.purge()
      }} />
      </Box>
      
    </SafeAreaView>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  
})