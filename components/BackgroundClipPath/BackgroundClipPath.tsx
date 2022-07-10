import { Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

type BackgroundClipPathProps = {
  backgroundColor: string
  angle: 'left' | 'right'
}

const BackgroundClipPath = ({ backgroundColor, angle }: BackgroundClipPathProps) => {
  const { width } = Dimensions.get('window')
  const isLeft = angle === 'left' ? true : false

  return (
    <Svg
      width={width}
      height={161.5}
      viewBox={`0 0 ${width} 161.5`}
      fill={backgroundColor}
      stroke={backgroundColor}
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={styles.svg}
    >
      <Path d={`M 0 0 L ${width} 0 L ${width} ${isLeft ? 106 : 161.5} L 0 ${isLeft ? 161.5 : 106} L 0 0`} />
    </Svg>
  )
}

export default BackgroundClipPath

const styles = StyleSheet.create({
  svg: {
    position: 'absolute'
  }
})