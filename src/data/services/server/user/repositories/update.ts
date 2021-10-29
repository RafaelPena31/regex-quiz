import axiosClient from '../../../providers/axiosClient'
import { IUpdateUser } from '../types/repositories/IUpdateUser'

const updateUser = async ({ id, answeredQuestions, email, name, score }: IUpdateUser): Promise<void> => {
  await axiosClient.put(`/users/${id}`, { answeredQuestions, email, name, score })
}

export { updateUser }
