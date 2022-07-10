import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackgroundClipPath } from '../../components'
import { palette } from '../../theme/default'

const GoalsScreen = () => {
  return (
    <>
      <BackgroundClipPath backgroundColor={palette.red} angle='right'/>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Никаких планов</Text>
          <Text style={styles.text}>Только цели</Text>
        </View>
        
      </SafeAreaView>
    </>
  )
}

export default GoalsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 24
  }
})