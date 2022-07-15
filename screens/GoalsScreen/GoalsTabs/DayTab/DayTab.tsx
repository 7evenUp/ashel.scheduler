import { StyleSheet } from 'react-native'
import React from 'react'
import { Box, Text, Theme } from '../../../../theme/default'
import { AntDesign } from '@expo/vector-icons'
import { useTheme } from '@shopify/restyle'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { TodoItem } from '../../../../components'

const DayTab = () => {
  const theme = useTheme<Theme>()
  return (
    <Box flex={1} paddingHorizontal="xs" pt={"xl"}>
      <Box flexDirection="row" alignItems="center" justifyContent="space-between" mb='s'>
        <Box flexDirection="row" alignItems="baseline">
          <Text variant={"goalsTitle"} mr="ss">Сегодня</Text>
          <Text variant={"goalsDate"}>15.07.2022</Text>
        </Box>
        <TouchableOpacity onPress={() => console.log('PRESSED')}>
          <AntDesign name="pluscircle" size={24} color={theme.colors.accent} style={{top: 0}} />
        </TouchableOpacity>
      </Box>
      <TodoItem text='Купить молоко' />
      <TodoItem text='Сыграть в видеоигры' statusProp='canceled' />
      <TodoItem text='Отнести диплом в химчистку' statusProp='completed' />
    </Box>
  )
}

export default DayTab

const styles = StyleSheet.create({})