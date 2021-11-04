import { TypeQuestions } from '../../../../domain/types/enum'
import { IStatusRequest } from '../../../../domain/types/general'

export interface IAlternative {
  id: number
  body: string
  isCorrect: boolean
  questionId: number
}

export interface IQuestion {
  id: string
  correctAnswer: string
  title: string
  type: TypeQuestions
  body: string
  Alternatives: IAlternative[]
}

export interface ICreateQuestion {
  title: string
  correctAnswer: string
  type: string
  body: string
}

export interface IPayloadCreateQuestionResponse {
  requestedStatus: IStatusRequest
  response: IQuestion | null
}

export interface IPayloadFindAllQuestionResponse {
  requestedStatus: IStatusRequest
  response: IQuestion[] | null
}
