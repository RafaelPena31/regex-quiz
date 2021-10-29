import { AxiosResponse } from 'axios'
import axiosClient from '../../../providers/axiosClient'
import { IQuestion } from '../types/entities/IQuestion'

const findQuestionById = async (id: string): Promise<AxiosResponse<IQuestion>> => {
  const questionData = await axiosClient.get(`/questions/${id}`)
  return questionData.data
}

export { findQuestionById }
