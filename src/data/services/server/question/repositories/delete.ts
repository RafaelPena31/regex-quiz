import axiosClient from '../../../providers/axiosClient'

const deleteQuestion = async (id: string) => {
  await axiosClient.delete(`/question/${id}`)
}

export { deleteQuestion }
