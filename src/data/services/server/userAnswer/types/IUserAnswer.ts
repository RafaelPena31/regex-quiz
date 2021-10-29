import { AxiosResponse } from 'axios'
import { IUserAnswer } from './entities/IUserAnswer'
import { ICreateUserAnswer } from './repositories/ICreateUserAnswer'
import { IUpdateUserAnswer } from './repositories/IUpdateUserAnswer'

interface IUserAnswerMethods {
  create({ questionId, userAnswer, userId }: ICreateUserAnswer): Promise<AxiosResponse<IUserAnswer>>
  update({ id, questionId, userAnswer, userId }: IUpdateUserAnswer): Promise<void>
  findById(id: string): Promise<AxiosResponse<IUserAnswer>>
  findByQuestion(questionId: string): Promise<AxiosResponse<IUserAnswer>>
  findByUserId(userId: string): Promise<AxiosResponse<IUserAnswer>>
  delete(id: string): Promise<void>
}

export type { IUserAnswerMethods }
