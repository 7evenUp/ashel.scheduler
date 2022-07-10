import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const GoalsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Никаких планов</Text>
      <Text>Только цели</Text>
    </SafeAreaView>
  )
}

export default GoalsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})