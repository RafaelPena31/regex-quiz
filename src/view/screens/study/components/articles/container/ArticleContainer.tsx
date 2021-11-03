import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { SetOpenedArticle } from '../../../../../../domain/redux/ArticleStore'
import { IArticle } from '../../../../../../domain/types/article'
import { colors } from '../../../../../style/colors'
import ArticleCardButton from './ArticleCardButton'

interface ArticleContainerProps {
  data: IArticle[]
}

export default function ArticleContainer({ data }: ArticleContainerProps) {
  const { navigate } = useNavigation()
  const dispatch = useDispatch()

  const onHandleNavigateArticleList = () =>
    navigate('Study', {
      screen: 'StudyList'
    })

  const onHandleNavigateArticlePage = (articleId: string) => {
    dispatch(SetOpenedArticle(articleId))

    navigate('Study', {
      screen: 'StudyArticle',
      params: {
        articleId
      }
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.labelContent}>
        <Text style={styles.label}>Artigos populares</Text>
        <TouchableOpacity onPress={onHandleNavigateArticleList}>
          <Text style={styles.button}>Veja mais</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
        {data.map(article => (
          <ArticleCardButton
            key={article.id}
            randomId={article.randomId}
            title={article.title}
            description={article.content}
            author={article.author}
            onPress={() => onHandleNavigateArticlePage(article.id)}
          />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 24
  },
  labelContent: {
    width: '100%',
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  label: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    lineHeight: 20,
    color: colors.text.default
  },
  button: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    lineHeight: 20,
    color: colors.primary.primary3
  },
  carousel: {
    width: '100%'
  }
})
