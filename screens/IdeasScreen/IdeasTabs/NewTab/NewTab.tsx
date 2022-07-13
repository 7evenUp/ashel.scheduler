import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { useTheme } from '@shopify/restyle'
import theme, { Theme } from '../../../../theme/default'

const NewTab = () => {
  const theme = useTheme<Theme>()
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Название'
        placeholderTextColor={theme.colors.supportText}
        style={{
          color: theme.colors.mainText,
          fontSize: 18,
          fontFamily: 'Inter-Regular',
          padding: theme.spacing.ss,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.supportText
        }}
      />
    </View>
  )
}

export default NewTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.xs,
    marginTop: theme.spacing.l
  },
  input: {
    
  }
})