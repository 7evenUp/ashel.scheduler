import { Dimensions, ScrollView, StyleSheet } from 'react-native'
import Card from './Card'
import { useTheme } from '@shopify/restyle'
import { Box, Theme } from '../../../../theme/default'

const ideas = [
  {
    id: 0,
    content: 'Веб-приложение на React. Отслеживает передвижения всех друзей. Можно выбрать друга и создать кратчайший до него маршрут.',
    title: 'Web-приложение для отслеживания друзей',
    date: '07.07.2022'
  },
  {
    id: 1,
    content: 'Выкладывать видео уроки. Регистрация пользователей. VIP-подписка (Преимум тренировки, план питания, и т.д.) Возможность создания собственных тренировок. Тренировки может добавлять каждый. Далее тренировкам других людей можно ставить лайки, репостить',
    title: 'Мобильное приложение для тренировок по футболу',
    date: '27.11.2020'
  },
  {
    id: 2,
    content: 'Очень длинное название Вот тут список будет: Список Лист Кучерявый А тут я буду писать жирным, а нет - курсивом',
    title: 'Просто очень длинное название, чтобы показать вам как это выглядит',
    date: '13.07.2022'
  }
]

const MyIdeasTab = () => {
  const theme = useTheme<Theme>()

  return (
    <ScrollView style={{
      width: Dimensions.get('window').width,
      marginTop: theme.spacing.m,
      paddingTop: theme.spacing.m,
      borderTopWidth: 1,
      borderTopColor: theme.colors.mainSubBackground
    }}>
      <Box
        paddingHorizontal='xs'
        style={styles.container}
      >
        {ideas.map(idea => (
          <Card key={idea.id} {...idea} />
        ))}
      </Box>
    </ScrollView>
  )
}

export default MyIdeasTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  }
})