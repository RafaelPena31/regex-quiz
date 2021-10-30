import axiosClient from '../../../providers/axiosClient'
import { IUpdateQuestion } from '../types/repositories/IUpdateQuestion'

const updateQuestion = async ({ id, body, correctAnswer, title, type }: IUpdateQuestion): Promise<void> => {
  await axiosClient.put(`/questions/${id}`, { body, correctAnswer, title, type })
}

export { updateQuestion }
