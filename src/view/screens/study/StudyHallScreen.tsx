import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useEffect } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { useDispatch } from 'react-redux'
import { FindAllArticle } from '../../../data/services/server/article/ArticleService'
import { useArticlePage } from '../../../domain/hooks/ArticleHook'
import { SetArticle } from '../../../domain/redux/ArticleStore'
import BackButton from '../../components/shared/buttons/BackButton'
import { colors } from '../../style/colors'
import { helperRealHeightDimension } from '../../style/UIGlobalHelper'
import ArticleContainer from './components/articles/container/ArticleContainer'
import OpenedArticleContainer from './components/articles/opened/OpenedArticleContainer'

const currentHeight = helperRealHeightDimension()

export default function StudyHallScreen() {
  const { goBack } = useNavigation()
  const dispatch = useDispatch()

  const articleList = useArticlePage(1)

  const fetchAllArticle = useCallback(async () => {
    const articleResponse = await FindAllArticle()
    const { requestedStatus, response } = articleResponse

    if (requestedStatus.statusCode !== 500) {
      dispatch(SetArticle(response!))
    } else {
      showMessage({
        message: 'Não foi possível buscar os artigos, verifique sua conexão e tente novamente',
        type: 'danger'
      })
    }
  }, [dispatch])

  useEffect(() => {
    fetchAllArticle()
  }, [fetchAllArticle])

  return (
    <>
      <StatusBar backgroundColor={colors.background} barStyle='dark-content' />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.backButton}>
            <BackButton onPress={goBack} />
          </View>
          <Text style={styles.headerTitle}>Estudos</Text>
        </View>

        <ArticleContainer data={articleList} />

        <View style={styles.line} />

        <OpenedArticleContainer />
      </View>
    </>
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
  line: {
    height: 1,
    backgroundColor: colors.text.default4,
    marginRight: 16,
    marginLeft: 16
  }
})
