import { AxiosResponse } from 'axios'
import axiosClient from '../../../providers/axiosClient'
import { IQuestion } from '../types/entities/IQuestion'
import { ICreateQuestion } from '../types/repositories/ICreateQuestion'

const createQuestion = async ({ body, correctAnswer, title, type }: ICreateQuestion): Promise<AxiosResponse<IQuestion>> => {
  const questionData = await axiosClient.post('/question', { body, correctAnswer, title, type })

  return questionData.data
}

export { createQuestion }
