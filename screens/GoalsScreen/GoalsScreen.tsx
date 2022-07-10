import { Dimensions, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackgroundClipPath } from '../../components'
import { palette } from '../../theme/default'

const GoalsScreen = () => {
  const {width, height} = Dimensions.get('window')

  return (
    <>
      <BackgroundClipPath backgroundColor={palette.red} angle='right'/>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Никаких планов</Text>
        <Text style={styles.text}>Только цели</Text>
        <Text style={styles.text}>Width: {width}</Text>
        <Text style={styles.text}>Height: {height}</Text>
      </SafeAreaView>
    </>
  )
}

export default GoalsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 24
  }
})