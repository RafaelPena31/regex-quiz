import { AxiosResponse } from 'axios'
import axiosClient from '../../../providers/axiosClient'
import { IUserAnswer } from '../types/entities/IUserAnswer'

const findUserAnswerByQuestion = async (questionId: string): Promise<AxiosResponse<IUserAnswer>> => {
  const userAnswerByQuestion = await axiosClient.get(`/usersAnswers/question/${questionId}`)
  return userAnswerByQuestion.data
}

export { findUserAnswerByQuestion }
