import { AxiosResponse } from 'axios'
import axiosClient from '../../../providers/axiosClient'
import { IUser } from '../types/entities/IUser'

const findUserById = async (id: string): Promise<AxiosResponse<IUser>> => {
  const userData = await axiosClient.get(`/users/${id}`)

  return userData.data
}

export { findUserById }
