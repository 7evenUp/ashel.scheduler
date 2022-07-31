import { Dimensions, StyleSheet, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useTheme } from '@shopify/restyle'
import { useDispatch } from 'react-redux'
import { changeStatus, GoalType } from '../../store/goalsSlice'
import { Box, Text, Theme } from '../../theme/default'

const { width } = Dimensions.get('window')
const ICON_SIZE = 22

type TodoItemProps = { disabled?: boolean } & GoalType

const TodoItem = ({id, title, status, disabled}: TodoItemProps) => {
  const dispatch = useDispatch()
  const theme = useTheme<Theme>()

  return (
    <Pressable
      disabled={disabled}
      onPress={() => {
        if (status === 'canceled') dispatch(changeStatus({id, status: undefined}))
        else if (status === 'completed') dispatch(changeStatus({id, status: undefined}))
        else dispatch(changeStatus({id, status: 'completed'}))
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
        <Text
          variant={
            status === 'completed' ? "todoItemCompleted" :
            status === 'canceled' ? "todoItemCanceled" : "todoItem"
          }
          ml="m"
          style={{marginRight: theme.spacing.xs * 2 + ICON_SIZE + theme.spacing.m}}
        >{title}</Text>
        { status === undefined && (
          <Pressable
            onPress={() => dispatch(changeStatus({id, status: 'canceled'}))}
            style={({pressed}) => [
              { opacity: pressed ? 0.4 : 1 },
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