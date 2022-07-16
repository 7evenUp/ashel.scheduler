import { Dimensions, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Box, Text, Theme } from '../../theme/default'
import { AntDesign } from '@expo/vector-icons'
import { useTheme } from '@shopify/restyle'

type TodoItemProps = {
  text: string
  statusProp?: 'completed' | 'canceled' | undefined
}

const { width } = Dimensions.get('window')
const ICON_SIZE = 22

const TodoItem = ({statusProp, text}: TodoItemProps) => {
  const [status, setStatus] = useState(statusProp)
  // const [completed, setCompleted] = useState(completedProp)
  // const [canceled, setCanceled] = useState(canceledProp)
  
  const theme = useTheme<Theme>()
  return (
    <Pressable
      onPress={() => {
        if (status === 'canceled') setStatus(undefined)
        else if (status === 'completed') setStatus(undefined)
        else setStatus('completed')
      }}
      style={({pressed}) => [
        {
          backgroundColor: pressed
            ? theme.colors.mainSubBackground
            : theme.colors.mainBackground
        },
        styles.container
      ]}>
      <Box
        flexDirection='row'
        alignItems='center'
        borderBottomWidth={1}
        borderBottomColor='mainSubBackground'
        paddingVertical='s'
        paddingHorizontal='xs'
      >
        {
          status === 'completed' ? <AntDesign name="checkcircle" size={ICON_SIZE} color={theme.colors.green} /> :
          status === 'canceled' ? <AntDesign name="closecircle" size={ICON_SIZE} color={theme.colors.red} /> :
          <Box style={styles.emptyTodoIcon} borderColor='todoBorder' />
        }
        <Text variant={status === 'completed' ? "todoItemCompleted" : status === 'canceled' ? "todoItemCanceled" : "todoItem"} ml="m">{text}</Text>
        { status !== 'completed' && status !== 'canceled' && (
          <Pressable
            onPress={() => {
              setStatus('canceled')
            }}
            style={({pressed}) => [
              {
                opacity: pressed ? 0.4 : 1
              },
              styles.closeBtn
            ]}>
            <AntDesign name="close" size={ICON_SIZE} color={theme.colors.red} />
          </Pressable>
        )}
      </Box>
    </Pressable>
  )
}

export default TodoItem

const styles = StyleSheet.create({
  container: {
    width: width,
    marginLeft: -12
  },
  emptyTodoIcon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: 50,
    borderWidth: 1,
  },
  closeBtn: {
    marginLeft: 'auto'
  }
})