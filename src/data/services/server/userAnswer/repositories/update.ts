import axiosClient from '../../../providers/axiosClient'
import { IUpdateUserAnswer } from '../types/repositories/IUpdateUserAnswer'

const updateUserAnswer = async ({ id, questionId, userAnswer, userId }: IUpdateUserAnswer): Promise<void> => {
  await axiosClient.put(`/usersAnswers/${id}`, { questionId, userAnswer, userId })
}

export { updateUserAnswer }
