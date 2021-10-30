import axiosClient from '../../../providers/axiosClient'

const deleteUser = async (id: string): Promise<void> => {
  await axiosClient.delete(`/users/${id}`)
}

export { deleteUser }
