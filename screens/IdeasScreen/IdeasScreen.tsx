import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackgroundClipPath } from '../../components'
import IdeasTabs from './IdeasTabs'
import { palette } from '../../theme/default'

const IdeasScreen = () => {
  return (
    <>
      <BackgroundClipPath backgroundColor={palette.yellow} angle='left'/>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Пришла идея?</Text>
          <Text style={styles.text}>Запиши</Text>
        </View>
        <IdeasTabs />
      </SafeAreaView>
    </>
  )
}

export default IdeasScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    alignItems: 'center'
  },
  text: {
    color: 'black',
    fontSize: 24
  }
})