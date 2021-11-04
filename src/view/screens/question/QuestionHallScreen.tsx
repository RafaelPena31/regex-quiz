import { RouteProp, useNavigation } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { useDispatch } from 'react-redux'
import { FindAllQuestion } from '../../../data/services/server/question/QuestionService'
import { IQuestion } from '../../../data/services/server/question/QuestionTypes'
import { useChallenger } from '../../../domain/hooks/QuestionHook'
import { SetQuestion } from '../../../domain/redux/QuestionStore'
import images from '../../assets/images'
import BackButton from '../../components/shared/buttons/BackButton'
import CardButton from '../../components/shared/buttons/CardButton'
import { colors } from '../../style/colors'
import { helperRealHeightDimension } from '../../style/UIGlobalHelper'
import { TOTAL_QUESTION_COUNT } from './constants/QuestionConstants'

interface NavigationParams {
  isByFinishedChallenger: boolean
}

type QuestionChallengerScreenProps = {
  route: RouteProp<Record<string, NavigationParams>, 'RouteParam'>
}

const { littleCompleteStudent } = images.hall

const currentHeight = helperRealHeightDimension()

export default function QuestionHallScreen({ route }: QuestionChallengerScreenProps) {
  const { goBack, navigate } = useNavigation()
  const dispatch = useDispatch()

  const [questionList, setQuestionList] = useState<IQuestion[]>([])
  const [challengerCount, setChallengerCount] = useState<number[]>([])

  const finishedChallenger = useChallenger()

  const fetchQuestions = useCallback(async () => {
    const questionResponse = await FindAllQuestion()
    const { requestedStatus, response } = questionResponse

    if (requestedStatus.statusCode !== 500) {
      setQuestionList(response!)
      dispatch(SetQuestion(response!))
    } else {
      showMessage({
        message: 'Não foi possível buscar os artigos, verifique sua conexão e tente novamente',
        type: 'danger'
      })
    }
  }, [dispatch])

  useEffect(() => {
    fetchQuestions()
  }, [fetchQuestions])

  useEffect(() => {
    const count: number[] = []
    const loop = Math.trunc(questionList.length / TOTAL_QUESTION_COUNT)

    for (let index = 0; index < loop; index++) {
      count.push(count.length + 1)
    }

    setChallengerCount(count)
  }, [questionList.length])

  const onHandleStartChallenger = (challengerId: number) => {
    navigate('Question', {
      screen: 'QuestionChallenger',
      params: { challengerId }
    })
  }

  const getDescriptionText = () => {
    if (route.params && route.params.isByFinishedChallenger) return 'Esses são os desafios que você já finalizou, gostaria de refazê-los?'
    return 'Selecione um desafio para participar'
  }

  const getFinishedChallengers = (countChallenger: number) => {
    const isByFinishedChallengerAvailable = !!(route.params && route.params.isByFinishedChallenger)

    if (isByFinishedChallengerAvailable) {
      return finishedChallenger.includes(countChallenger)
    }
    return true
  }

  return (
    <>
      <StatusBar backgroundColor={colors.background} barStyle='dark-content' />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <BackButton onPress={goBack} />

            <View style={styles.contentHeader}>
              <Image source={littleCompleteStudent} style={styles.headerImage} />
              <Text style={styles.descriptionHeaderText}>{getDescriptionText()}</Text>
            </View>
          </View>

          <View style={styles.cardOptionStack}>
            {challengerCount.map((countChallenger, index) => {
              return (
                getFinishedChallengers(countChallenger) && (
                  <CardButton
                    key={countChallenger}
                    title={countChallenger.toString()}
                    text='Desafio'
                    dark={index === 0}
                    onPress={() => onHandleStartChallenger(countChallenger)}
                  />
                )
              )
            })}
          </View>
        </View>
      </ScrollView>
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
  contentHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 16
  },
  headerImage: {
    width: 83,
    height: 70,
    marginRight: 16
  },
  descriptionHeaderText: {
    flex: 1,
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    lineHeight: 20,
    color: colors.text.default2
  },
  cardOptionStack: {
    marginTop: 64,
    paddingHorizontal: 16,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
})
