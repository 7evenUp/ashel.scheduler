import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackgroundClipPath } from '../../components'
import { IdeasTabs } from './IdeasTabs'
import { palette, Text } from '../../theme/default'

const IdeasScreen = () => {
  return (
    <>
      <BackgroundClipPath backgroundColor={palette.yellow} angle='left'/>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text variant="hero">Пришла идея?</Text>
          <Text variant="hero">Запиши</Text>
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
})