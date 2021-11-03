import React, { useCallback, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { IAnswer } from '../../../../data/services/server/userAnswer/AnswerTypes'
import images from '../../../assets/images'
import { colors } from '../../../style/colors'
import QuestionModal from './QuestionModal'

interface QuestionCardButtonProps {
  question: IAnswer
}

const { littleCompleteStudent } = images.hall

export default function QuestionCardButton({ question }: QuestionCardButtonProps) {
  const [isAnswerModalVisible, setAnswerModalVisible] = useState(false)
  const { index, isCorrect, questionType, correctAnswer } = question

  const onHandleViewQuestionAnswer = useCallback(() => {
    if (isCorrect) {
      showMessage({
        message: 'Você acertou essa questão',
        type: 'success'
      })
    } else {
      setAnswerModalVisible(true)
    }
  }, [isCorrect])

  return (
    <>
      <TouchableOpacity style={styles.questionCardButton} onPress={() => onHandleViewQuestionAnswer()}>
        <View>
          <Text style={styles.questionCardButtonTextNumber}>{index}</Text>
          <Text style={styles.questionCardButtonTextLabel}>Questão</Text>
        </View>

        <View>
          <Text style={styles.questionCardButtonGradeText}>{isCorrect ? 1 : 0}/1</Text>
        </View>

        <Image source={littleCompleteStudent} style={styles.questionCardButtonImage} />
      </TouchableOpacity>

      <QuestionModal
        visible={isAnswerModalVisible}
        setVisible={setAnswerModalVisible}
        questionIndex={index}
        questionType={questionType!}
        answer={correctAnswer!}
      />
    </>
  )
}

const styles = StyleSheet.create({
  questionCardButton: {
    position: 'relative',
    width: '100%',
    backgroundColor: colors.neutral.neutral,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 24,
    marginBottom: 16
  },
  questionCardButtonTextNumber: {
    fontFamily: 'Poppins-Black',
    fontSize: 24,
    lineHeight: 30,
    color: '#FFFFFF'
  },
  questionCardButtonTextLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    lineHeight: 20,
    color: '#FFFFFF'
  },
  questionCardButtonGradeText: {
    fontFamily: 'Poppins-Black',
    fontSize: 24,
    lineHeight: 30,
    color: '#FFFFFF',
    marginRight: 70
  },
  questionCardButtonImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 83,
    height: 70.75,
    borderRadius: 20
  }
})
