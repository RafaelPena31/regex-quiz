import { useNavigation } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { useOpenedArticle } from '../../../../../../domain/hooks/ArticleHook'
import { SetOpenedArticle } from '../../../../../../domain/redux/ArticleStore'
import { colors } from '../../../../../style/colors'
import OpenedArticleCardButton from './OpenedArticleCardButton'

export default function OpenedArticleContainer() {
  const articleList = useOpenedArticle()
  const dispatch = useDispatch()

  const { navigate } = useNavigation()

  const onHandleNavigateArticlePage = useCallback((articleId: string) => {
    dispatch(SetOpenedArticle(articleId))

    navigate('Study', {
      screen: 'StudyArticle',
      params: {
        articleId
      }
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Artigos que você abriu</Text>

      <FlatList
        data={articleList}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <OpenedArticleCardButton
            key={item.id}
            title={item.title}
            author={item.author}
            date={item.publishedAt}
            coverLink={item.coverLink}
            onPress={() => onHandleNavigateArticlePage(item.id)}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24
  },
  label: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: colors.text.default,
    marginBottom: 8
  }
})
