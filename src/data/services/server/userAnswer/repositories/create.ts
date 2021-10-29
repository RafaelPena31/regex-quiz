import axiosClient from '../../../providers/axiosClient'
import { ICreateUserAnswer } from '../types/repositories/ICreateUserAnswer'

const createUserAnswer = async ({ questionId, userAnswer, userId }: ICreateUserAnswer) => {
  const userAnswerData = await axiosClient.post('/usersAnswers', { questionId, userAnswer, userId })
  return userAnswerData.data
}

export { createUserAnswer }
