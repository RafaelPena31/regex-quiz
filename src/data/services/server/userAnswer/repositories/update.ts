import axiosClient from '../../../providers/axiosClient'
import { IUpdateUserAnswer } from '../types/repositories/IUpdateUserAnswer'

const updateUserAnswer = async ({ id, question_id, userAnswer, user_id }: IUpdateUserAnswer): Promise<void> => {
  await axiosClient.put(`/usersAnswers/${id}`, { question_id, userAnswer, user_id })
}

export { updateUserAnswer }
