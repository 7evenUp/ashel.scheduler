import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

// import {  } from 'firebaseui'

const Login = () => {
  const nav = useNavigation()
  return (
    <View>
      <Text>Login</Text>
      <Button title='To SignUp' onPress={() => nav.navigate('SignUp')}/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})