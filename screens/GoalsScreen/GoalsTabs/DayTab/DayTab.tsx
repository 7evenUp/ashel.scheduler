import { StyleSheet } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AntDesign } from '@expo/vector-icons'
import { useTheme } from '@shopify/restyle'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Box, Text, Theme } from '../../../../theme/default'
import { TodoItem } from '../../../../components'
import { RootState } from '../../../../store/store'
import { pushGoal } from '../../../../store/goalsSlice'

const DayTab = () => {
  const theme = useTheme<Theme>()
  const goals = useSelector((state: RootState) => state.goals.value)
  const dispatch = useDispatch()
  console.log('GOALS: ', goals)
  return (
    <Box flex={1} paddingHorizontal="xs" pt={"xl"}>
      <Box flexDirection="row" alignItems="center" justifyContent="space-between" mb='s'>
        <Box flexDirection="row" alignItems="baseline">
          <Text variant={"goalsTitle"} mr="ss">Сегодня</Text>
          <Text variant={"goalsDate"}>15.07.2022</Text>
        </Box>
        <TouchableOpacity onPress={() => dispatch(pushGoal({title: 'Todo item', status: 'completed'}))}>
          <AntDesign name="pluscircle" size={30} color={theme.colors.accent} />
        </TouchableOpacity>
      </Box>
      {goals.map((goal, i) => (
        <TodoItem key={i} text={goal.title} statusProp={goal.status} />
      ))}

      
      <TodoItem text='Сыграть в видеоигры' statusProp='canceled' />
      <TodoItem text='Отнести диплом в химчистку' statusProp='completed' />
    </Box>
  )
}

export default DayTab

const styles = StyleSheet.create({})