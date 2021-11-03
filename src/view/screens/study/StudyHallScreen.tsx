import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { useArticlePage } from '../../../domain/hooks/ArticleHook'
import { SetArticle } from '../../../domain/redux/ArticleStore'
import mockArticle from '../../../utils/articleMock.json'
import images from '../../assets/images'
import BackButton from '../../components/shared/buttons/BackButton'
import { colors } from '../../style/colors'
import { helperRealHeightDimension } from '../../style/UIGlobalHelper'
import ArticleContainer from './components/articles/container/ArticleContainer'
import OpenedArticleContainer from './components/articles/opened/OpenedArticleContainer'

const { profilePic } = images

const currentHeight = helperRealHeightDimension()

export default function StudyHallScreen() {
  const { goBack } = useNavigation()
  const dispatch = useDispatch()

  const articleList = useArticlePage(1)

  useEffect(() => {
    dispatch(SetArticle(mockArticle))
  }, [])

  const isArticleAvailable = articleList.length > 0

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
