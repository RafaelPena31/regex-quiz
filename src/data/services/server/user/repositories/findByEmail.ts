import { AxiosResponse } from 'axios'
import axiosClient from '../../../providers/axiosClient'
import { IUser } from '../types/entities/IUser'

const findUserByEmail = async (email: string): Promise<AxiosResponse<IUser>> => {
  const user = await axiosClient.get(`users/email/${email}`)

  return user.data
}

export { findUserByEmail }
