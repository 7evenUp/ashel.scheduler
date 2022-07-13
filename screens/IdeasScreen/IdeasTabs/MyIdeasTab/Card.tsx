import { StyleSheet, View } from 'react-native'
import React from 'react'
import theme, { Box, Text, Theme } from '../../../../theme/default'
import { useTheme } from '@shopify/restyle'

type CardProps = {
  content: string,
  title: string,
  date: string
}

const Card = ({ content, title, date }: CardProps) => {
  const theme = useTheme<Theme>()
  const slicedContent = content.length > 170 ? `${content.slice(0, 170)}...` : content
  const slicedTitle = title.length > 40 ? `${title.slice(0, 39)}...` : title

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
        <Text variant="card">{slicedContent}</Text>
      </Box>
      <Box mt="s" alignItems="center" width={"95%"}>
        <Text variant="cardTitle" textAlign="center">{slicedTitle}</Text>
        <Text variant="cardDate">{date}</Text>
      </Box>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 0,
    flexBasis: '48%',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  cardWrapper: {
    height: 195
  }
})