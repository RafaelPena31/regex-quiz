import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import { TypeQuestions } from '../../../../domain/types/enum'
import { colors } from '../../../style/colors'

interface QuestionModalProps {
  questionIndex: number
  questionType: TypeQuestions
  answer: string | boolean
  visible: boolean
  setVisible: (visible: boolean) => void
}

export default function QuestionModal({ visible, setVisible, questionIndex, questionType, answer }: QuestionModalProps) {
  const onHandleClose = () => setVisible(false)

  const getCurrentColor = (buttonValue: boolean) => {
    if (answer) {
      return buttonValue ? colors.secondary.secondary1 : colors.secondary.secondary2
    } else if (answer !== null) {
      return buttonValue ? colors.secondary.secondary2 : colors.secondary.secondary1
    }
    return colors.secondary.secondary2
  }

  const isBooleanQuestion = questionType === TypeQuestions.BOOLEAN

  return (
    <Modal
      isVisible={visible}
      onSwipeComplete={onHandleClose}
      onBackdropPress={onHandleClose}
      swipeDirection={['down']}
      style={styles.container}>
      <View style={styles.content}>
        <View style={styles.topBar} />

        <Text style={styles.title}>Questão {questionIndex}</Text>
        <View style={styles.answerContainer}>
          <Text style={styles.answerLabel}>Resposta:</Text>

          {isBooleanQuestion ? (
            <View style={styles.booleanButtonStack}>
              <TouchableOpacity style={styles.booleanButton}>
                <View style={[styles.checkbox, { backgroundColor: getCurrentColor(true) }]} />
                <Text style={styles.booleanButtonText}>Verdadeiro</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.booleanButton}>
                <View style={[styles.checkbox, { backgroundColor: getCurrentColor(false) }]} />
                <Text style={styles.booleanButtonText}>Falso</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.textAreaAnswer}>
              <Text>{answer}</Text>
            </View>
          )}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    margin: 0
  },
  content: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    alignItems: 'center',
    borderTopStartRadius: 16,
    borderTopEndRadius: 16
  },
  topBar: {
    width: 50,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.text.default,
    marginBottom: 24
  },
  title: {
    fontFamily: 'Poppins-Black',
    fontSize: 24,
    lineHeight: 30,
    color: colors.text.default,
    textAlign: 'center'
  },
  answerContainer: {
    width: '100%',
    alignItems: 'flex-start'
  },
  answerLabel: {
    marginTop: 12,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    lineHeight: 20,
    color: colors.text.default
  },
  booleanButton: {
    marginTop: 16,
    position: 'relative',
    padding: 16,
    width: '48%',
    borderWidth: 1,
    borderColor: colors.neutral.inputBorder,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  checkbox: {
    position: 'absolute',
    left: 16,
    top: 16,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.secondary.secondary2,
    marginRight: 24
  },
  booleanButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    lineHeight: 20,
    color: colors.text.default
  },
  booleanButtonStack: {
    width: '100%',
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textAreaAnswer: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.neutral.inputBorder,
    padding: 16,
    marginTop: 16
  }
})
