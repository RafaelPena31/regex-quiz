import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { IQuestion } from '../../../data/services/server/question/types/entities/IQuestion'
import { SetQuestion } from '../../../domain/redux/QuestionStore'
import { mockQuestions } from '../../../utils/mock'
import images from '../../assets/images'
import BackButton from '../../components/shared/buttons/BackButton'
import CardButton from '../../components/shared/buttons/CardButton'
import { colors } from '../../style/colors'
import { helperRealHeightDimension } from '../../style/UIGlobalHelper'
import { TOTAL_QUESTION_COUNT } from './constants/QuestionConstants'

const { littleCompleteStudent } = images.hall

const currentHeight = helperRealHeightDimension()

export default function QuestionHallScreen() {
  const { goBack, navigate } = useNavigation()
  const dispatch = useDispatch()

  const [questionList, setQuestionList] = useState<IQuestion[]>([])
  const [challengerCount, setChallengerCount] = useState<number[]>([])

  useEffect(() => {
    setQuestionList(mockQuestions)
    dispatch(SetQuestion(mockQuestions))
  }, [dispatch])

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

  return (
    <>
      <StatusBar backgroundColor={colors.background} barStyle='dark-content' />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <BackButton onPress={goBack} />

            <View style={styles.contentHeader}>
              <Image source={littleCompleteStudent} style={styles.headerImage} />
              <Text style={styles.descriptionHeaderText}>Selecione um desafio para participar</Text>
            </View>
          </View>

          <View style={styles.cardOptionStack}>
            {challengerCount.map((countChallenger, index) => (
              <CardButton
                key={countChallenger}
                title={countChallenger.toString()}
                text='Desafio'
                dark={index === 0}
                onPress={() => onHandleStartChallenger(countChallenger)}
              />
            ))}
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