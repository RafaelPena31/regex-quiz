import axiosClient from '../../../providers/axiosClient'

const deleteUserAnswer = async (id: string): Promise<void> => {
  await axiosClient.delete(`/usersAnswers/${id}`)
}

export { deleteUserAnswer }
