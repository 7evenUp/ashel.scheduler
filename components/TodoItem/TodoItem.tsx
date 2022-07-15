import { Dimensions, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Box, Text, Theme } from '../../theme/default'
import { AntDesign } from '@expo/vector-icons'
import { useTheme } from '@shopify/restyle'
import { TouchableOpacity } from 'react-native-gesture-handler'

type TodoItemProps = {
  completedProp?: boolean
  canceledProp?: boolean
}

const { width } = Dimensions.get('window')
const ICON_SIZE = 18

const TodoItem = ({completedProp, canceledProp}: TodoItemProps) => {
  const [completed, setCompleted] = useState(completedProp)
  const [canceled, setCanceled] = useState(canceledProp)
  
  const theme = useTheme<Theme>()
  return (
    <Pressable
      onPress={() => {
        if (canceled) {
          setCanceled(false)
        } else {
          setCompleted(!completed)
        }
        
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
          completed ? <AntDesign name="checkcircle" size={ICON_SIZE} color={theme.colors.green} /> :
          canceled ? <AntDesign name="closecircle" size={ICON_SIZE} color={theme.colors.red} /> :
          <Box style={styles.emptyTodoIcon} borderColor='todoBorder' />
        }
        <Text variant={completed ? "todoItemCompleted" : canceled ? "todoItemCanceled" : "todoItem"} ml="m">TodoItem</Text>
        { !completed && !canceled && (
          <Pressable
            onPress={() => {
              setCanceled(true)
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