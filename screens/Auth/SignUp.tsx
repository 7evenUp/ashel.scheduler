import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SignUp = () => {
  const nav = useNavigation()
  return (
    <View>
      <Text>SignUp</Text>
      <Button title='To login' onPress={() => nav.navigate('Login')}/>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})