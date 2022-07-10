import { Dimensions, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackgroundClipPath } from '../../components'
import { palette } from '../../theme/default'

const IdeasScreen = () => {
  const {width, height} = Dimensions.get('window')
  return (
    <>
      <BackgroundClipPath backgroundColor={palette.yellow} angle='left'/>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Пришла идея? Запиши</Text>
        <Text style={styles.text}>Width: {width}</Text>
        <Text style={styles.text}>Height: {height}</Text>
      </SafeAreaView>
    </>
  )
}

export default IdeasScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: 'white',
    fontSize: 24
  }
})