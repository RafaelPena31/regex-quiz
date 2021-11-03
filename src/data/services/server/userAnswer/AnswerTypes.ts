import { TypeQuestions } from '../../../../domain/types/enum'
import { IStatusRequest } from '../../../../domain/types/general'

export interface IAnswer {
  index: number
  answer: string | boolean
  questionId?: string
  questionType?: TypeQuestions
  correctAnswer?: string | boolean
  isCorrect?: boolean
}

export interface IUserAnswer {
  id: string
  user_id: string
  userAnswer: string
  question_id: string
}

export interface ICreateUserAnswer {
  user_id: string
  userAnswer: string
  question_id: string
}

export interface IPayloadCreateAnswerResponse {
  requestedStatus: IStatusRequest
  response: IUserAnswer | null
}

export interface IPayloadCreateManyAnswerResponse {
  requestedStatus: IStatusRequest
  response: { answers: IUserAnswer[] } | null
}
