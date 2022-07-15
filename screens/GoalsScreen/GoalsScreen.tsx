import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackgroundClipPath, FloatingActionButton } from '../../components'
import { palette, Text } from '../../theme/default'
import { GoalsTabs } from './GoalsTabs'

const GoalsScreen = () => {
  return (
    <>
      <BackgroundClipPath backgroundColor={palette.red} angle='right'/>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text variant="hero">Никаких планов</Text>
          <Text variant="hero">Только цели</Text>
        </View>
        <GoalsTabs />
      </SafeAreaView>
      <FloatingActionButton onPress={() => console.log('Create new')} />
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
})