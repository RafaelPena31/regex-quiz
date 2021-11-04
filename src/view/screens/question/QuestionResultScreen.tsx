import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { useAnswer } from '../../../domain/hooks/QuestionHook'
import { ResetAnswer } from '../../../domain/redux/QuestionStore'
import images from '../../assets/images'
import Button from '../../components/shared/buttons/Button'
import { colors } from '../../style/colors'
import { helperRealHeightDimension } from '../../style/UIGlobalHelper'
import QuestionCardButton from './components/QuestionCardButton'
import { TOTAL_QUESTION_COUNT } from './constants/QuestionConstants'

const { littleCompleteStudent } = images.hall

const currentHeight = helperRealHeightDimension()

export default function QuestionResultScreen() {
  const [totalGrade, setTotalGrade] = useState(0)

  const { navigate } = useNavigation()
  const dispatch = useDispatch()
  const currentAnswer = useAnswer()

  useEffect(() => {
    let cacheTotalGrade = 0

    if (currentAnswer) {
      Object.keys(currentAnswer).forEach(key => {
        const correctCacheAnswer = currentAnswer[key].isCorrect
        if (correctCacheAnswer) {
          cacheTotalGrade = cacheTotalGrade + 1
        }
      })

      setTotalGrade(cacheTotalGrade)
    }
  }, [currentAnswer])

  const onHandleNavigateToHall = () => {
    dispatch(ResetAnswer())

    navigate('Question', {
      screen: 'QuestionHall'
    })
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={littleCompleteStudent} style={styles.headerImage} />
          <Text style={styles.headerText}>Vamos ver o seu resultado, será que você foi bem?</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.grade}>
            {totalGrade}/{TOTAL_QUESTION_COUNT}
          </Text>

          {currentAnswer &&
            Object.keys(currentAnswer).map(key => (
              <>
                <QuestionCardButton question={currentAnswer[key]} />
              </>
            ))}

          <View style={styles.buttonContainer}>
            <Button text='Concluir' onPress={onHandleNavigateToHall} />
          </View>
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
    paddingVertical: 24,
    paddingHorizontal: 16
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 32
  },
  headerImage: {
    width: 83,
    height: 70.75,
    marginRight: 16
  },
  headerText: {
    flex: 1,
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    lineHeight: 22,
    color: colors.text.default
  },
  content: {
    width: '100%',
    alignItems: 'center'
  },
  grade: {
    fontFamily: 'Poppins-Black',
    fontSize: 24,
    lineHeight: 30,
    color: colors.text.default,
    textAlign: 'center',
    marginBottom: 24
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 34
  }
})
