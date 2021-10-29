import { AxiosResponse } from 'axios'
import axiosClient from '../../../providers/axiosClient'
import { IQuestion } from '../types/entities/IQuestion'

const findAllQuestions = async (): Promise<AxiosResponse<IQuestion[]>> => {
  const questions = await axiosClient.get('/questions')

  return questions.data
}

export { findAllQuestions }
