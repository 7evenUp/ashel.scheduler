import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AntDesign } from '@expo/vector-icons'
import { useTheme } from '@shopify/restyle'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Box, Text, Theme } from '../../../../theme/default'
import { TodoItem, TodoPopup } from '../../../../components'
import { RootState } from '../../../../store/store'
import { useDate } from '../../../../hooks/useDate'
import { add } from '../../../../store/goalsSlice'

const DayTab = () => {
  const theme = useTheme<Theme>()
  const [popupOpened, setPopupOpened] = useState(false)
  const goals = useSelector((state: RootState) => state.goals.value)
  const date = useDate()
  
  console.log('GOALS: ', goals)
  return (
    <>
      {popupOpened && <TodoPopup closePopup={() => setPopupOpened(false)} />}
      <ScrollView>
      <Box flex={1} paddingHorizontal="xs" pt={"xl"}>
        <Box>
          <Box flexDirection="row" alignItems="center" justifyContent="space-between" mb='s'>
            <Box flexDirection="row" alignItems="baseline">
              <Text variant={"goalsTitle"} mr="s">Сегодня</Text>
              <Text variant={"goalsDate"}>{date}</Text>
            </Box>
            <TouchableOpacity onPress={() => setPopupOpened(true)}>
              <AntDesign name="pluscircle" size={30} color={theme.colors.accent} />
            </TouchableOpacity>
          </Box>
          {[...goals[date]].reverse().map(goal => (
            <TodoItem key={goal.id} id={goal.id} title={goal.title} status={goal.status} />
          ))}
        </Box>
        <Box>
          {Object.entries(goals).map((item, i) => {
            if (item[0] !== date) return (
              <Box key={i}>
                <Text variant={"goalsTitle"} marginVertical='s'>{item[0]}</Text>
                {item[1].map(goal => (
                  <TodoItem key={goal.id} id={goal.id} title={goal.title} status={goal.status} disabled />
                ))}
              </Box>
            )
          })}
        </Box>
      </Box>
      </ScrollView>
      
    </>
  )
}

export default DayTab