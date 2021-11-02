import { Dispatch } from 'redux'
import { IAnswer, IQuestion } from '../../data/services/server/question/types/entities/IQuestion'

export const SET_QUESTION = 'SET_QUESTION'
export const RESET_QUESTION = 'RESET_QUESTION'

export const SET_ANSWER = 'SET_ANSWER'
export const RESET_ANSWER = 'RESET_ANSWER'

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

export interface QuestionModelState {
  questionList: IQuestion[]
  answeredQuestions: Record<string, IAnswer> | null
}

export type QuestionActions = ISetQuestion | IResetQuestion | ISetAnswer | IResetAnswer

export const questionState: QuestionModelState = {
  questionList: [],
  answeredQuestions: null
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

export const SetAnswer = (answer: Record<string, IAnswer>) => async (dispatch: Dispatch<QuestionActions>) => {
  dispatch({ type: SET_ANSWER, payload: answer })
}

export const ResetAnswer = () => async (dispatch: Dispatch<QuestionActions>) => {
  dispatch({ type: RESET_ANSWER })
}
