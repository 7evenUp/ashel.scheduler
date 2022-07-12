import { StyleSheet, View } from 'react-native'
import React from 'react'
import Card from './Card'

const MyIdeasTab = () => {
  return (
    <View style={styles.container}>
      <Card />
      <Card text="akadskds asdsd"/>
      {/* <Card /> */}
      <Card />
    </View>
  )
}

export default MyIdeasTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    justifyContent: 'space-between'
  }
})