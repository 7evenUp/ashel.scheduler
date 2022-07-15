import { StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Shadow } from 'react-native-shadow-2'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useTheme } from '@shopify/restyle'
import { Box, Theme } from '../../theme/default'

type FloatingActionButtonProps = {
  onPress: () => void
}

const FloatingActionButton = ({ onPress }: FloatingActionButtonProps) => {
  const theme = useTheme<Theme>()
  
  return (
      <Box style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
          <Shadow startColor={theme.colors.accent} distance={2} radius={35}>
            <Box style={styles.iconWrapper} backgroundColor='mainSubBackground'>
              <MaterialIcons name="library-add" size={40} color={theme.colors.accent} />
            </Box>
          </Shadow>
        </TouchableOpacity>
      </Box>
  )
}

export default FloatingActionButton

const styles = StyleSheet.create({
  container: {
    width: 65,
    height: 65,
    position: 'absolute',
    right: 12,
    bottom: 16,
  },
  touchable: {
    width: 68,
    height: 68,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconWrapper: {
    width: 65,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  }
})