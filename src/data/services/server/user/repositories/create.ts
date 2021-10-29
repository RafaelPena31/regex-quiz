import { AxiosResponse } from 'axios'
import axiosClient from '../../../providers/axiosClient'
import { IUser } from '../types/entities/IUser'
import { ICreateUser } from '../types/repositories/ICreateUser'

const createUser = async ({ answeredQuestions, email, name, score }: ICreateUser): Promise<AxiosResponse<IUser>> => {
  const createUserData = await axiosClient.post('/', { answeredQuestions, email, name, score })

  return createUserData.data
}

export { createUser }
