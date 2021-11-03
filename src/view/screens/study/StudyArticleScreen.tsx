import { RouteProp, useNavigation } from '@react-navigation/native'
import moment from 'moment'
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useArticleById } from '../../../domain/hooks/ArticleHook'
import images from '../../assets/images'
import BackButton from '../../components/shared/buttons/BackButton'
import { colors } from '../../style/colors'
import { helperRealHeightDimension } from '../../style/UIGlobalHelper'

interface NavigationParams {
  articleId: string
}

type QuestionChallengerScreenProps = {
  route: RouteProp<Record<string, NavigationParams>, 'RouteParam'>
}

const currentHeight = helperRealHeightDimension()

const { coverArticleStudent } = images.hall

export default function StudyArticleScreen({ route }: QuestionChallengerScreenProps) {
  const { goBack } = useNavigation()
  const { articleId } = route.params

  const article = useArticleById(articleId)

  const getPublishDate = () => {
    return moment().format('DD.MM.YYYY')
  }

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.backButton}>
            <BackButton onPress={goBack} />
          </View>
        </View>

        <Image style={styles.coverImage} source={coverArticleStudent} />

        <View style={styles.content}>
          <Text style={styles.dateText}>{getPublishDate()}</Text>
          <Text style={styles.title}>{article?.title}</Text>

          <View style={styles.line} />

          <Text style={styles.articleTitle}>{article?.title}</Text>
          <Text style={styles.articleText}>{article?.content}</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    minHeight: currentHeight,
    paddingVertical: 24
  },
  header: {
    paddingHorizontal: 16
  },
  backButton: {
    marginLeft: -8
  },
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 36,
    lineHeight: 40,
    color: colors.text.default,
    marginTop: 16
  },
  coverImage: {
    width: '100%',
    marginTop: 16
  },
  line: {
    height: 1,
    backgroundColor: colors.text.default4,
    marginVertical: 16
  },
  content: {
    paddingHorizontal: 16,
    marginTop: -24
  },
  dateText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    lineHeight: 18,
    color: colors.text.default2
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 32,
    lineHeight: 40,
    color: colors.text.default,
    marginTop: 8
  },
  articleTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    lineHeight: 24,
    color: colors.text.default,
    marginBottom: 8
  },
  articleText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    lineHeight: 22,
    color: colors.text.default3
  }
})
