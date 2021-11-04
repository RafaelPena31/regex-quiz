import axiosClient from '../../provider/axiosClient'
import { IArticle, IPayloadFindAllArticleResponse, IPayloadFindArticleResponse } from './ArticleTypes'

export const FindAllArticle = async (): Promise<IPayloadFindAllArticleResponse> => {
  try {
    const response = await axiosClient.get<IArticle[]>('/articles')

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

export const FindArticleById = async (articleId: string): Promise<IPayloadFindArticleResponse> => {
  try {
    const response = await axiosClient.get<IArticle>(`/articles/${articleId}`)

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
