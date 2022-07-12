import { StyleSheet, View } from 'react-native'
import React from 'react'
import theme, { Box, Text, Theme } from '../../../../theme/default'
import { backgroundColor, useTheme } from '@shopify/restyle'

type CardProps = {
  text?: string
}

const Card = ({text}: CardProps) => {
  const theme = useTheme<Theme>()

  return (
    <View style={styles.container}>
      <Box
        backgroundColor="cardBackground"
        shadowColor="shadow"
        elevation={4}
        shadowOpacity={100}
        paddingVertical="m"
        paddingHorizontal="xs"
        borderRadius={20}
        style={styles.cardWrapper}
      >
        <Text variant="card">Веб-приложение на React. Отслеживает передвижения всех друзей. Можно выбрать друга и создать кратчайший до него маршрут. {text}</Text>
      </Box>
      <Box mt="s">
        <Text>Web-приложение для отслеживания друзей</Text>
        <Text>07.07.2022</Text>
      </Box>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 0,
    flexBasis: '48%',
    justifyContent: 'space-between',
    backgroundColor: 'lightgreen',
    marginBottom: 24,
  },
  cardWrapper: {
    marginBottom: 0,
    height: 160
  }
})