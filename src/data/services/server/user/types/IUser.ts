import { AxiosResponse } from 'axios'
import { IUser } from './entities/IUser'
import { ICreateUser } from './repositories/ICreateUser'
import { IUpdateUser } from './repositories/IUpdateUser'

interface IUserServerServiceMethods {
  create({ answeredQuestions, email, name, score }: ICreateUser): Promise<AxiosResponse<IUser>>
  update({ id, answeredQuestions, email, name, score }: IUpdateUser): Promise<void>
  delete(id: string): Promise<void>
  findById(id: string): Promise<AxiosResponse<IUser>>
  findByEmail(email: string): Promise<AxiosResponse<IUser>>
}

export type { IUserServerServiceMethods }
