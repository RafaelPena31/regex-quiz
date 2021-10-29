import { AxiosResponse } from 'axios'
import axiosClient from '../../../providers/axiosClient'
import { IUserAnswer } from '../types/entities/IUserAnswer'

const findUserAnswerById = async (id: string): Promise<AxiosResponse<IUserAnswer>> => {
  const userAnswer = await axiosClient.get(`/usersAnswers/${id}`)
  return userAnswer.data
}

export { findUserAnswerById }
