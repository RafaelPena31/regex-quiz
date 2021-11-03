import axiosClient from '../../provider/axiosClient'
import { ICreateUserAnswer, IPayloadCreateAnswerResponse, IPayloadCreateManyAnswerResponse, IUserAnswer } from './AnswerTypes'

export const CreateAnswer = async (payload: ICreateUserAnswer): Promise<IPayloadCreateAnswerResponse> => {
  try {
    const response = await axiosClient.post<IUserAnswer>('/answers', payload)

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

export const CreateManyAnswer = async (payload: { answers: ICreateUserAnswer[] }): Promise<IPayloadCreateManyAnswerResponse> => {
  try {
    const response = await axiosClient.post<{ answers: IUserAnswer[] }>('/answers/batch', payload)

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

export const UpdateAnswer = async (payload: IUserAnswer): Promise<IPayloadCreateAnswerResponse> => {
  try {
    const response = await axiosClient.put<IUserAnswer>(`/answers/${payload.id}`, {
      userId: payload.user_id,
      questionId: payload.question_id,
      userAnswer: payload.userAnswer
    })

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

export const UpdateManyAnswer = async (payload: { answers: ICreateUserAnswer[] }): Promise<IPayloadCreateManyAnswerResponse> => {
  try {
    const response = await axiosClient.put<{ answers: IUserAnswer[] }>('/answers/batch', payload)

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

export const FindAnswerByUserId = async (userId: string): Promise<IPayloadCreateAnswerResponse> => {
  try {
    const response = await axiosClient.get<IUserAnswer>(`/answers/user/${userId}`)

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
