import { Dimensions, StyleSheet, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Box, Theme } from '../../theme/default'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { useTheme } from '@shopify/restyle'
import { useDispatch } from 'react-redux'
import { add } from '../../store/goalsSlice'

type TodoPopupProps = {
  closePopup: () => void
}

const { width, height } = Dimensions.get('window')

const TodoPopup = ({closePopup}: TodoPopupProps) => {
  const theme = useTheme<Theme>()
  const inputRef = useRef<TextInput>(null)
  const dispatch = useDispatch()
  const [inputText, setInputText] = useState('')

  useEffect(() => {
    inputRef.current?.focus()
  }, [])
  
  return (
    <Box style={styles.container}>
      <Box style={styles.popup} backgroundColor='mainSubBackground' justifyContent='space-between'>
        <TextInput
          ref={inputRef}
          value={inputText}
          onChangeText={newText => setInputText(newText)}
          style={[
            styles.textInput,
            { color: theme.colors.mainText }
          ]}
          placeholder='Какая цель?'
          placeholderTextColor={theme.colors.supportText}
        />
        <Box flexDirection='row' justifyContent='space-between'>
          <TouchableOpacity
            style={[
              styles.popupBtn,
              {
                borderBottomLeftRadius: 25,
                backgroundColor: theme.colors.red
              }
            ]}
            onPress={closePopup}
          >
            <Text>Отмена</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.popupBtn,
              {
                borderBottomRightRadius: 25,
                backgroundColor: !inputText.length ? theme.colors.supportText : theme.colors.accent
              }
            ]}
            disabled={!inputText.length}
            onPress={() => {
              dispatch(add(inputText))
              closePopup()
            }}
          >
            <Text>Добавить</Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
  )
}

export default TodoPopup

const styles = StyleSheet.create({
  container: {
    width, height,
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    backgroundColor: 'rgba(0,0,0,.25)',
    zIndex: 100
  },
  popup: {
    marginTop: 40,
    borderRadius: 25,
    width: 300,
    height: 130
  },
  popupBtn: {
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255,255,0.1)',
    padding: 8,
    height: 50
  },
  textInput: {
    height: 80,
    padding: 8,
    textAlign: 'center'
  }
})