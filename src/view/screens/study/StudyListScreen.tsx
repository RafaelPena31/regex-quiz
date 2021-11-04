import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { IArticle } from '../../../data/services/server/article/ArticleTypes'
import { useArticle, useArticlePage } from '../../../domain/hooks/ArticleHook'
import { SetOpenedArticle } from '../../../domain/redux/ArticleStore'
import BackButton from '../../components/shared/buttons/BackButton'
import { colors } from '../../style/colors'
import { helperRealHeightDimension } from '../../style/UIGlobalHelper'
import OpenedArticleCardButton from './components/articles/opened/OpenedArticleCardButton'

const currentHeight = helperRealHeightDimension()

export default function StudyListScreen() {
  const { goBack, navigate } = useNavigation()
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)

  const cacheArticleList = useArticlePage(page)

  const [articleList, setArticleList] = useState<IArticle[]>(cacheArticleList)

  const completeArticleList = useArticle()

  const onHandleLoadArticle = () => {
    const newPage = page + 1
    const newList = completeArticleList.slice(newPage * 4 - 4, newPage * 4)

    setPage(state => state + 1)
    setArticleList([...articleList, ...newList])
  }

  const onHandleNavigateArticlePage = useCallback(
    (articleId: string) => {
      dispatch(SetOpenedArticle(articleId))

      navigate('Study', {
        screen: 'StudyArticle',
        params: {
          articleId
        }
      })
    },
    [dispatch, navigate]
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backButton}>
          <BackButton onPress={goBack} />
        </View>
        <Text style={styles.headerTitle}>Artigos</Text>
      </View>

      <View style={styles.labelContent}>
        <Text style={styles.label}>Artigos populares</Text>
      </View>

      <View style={styles.contentCard}>
        <FlatList
          data={articleList}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          onEndReached={() => onHandleLoadArticle()}
          onEndReachedThreshold={0.1}
          style={{ marginBottom: 120 }}
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
    </View>
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
  labelContent: {
    width: '100%',
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24
  },
  label: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    lineHeight: 20,
    color: colors.text.default
  },
  contentCard: {
    width: '100%',
    marginTop: 8,
    paddingHorizontal: 16
  }
})
