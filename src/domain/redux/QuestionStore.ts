import { Dispatch } from 'redux'
import { IQuestion } from '../../data/services/server/question/QuestionTypes'
import { CreateManyAnswer } from '../../data/services/server/userAnswer/AnswerService'
import { IAnswer, ICreateUserAnswer } from '../../data/services/server/userAnswer/AnswerTypes'

export const SET_QUESTION = 'SET_QUESTION'
export const RESET_QUESTION = 'RESET_QUESTION'

export const SET_ANSWER = 'SET_ANSWER'
export const RESET_ANSWER = 'RESET_ANSWER'

export const SET_FINISHED_CHALLENGER = 'SET_FINISHED_CHALLENGER'
export const RESET_FINISHED_CHALLENGER = 'RESET_FINISHED_CHALLENGER'

interface ISetQuestion {
  type: typeof SET_QUESTION
  payload: IQuestion[]
}

interface IResetQuestion {
  type: typeof RESET_QUESTION
}

interface ISetAnswer {
  type: typeof SET_ANSWER
  payload: Record<string, IAnswer>
}

interface IResetAnswer {
  type: typeof RESET_ANSWER
}

interface ISetFinishedChallenger {
  type: typeof SET_FINISHED_CHALLENGER
  payload: number
}

interface IResetFinishedChallenger {
  type: typeof RESET_FINISHED_CHALLENGER
}

export interface QuestionModelState {
  questionList: IQuestion[]
  answeredQuestions: Record<string, IAnswer> | null
  finishedChallengers: number[]
}

export type QuestionActions = ISetQuestion | IResetQuestion | ISetAnswer | IResetAnswer | ISetFinishedChallenger | IResetFinishedChallenger

export const questionState: QuestionModelState = {
  questionList: [],
  answeredQuestions: null,
  finishedChallengers: []
}

export const QuestionReducer = (state = questionState, action: QuestionActions) => {
  switch (action.type) {
    case SET_QUESTION:
      return {
        ...state,
        questionList: action.payload
      }
    case RESET_QUESTION:
      return {
        ...state,
        questionList: []
      }
    case SET_ANSWER:
      return {
        ...state,
        answeredQuestions: action.payload
      }
    case RESET_ANSWER:
      return {
        ...state,
        answeredQuestions: null
      }
    case SET_FINISHED_CHALLENGER:
      return {
        ...state,
        finishedChallengers: [...state.finishedChallengers, action.payload]
      }
    case RESET_FINISHED_CHALLENGER:
      return {
        ...state,
        finishedChallengers: []
      }
    default:
      return state
  }
}

export const SetQuestion = (questionList: IQuestion[]) => async (dispatch: Dispatch<QuestionActions>) => {
  dispatch({ type: SET_QUESTION, payload: questionList })
}

export const ResetQuestion = () => async (dispatch: Dispatch<QuestionActions>) => {
  dispatch({ type: RESET_QUESTION })
}

export const SetAnswer = (answer: Record<string, IAnswer>, userId: string) => async (dispatch: Dispatch<QuestionActions>) => {
  const answerPayload: ICreateUserAnswer[] = Object.keys(answer).map(key => {
    return {
      questionId: answer[key].questionId!,
      userAnswer: `${answer[key].answer}`,
      userId: userId
    }
  })

  await CreateManyAnswer({ answers: answerPayload })

  dispatch({ type: SET_ANSWER, payload: answer })
}

export const ResetAnswer = () => async (dispatch: Dispatch<QuestionActions>) => {
  dispatch({ type: RESET_ANSWER })
}

export const SetFinishedChallenger = (challengerId: number) => async (dispatch: Dispatch<QuestionActions>) => {
  dispatch({ type: SET_FINISHED_CHALLENGER, payload: challengerId })
}

export const ResetFinishedChallenger = () => async (dispatch: Dispatch<QuestionActions>) => {
  dispatch({ type: RESET_FINISHED_CHALLENGER })
}
