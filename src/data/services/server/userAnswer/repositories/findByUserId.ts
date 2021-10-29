import { AxiosResponse } from 'axios'
import axiosClient from '../../../providers/axiosClient'
import { IUserAnswer } from '../types/entities/IUserAnswer'

const findUserAnswerByUserId = async (userId: string): Promise<AxiosResponse<IUserAnswer>> => {
  const userAnswerByUserId = await axiosClient.get(`usersAnswers/user/${userId}`)
  return userAnswerByUserId.data
}

export { findUserAnswerByUserId }
