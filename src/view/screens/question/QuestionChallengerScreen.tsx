import { RouteProp, useNavigation } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useDispatch } from 'react-redux'
import { IQuestion } from '../../../data/services/server/question/QuestionTypes'
import { IAnswer } from '../../../data/services/server/userAnswer/AnswerTypes'
import { useQuestion } from '../../../domain/hooks/QuestionHook'
import { SetAnswer, SetFinishedChallenger } from '../../../domain/redux/QuestionStore'
import { TypeQuestions } from '../../../domain/types/enum'
import Button from '../../components/shared/buttons/Button'
import { colors } from '../../style/colors'
import { helperRealHeightDimension } from '../../style/UIGlobalHelper'
import { TOTAL_QUESTION_COUNT } from './constants/QuestionConstants'
import QuestionBoolean from './modules/QuestionBoolean'
import QuestionString from './modules/QuestionString'

interface NavigationParams {
  challengerId: number
}

type QuestionChallengerScreenProps = {
  route: RouteProp<Record<string, NavigationParams>, 'RouteParam'>
}

const currentHeight = helperRealHeightDimension()

export default function QuestionChallengerScreen({ route }: QuestionChallengerScreenProps) {
  const { challengerId } = route.params
  const { goBack, navigate } = useNavigation()
  const dispatch = useDispatch()

  const cacheQuestionList = useQuestion()

  /** @constant Current_Question -> Current question Index */
  const [currentQuestion, setCurrentQuestion] = useState(1)

  /** @constant Question_List -> Question list controllers */
  const [questionList, setQuestionList] = useState<IQuestion[]>([])
  const [questionListAnswer, setQuestionListAnswer] = useState<Record<string, IAnswer>>({
    question_1: {
      index: 1,
      answer: ''
    },
    question_2: {
      index: 2,
      answer: ''
    },
    question_3: {
      index: 3,
      answer: ''
    },
    question_4: {
      index: 4,
      answer: ''
    },
    question_5: {
      index: 5,
      answer: ''
    }
  })

  /** @constant Current_Answer_Per_Question -> Current answer controller for each question */
  const [currentBooleanAnswer, setCurrentBooleanAnswer] = useState<boolean | null>(null)
  const [currentStringAnswer, setCurrentStringAnswer] = useState<string | null>(null)

  /** @constant Controller_Question_Constants */
  const LAST_QUESTION_INDEX = challengerId * TOTAL_QUESTION_COUNT
  const INITIAL_QUESTION_INDEX = LAST_QUESTION_INDEX - TOTAL_QUESTION_COUNT

  const isFirstQuestion = currentQuestion === 1
  const isNotLastQuestion = currentQuestion < TOTAL_QUESTION_COUNT

  const isQuestionListAvailable = !!(questionList.length && questionList.length === TOTAL_QUESTION_COUNT)
  const currentType = isQuestionListAvailable ? questionList[currentQuestion - 1].type : ''
  const isQuestionTypeBoolean = currentType === TypeQuestions.BOOLEAN

  /** @method Question_List_Observable_Method -> Observer responsible for feeding the questionList constant */
  const onHandleFeedQuestionList = useCallback(() => {
    const currentQuestionList = cacheQuestionList.slice(INITIAL_QUESTION_INDEX, LAST_QUESTION_INDEX)
    setQuestionList(currentQuestionList)
  }, [INITIAL_QUESTION_INDEX, LAST_QUESTION_INDEX, cacheQuestionList])

  useEffect(() => {
    onHandleFeedQuestionList()
  }, [onHandleFeedQuestionList])

  /** @method Current_Answer_Observable_Method -> Observer responsible for feeding the currentAnswer constant */
  const onHandleFeedCurrentAnswer = useCallback(() => {
    const cacheAnswer = questionListAnswer[`question_${currentQuestion}`].answer
    const cacheAnswerString = cacheAnswer as string
    const isCurrentAnswerAvailable = typeof cacheAnswer === typeof false || cacheAnswerString.length > 0

    if (isCurrentAnswerAvailable) {
      switch (currentType) {
        case TypeQuestions.BOOLEAN:
          setCurrentBooleanAnswer(cacheAnswer as boolean)
          break
        case TypeQuestions.PRACTICAL:
          setCurrentStringAnswer(cacheAnswer as string)
          break
        default:
          break
      }
    }
  }, [currentType, questionListAnswer, currentQuestion])

  useEffect(() => {
    onHandleFeedCurrentAnswer()
  }, [onHandleFeedCurrentAnswer])

  /**
   * @function onHandleGoBackChallenger
   * @description Method to decide if the button will close the challenger or go back to the last question
   */
  const onHandleGoBackChallenger = () => {
    if (isFirstQuestion) {
      setCurrentBooleanAnswer(null)
      setCurrentStringAnswer(null)
      setQuestionListAnswer({
        question_1: {
          index: 1,
          answer: ''
        },
        question_2: {
          index: 2,
          answer: ''
        },
        question_3: {
          index: 3,
          answer: ''
        },
        question_4: {
          index: 4,
          answer: ''
        },
        question_5: {
          index: 5,
          answer: ''
        }
      })
      setQuestionList([])

      goBack()
    } else {
      setCurrentQuestion(state => state - 1)
    }
  }

  /**
   * @function onHandleConfirmAnswer
   * @description Method responsible for finalizing the question and proceeding to the next action
   */
  const onHandleConfirmAnswer = (questionListAnswer: Record<string, IAnswer>) => {
    setQuestionListAnswer(questionListAnswer)
    setCurrentBooleanAnswer(null)
    setCurrentStringAnswer(null)

    if (isNotLastQuestion) {
      setCurrentQuestion(state => state + 1)
    }
  }

  /**
   * @function onHandleProcessBooleanAnswer
   * @description Method responsible for process boolean answer for the correct question
   */
  const onHandleProcessBooleanAnswer = () => {
    const isBooleanAnswerAvailable = currentBooleanAnswer !== null

    if (isBooleanAnswerAvailable) {
      const newQuestionListAnswer = questionListAnswer
      newQuestionListAnswer[`question_${currentQuestion}`] = {
        index: currentQuestion,
        answer: currentBooleanAnswer!
      }

      onHandleConfirmAnswer(newQuestionListAnswer)
    }
  }

  /**
   * @function onHandleProcessStringAnswer
   * @description Method responsible for process string answer for the correct question
   */
  const onHandleProcessStringAnswer = () => {
    const isStringAnswerAvailable = currentStringAnswer !== null

    if (isStringAnswerAvailable) {
      const newQuestionListAnswer = questionListAnswer
      newQuestionListAnswer[`question_${currentQuestion}`] = {
        index: currentQuestion,
        answer: currentStringAnswer!
      }

      onHandleConfirmAnswer(newQuestionListAnswer)
    }
  }

  /**
   * @function onHandleFinishChallenger
   * @description Method responsible for finish the challenger
   */
  const onHandleFinishChallenger = () => {
    const answerList: Record<string, IAnswer> = {
      question_1: {
        index: 1,
        questionId: questionList[0].id,
        questionType: questionList[0].type,
        answer: questionListAnswer.question_1.answer,
        correctAnswer: questionList[0].correctAnswer,
        isCorrect: `${questionListAnswer.question_1.answer}` === questionList[0].correctAnswer
      },
      question_2: {
        index: 2,
        questionId: questionList[1].id,
        questionType: questionList[1].type,
        answer: questionListAnswer.question_2.answer,
        correctAnswer: questionList[1].correctAnswer,
        isCorrect: `${questionListAnswer.question_2.answer}` === questionList[1].correctAnswer
      },
      question_3: {
        index: 3,
        questionId: questionList[2].id,
        questionType: questionList[2].type,
        answer: questionListAnswer.question_3.answer,
        correctAnswer: questionList[2].correctAnswer,
        isCorrect: `${questionListAnswer.question_3.answer}` === questionList[2].correctAnswer
      },
      question_4: {
        index: 4,
        questionId: questionList[3].id,
        questionType: questionList[3].type,
        answer: questionListAnswer.question_4.answer,
        correctAnswer: questionList[3].correctAnswer,
        isCorrect: `${questionListAnswer.question_4.answer}` === questionList[3].correctAnswer
      },
      question_5: {
        index: 5,
        questionId: questionList[4].id,
        questionType: questionList[4].type,
        answer: questionListAnswer.question_5.answer,
        correctAnswer: questionList[4].correctAnswer,
        isCorrect: `${questionListAnswer.question_5.answer}` === questionList[4].correctAnswer
      }
    }

    dispatch(SetAnswer(answerList))
    dispatch(SetFinishedChallenger(challengerId))
    navigate('Question', {
      screen: 'QuestionResult'
    })
  }

  /**
   * @function onHandleConfirmQuestion
   * @description Method responsible for confirm answer and process the data
   */
  const onHandleConfirmQuestion = () => {
    switch (currentType) {
      case TypeQuestions.BOOLEAN:
        onHandleProcessBooleanAnswer()
        break
      case TypeQuestions.PRACTICAL:
        onHandleProcessStringAnswer()
        break
      default:
        break
    }

    if (!isNotLastQuestion) {
      onHandleFinishChallenger()
    }
  }

  /** @method UIMethods */

  const getBackButtonText = () => {
    return isFirstQuestion ? 'Sair do desafio' : 'Voltar questão'
  }

  const getConfirmButtonText = () => {
    return isNotLastQuestion ? 'Próxima questão' : 'Finalizar desafio'
  }

  const getCurrentQuestionBody = (currentQuestionIndex: number) => {
    if (isQuestionListAvailable) {
      return questionList[currentQuestionIndex].body
    }
    return ''
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onHandleGoBackChallenger} style={styles.backButton}>
          <Icon name='chevron-left' size={24} color={colors.text.default2} />
          <Text style={styles.backButtonText}>{getBackButtonText()}</Text>
        </TouchableOpacity>

        <Text style={styles.questionLabel}>Questão {currentQuestion}</Text>
        <Text style={styles.questionText}>{getCurrentQuestionBody(currentQuestion - 1)}</Text>

        <Text style={styles.answerLabel}>Resposta:</Text>

        {isQuestionTypeBoolean ? (
          <QuestionBoolean answer={currentBooleanAnswer} setAnswer={setCurrentBooleanAnswer} />
        ) : (
          <QuestionString answer={currentStringAnswer} setAnswer={setCurrentStringAnswer} />
        )}

        <View style={styles.buttonContent}>
          <Button text={getConfirmButtonText()} onPress={onHandleConfirmQuestion} />
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
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    marginLeft: -8
  },
  backButtonText: {
    fontFamily: 'Inter-Light',
    fontSize: 14,
    lineHeight: 16,
    color: colors.text.default
  },
  questionLabel: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    lineHeight: 20,
    color: colors.text.default
  },
  questionText: {
    fontFamily: 'Inter-Regular',
    fontSize: 24,
    lineHeight: 30,
    color: colors.text.default
  },
  answerLabel: {
    marginTop: 32,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    lineHeight: 20,
    color: colors.text.default
  },
  buttonContent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 24,
    left: 16
  }
})
