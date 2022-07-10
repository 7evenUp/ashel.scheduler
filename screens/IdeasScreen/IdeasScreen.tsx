import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const IdeasScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Пришла идея? Запиши</Text>
    </View>
  )
}

export default IdeasScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})