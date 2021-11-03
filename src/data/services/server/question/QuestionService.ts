import axiosClient from '../../provider/axiosClient'
import { ICreateQuestion, IPayloadCreateQuestionResponse, IPayloadFindAllQuestionResponse, IQuestion } from './QuestionTypes'

export const CreateQuestion = async (payload: ICreateQuestion): Promise<IPayloadCreateQuestionResponse> => {
  try {
    const response = await axiosClient.post<IQuestion>('/question', payload)
    return {
      requestedStatus: {
        statusCode: response.status,
        statusText: response.statusText
      },
      response: response.data
    }
  } catch (error) {
    console.error(error)

    return {
      requestedStatus: {
        statusCode: 500,
        statusText: 'Internal Server Error'
      },
      response: null
    }
  }
}

export const FindAllQuestion = async (): Promise<IPayloadFindAllQuestionResponse> => {
  try {
    const response = await axiosClient.get<IQuestion[]>('/questions')

    return {
      requestedStatus: {
        statusCode: response.status,
        statusText: response.statusText
      },
      response: response.data
    }
  } catch (error) {
    console.error(error)

    return {
      requestedStatus: {
        statusCode: 500,
        statusText: 'Internal Server Error'
      },
      response: null
    }
  }
}

export const FindQuestionById = async (questionId: string): Promise<IPayloadCreateQuestionResponse> => {
  try {
    const response = await axiosClient.get<IQuestion>(`/questions/${questionId}`)

    return {
      requestedStatus: {
        statusCode: response.status,
        statusText: response.statusText
      },
      response: response.data
    }
  } catch (error) {
    console.error(error)

    return {
      requestedStatus: {
        statusCode: 500,
        statusText: 'Internal Server Error'
      },
      response: null
    }
  }
}
