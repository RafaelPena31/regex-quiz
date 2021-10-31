import axiosClient from '../../../providers/axiosClient'
import { ICreateUserAnswer } from '../types/repositories/ICreateUserAnswer'

const createUserAnswer = async ({ question_id, userAnswer, user_id }: ICreateUserAnswer) => {
  const userAnswerData = await axiosClient.post('/usersAnswers', { question_id, userAnswer, user_id })
  return userAnswerData.data
}

export { createUserAnswer }
