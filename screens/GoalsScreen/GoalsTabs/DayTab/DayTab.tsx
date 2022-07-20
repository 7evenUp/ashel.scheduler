import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { AntDesign } from '@expo/vector-icons'
import { useTheme } from '@shopify/restyle'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Box, Text, Theme } from '../../../../theme/default'
import { TodoItem, TodoPopup } from '../../../../components'
import { RootState } from '../../../../store/store'
import { useDate } from '../../../../hooks/useDate'

const DayTab = () => {
  const theme = useTheme<Theme>()
  const [popupOpened, setPopupOpened] = useState(false)
  const goals = useSelector((state: RootState) => state.goals.value)
  const date = useDate()
  
  console.log('GOALS: ', goals)
  return (
    <>
      {popupOpened && <TodoPopup closePopup={() => setPopupOpened(false)} />}
      <Box flex={1} paddingHorizontal="xs" pt={"xl"}>
        <Box flexDirection="row" alignItems="center" justifyContent="space-between" mb='s'>
          <Box flexDirection="row" alignItems="baseline">
            <Text variant={"goalsTitle"} mr="s">Сегодня</Text>
            <Text variant={"goalsDate"}>{date}</Text>
          </Box>
          <TouchableOpacity onPress={() => setPopupOpened(true)}>
            <AntDesign name="pluscircle" size={30} color={theme.colors.accent} />
          </TouchableOpacity>
        </Box>
        {[...goals].reverse().map(goal => (
          <TodoItem key={goal.id} id={goal.id} title={goal.title} status={goal.status} />
        ))}
      </Box>
    </>
  )
}

export default DayTab