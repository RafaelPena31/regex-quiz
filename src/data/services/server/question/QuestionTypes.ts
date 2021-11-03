import { TypeQuestions } from '../../../../domain/types/enum'
import { IStatusRequest } from '../../../../domain/types/general'

export interface IQuestion {
  id: string
  correctAnswer: string
  title: string
  type: TypeQuestions
  body: string
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
